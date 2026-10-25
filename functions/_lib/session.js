// Admin login for /admin/: one password, set by Utku as the encrypted Pages secret ADMIN_PASSWORD.
// After a correct password the browser gets a signed cookie (HMAC with the password, valid 7 days),
// sent only to /api/admin/. Changing the password logs every session out.
// The password must be at least 16 characters; a shorter one is refused, so a weak setup stays locked.
// For local tests only: ADMIN_DEV=1 on localhost (never set it in Cloudflare).
export const COOKIE = 'an_admin';
const DAYS = 7;
const enc = new TextEncoder();
const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

const hmac = async (secret, msg) => {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await crypto.subtle.sign('HMAC', key, enc.encode(msg)));
};
// Compare without leaking timing: hash both sides first, then compare fixed-length strings.
const same = async (a, b) => {
  const [x, y] = await Promise.all([a, b].map(async (s) => hex(await crypto.subtle.digest('SHA-256', enc.encode(String(s))))));
  let d = 0;
  for (let i = 0; i < x.length; i++) d |= x.charCodeAt(i) ^ y.charCodeAt(i);
  return d === 0;
};

const ready = (env) => typeof env.ADMIN_PASSWORD === 'string' && env.ADMIN_PASSWORD.length >= 16;
const devHost = (request, env) => env.ADMIN_DEV === '1' && /^(localhost|127\.0\.0\.1)$/.test(new URL(request.url).hostname);

export async function isAdmin(request, env) {
  if (devHost(request, env)) return true;
  if (!ready(env)) return false;
  const m = (request.headers.get('cookie') || '').match(new RegExp(`(?:^|;\\s*)${COOKIE}=(\\d+)\\.([a-f0-9]{64})`));
  if (!m || Number(m[1]) < Date.now()) return false;
  return same(m[2], await hmac(env.ADMIN_PASSWORD, m[1]));
}

export async function checkPassword(password, env) {
  if (!ready(env)) return false;
  return same(password, env.ADMIN_PASSWORD);
}

export async function sessionCookie(env, request) {
  const exp = String(Date.now() + DAYS * 86400_000);
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return `${COOKIE}=${exp}.${await hmac(env.ADMIN_PASSWORD || 'dev', exp)}; Path=/api/admin/; HttpOnly; SameSite=Strict; Max-Age=${DAYS * 86400}${secure}`;
}
export const clearCookie = `${COOKIE}=; Path=/api/admin/; HttpOnly; SameSite=Strict; Max-Age=0`;
