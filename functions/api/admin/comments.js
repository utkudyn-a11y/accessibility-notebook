// Comment moderation for Utku (/admin/). Needs the admin login cookie (functions/_lib/session.js).
// GET  /api/admin/comments -> { pending: [...], approved: [...last 30] }
// POST /api/admin/comments { action: 'approve' | 'hide' | 'delete', id }
//                          { action: 'reply', id, reply }   (approves the comment too and adds Utku's reply under it)
import { json, fromSite, clean } from '../../_lib/http.js';
import { isAdmin } from '../../_lib/session.js';

const AUTHOR = 'Utku Demiryakan';
const COLS = 'id, issue, parent_id, name, body, is_author, status, created_at';

export async function onRequestGet({ request, env }) {
  if (!(await isAdmin(request, env))) return json({ error: 'Not allowed' }, 401);
  const pending = await env.DB.prepare(`SELECT ${COLS} FROM comments WHERE status = 'pending' ORDER BY created_at`).all();
  const approved = await env.DB.prepare(`SELECT ${COLS} FROM comments WHERE status = 'approved' ORDER BY created_at DESC LIMIT 30`).all();
  return json({ pending: pending.results, approved: approved.results });
}

export async function onRequestPost({ request, env }) {
  if (!fromSite(request)) return json({ error: 'Forbidden' }, 403);
  if (!(await isAdmin(request, env))) return json({ error: 'Not allowed' }, 401);
  let data;
  try { data = await request.json(); } catch { return json({ error: 'Bad request' }, 400); }
  const id = Number(data.id);
  const row = Number.isInteger(id) ? await env.DB.prepare('SELECT id, issue FROM comments WHERE id = ?').bind(id).first() : null;
  if (!row) return json({ error: 'Unknown comment' }, 404);
  const db = env.DB;
  switch (data.action) {
    case 'approve':
      await db.prepare("UPDATE comments SET status = 'approved' WHERE id = ?").bind(id).run(); break;
    case 'hide':
      await db.prepare("UPDATE comments SET status = 'hidden' WHERE id = ? OR parent_id = ?").bind(id, id).run(); break;
    case 'delete':
      await db.prepare('DELETE FROM comments WHERE id = ? OR parent_id = ?').bind(id, id).run(); break;
    case 'reply': {
      const reply = clean(data.reply, 2000);
      if (!reply) return json({ error: 'Empty reply' }, 422);
      await db.batch([
        db.prepare("UPDATE comments SET status = 'approved' WHERE id = ?").bind(id),
        db.prepare("INSERT INTO comments (issue, parent_id, name, body, is_author, status, created_at) VALUES (?, ?, ?, ?, 1, 'approved', ?)")
          .bind(row.issue, id, AUTHOR, reply, new Date().toISOString()),
      ]);
      break;
    }
    default:
      return json({ error: 'Unknown action' }, 400);
  }
  return json({ ok: true });
}
