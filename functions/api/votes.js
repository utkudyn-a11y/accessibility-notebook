// Discussion Corner votes (Cloudflare Pages Function, D1 database bound as DB).
// GET  /api/votes?q=6-1             -> { counts: [18, 9, 2], total: 29 }
// POST /api/votes {"q":"6-1","option":0} -> adds one vote, returns the same shape.
// No personal data is stored: only a counter per question and option.
import questions from '../_data/questions.json';

const SITE_HOST = /^(accessibilitynotebook\.com|([a-z0-9-]+\.)?accessibility-notebook\.pages\.dev|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

async function results(db, q) {
  const n = questions[q];
  const { results: rows } = await db.prepare('SELECT option, count FROM votes WHERE question = ?').bind(q).all();
  const counts = Array(n).fill(0);
  for (const r of rows) if (r.option >= 0 && r.option < n) counts[r.option] = r.count;
  return { counts, total: counts.reduce((a, b) => a + b, 0) };
}

export async function onRequestGet({ request, env }) {
  const q = new URL(request.url).searchParams.get('q');
  if (!questions[q]) return json({ error: 'Unknown question' }, 404);
  return json(await results(env.DB, q));
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('origin');
  if (origin) {
    let host = '';
    try { host = new URL(origin).host; } catch {}
    if (!SITE_HOST.test(host)) return json({ error: 'Forbidden' }, 403);
  }
  if (!(request.headers.get('content-type') || '').includes('application/json')) return json({ error: 'Bad request' }, 400);
  let body;
  try { body = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }
  const q = body && body.q;
  const option = body && body.option;
  if (!questions[q] || !Number.isInteger(option) || option < 0 || option >= questions[q]) return json({ error: 'Bad request' }, 400);
  await env.DB.prepare(
    'INSERT INTO votes (question, option, count) VALUES (?1, ?2, 1) ON CONFLICT (question, option) DO UPDATE SET count = count + 1'
  ).bind(q, option).run();
  return json(await results(env.DB, q));
}
