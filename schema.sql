-- Discussion Corner votes. Run once in the Cloudflare D1 console (database: notebook-votes).
CREATE TABLE IF NOT EXISTS votes (
  question TEXT NOT NULL,
  option INTEGER NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (question, option)
);

-- Comments on issue pages. Run once in the Cloudflare D1 console (database: notebook-votes).
-- Readers' comments start as 'pending' and only show on the site after Utku approves them in /admin/.
-- Utku's replies have parent_id set and is_author = 1. Only a name and the comment are stored.
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  issue INTEGER NOT NULL,
  parent_id INTEGER,
  name TEXT NOT NULL,
  body TEXT NOT NULL,
  is_author INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS comments_issue ON comments (issue, status);
