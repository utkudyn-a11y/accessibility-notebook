// Admin pages are protected by Cloudflare Access (Zero Trust): only Utku's email can log in.
// Access puts a signed token (JWT) on every request it lets through. We check that token here too,
// so the admin API stays closed even if the Access rule were missing or wrong.
// Needs these Pages environment variables (not secrets):
//   ACCESS_TEAM_DOMAIN  e.g. https://accessibilitynotebook.cloudflareaccess.com
//   ACCESS_AUD          the "Application Audience (AUD) Tag" of the Access application
//   ADMIN_EMAIL         the only email allowed in
// For local tests only: ADMIN_DEV=1 (never set it in Cloudflare).
const b64url = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=')), (c) => c.charCodeAt(0));
let certs = { at: 0, keys: [] };

async function keys(team) {
  if (Date.now() - certs.at < 3600_000 && certs.keys.length) return certs.keys;
  const res = await fetch(`${team}/cdn-cgi/access/certs`);
  const { keys: jwks } = await res.json();
  certs = { at: Date.now(), keys: jwks };
  return jwks;
}

export async function adminEmail(request, env) {
  if (env.ADMIN_DEV === '1' && /^(localhost|127\.0\.0\.1)$/.test(new URL(request.url).hostname)) return 'dev@localhost';
  const { ACCESS_TEAM_DOMAIN: team, ACCESS_AUD: aud, ADMIN_EMAIL: allowed } = env;
  const token = request.headers.get('cf-access-jwt-assertion');
  if (!team || !aud || !allowed || !token) return null;
  try {
    const [h, p, s] = token.split('.');
    const header = JSON.parse(new TextDecoder().decode(b64url(h)));
    const payload = JSON.parse(new TextDecoder().decode(b64url(p)));
    const jwk = (await keys(team)).find((k) => k.kid === header.kid);
    if (!jwk || header.alg !== 'RS256') return null;
    const key = await crypto.subtle.importKey('jwk', jwk, { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' }, false, ['verify']);
    const ok = await crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, b64url(s), new TextEncoder().encode(`${h}.${p}`));
    const now = Date.now() / 1000;
    const audOk = Array.isArray(payload.aud) ? payload.aud.includes(aud) : payload.aud === aud;
    if (!ok || !audOk || payload.exp < now || payload.iss !== team) return null;
    return String(payload.email || '').toLowerCase() === allowed.toLowerCase() ? payload.email : null;
  } catch { return null; }
}
