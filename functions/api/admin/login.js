// POST /api/admin/login { password } -> sets the admin cookie. POST /api/admin/login { logout: true } -> clears it.
// Wrong passwords wait a moment before answering; the Cloudflare rate limiting rule also covers this path.
import { json, fromSite } from '../../_lib/http.js';
import { checkPassword, sessionCookie, clearCookie } from '../../_lib/session.js';

export async function onRequestPost({ request, env }) {
  if (!fromSite(request)) return json({ error: 'Forbidden' }, 403);
  let data;
  try { data = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }
  if (data && data.logout) return new Response(JSON.stringify({ ok: true }), { headers: { 'content-type': 'application/json', 'set-cookie': clearCookie } });
  if (!(await checkPassword(String(data?.password ?? ''), env))) {
    await new Promise((r) => setTimeout(r, 1500));
    return json({ error: 'Wrong password' }, 401);
  }
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store', 'set-cookie': await sessionCookie(env, request) },
  });
}
