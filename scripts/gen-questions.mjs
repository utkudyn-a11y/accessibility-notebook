// Writes functions/_data/questions.json: every Discussion Corner question id and its number of vote options.
// The vote API (functions/api/votes.js) only accepts these ids and option numbers. Runs before each build.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { questionId } from '../src/lib/discussion.js';

const dir = path.resolve('src/content/issues');
const out = {};
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
  const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf8'));
  (data.discussion || []).forEach((d, i) => {
    if (!Array.isArray(d.options) || d.options.length < 2) throw new Error(`Notes # ${data.number}: discussion question ${i + 1} needs at least 2 options`);
    out[questionId(data.number, i)] = d.options.length;
  });
}
fs.mkdirSync('functions/_data', { recursive: true });
fs.writeFileSync('functions/_data/questions.json', JSON.stringify(out, null, 1) + '\n');
console.log(`Discussion Corner: ${Object.keys(out).length} questions`);
