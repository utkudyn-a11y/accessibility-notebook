// Comments on issue pages (Cloudflare Pages Function, D1 database bound as DB).
// GET  /api/comments?issue=29  -> { comments: [{ id, name, body, date, author, replies: [...] }], count }
//                                  only approved comments, oldest first; Utku's replies sit under their comment.
// POST /api/comments            -> { issue, name, comment, website }  (JSON, or a normal form post without JavaScript)
//                                  stores the comment as 'pending'; it shows after Utku approves it in /admin/.
// Only the name and the comment are stored: no email, no IP address.
import issues from '../_data/issues.json';
import { json, fromSite, clean } from '../_lib/http.js';

export const NAME_MAX = 60;
export const BODY_MAX = 2000;
const PENDING_MAX = 300; // safety valve against floods: stop taking new comments when this many wait for review

export async function onRequestGet({ request, env }) {
  const issue = Number(new URL(request.url).searchParams.get('issue'));
  if (!issues.includes(issue)) return json({ error: 'Unknown issue' }, 404);
  const { results } = await env.DB.prepare(
    "SELECT id, parent_id, name, body, is_author, created_at FROM comments WHERE issue = ? AND status = 'approved' ORDER BY created_at, id"
  ).bind(issue).all();
  const top = [];
  const byId = new Map();
  for (const r of results) {
    const c = { id: r.id, name: r.name, body: r.body, date: r.created_at, author: !!r.is_author, replies: [] };
    if (r.parent_id && byId.has(r.parent_id)) byId.get(r.parent_id).replies.push(c);
    else { byId.set(r.id, c); top.push(c); }
  }
  return json({ comments: top, count: results.length });
}

export async function onRequestPost({ request, env }) {
  if (!fromSite(request)) return json({ error: 'Forbidden' }, 403);
  const type = request.headers.get('content-type') || '';
  const isForm = type.includes('application/x-www-form-urlencoded') || type.includes('multipart/form-data');
  let data;
  try {
    data = isForm ? Object.fromEntries(await request.formData()) : await request.json();
  } catch { return json({ error: 'Bad request' }, 400); }

  const issue = Number(data.issue);
  const back = (state) => Response.redirect(new URL(`/notes/${issue}/?comment=${state}#comments`, request.url).toString(), 303);
  if (!issues.includes(issue)) return json({ error: 'Unknown issue' }, 400);

  // Honeypot: people never see or fill the "website" field; bots often do. Pretend it worked.
  if (clean(data.website, 200)) return isForm ? back('sent') : json({ ok: true });

  const name = clean(data.name, NAME_MAX + 1).replace(/\s+/g, ' ');
  const body = clean(data.comment, BODY_MAX + 1);
  const errors = {};
  if (!name) errors.name = 'Please enter your name.';
  else if (name.length > NAME_MAX) errors.name = `Please keep your name under ${NAME_MAX} characters.`;
  if (!body) errors.comment = 'Please write a comment.';
  else if (body.length > BODY_MAX) errors.comment = `Please keep your comment under ${BODY_MAX.toLocaleString('en')} characters.`;
  if (Object.keys(errors).length) return isForm ? back('error') : json({ errors }, 422);

  const { n } = await env.DB.prepare("SELECT COUNT(*) AS n FROM comments WHERE status = 'pending'").first();
  if (n >= PENDING_MAX) return isForm ? back('busy') : json({ error: 'busy' }, 503);

  await env.DB.prepare("INSERT INTO comments (issue, name, body, status, created_at) VALUES (?, ?, ?, 'pending', ?)")
    .bind(issue, name, body, new Date().toISOString()).run();
  return isForm ? back('sent') : json({ ok: true });
}
