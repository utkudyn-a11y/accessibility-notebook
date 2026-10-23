-- Discussion Corner votes. Run once in the Cloudflare D1 console (database: notebook-votes).
CREATE TABLE IF NOT EXISTS votes (
  question TEXT NOT NULL,
  option INTEGER NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (question, option)
);
