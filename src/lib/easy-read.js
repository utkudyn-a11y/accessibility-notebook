// Easy Read versions of issues: src/data/easy-read/notes-NN.json, shown at /notes/NN/easy-read/.
// The rules they follow are in the Easy Read checklist; README.md documents the file format.
import { getIssues } from './issues.js';
import { discussionId } from './discussion.js';

const files = import.meta.glob('../data/easy-read/*.json', { import: 'default', eager: true });
const svgs = import.meta.glob('../assets/easy-read-icons/*.svg', { query: '?raw', import: 'default', eager: true });

// Icons by id: "c01" (core icon, used in every issue) or "n06" (an icon for one issue)
const ICONS = Object.fromEntries(Object.entries(svgs).map(([p, svg]) => [p.split('/').pop().slice(0, 3), svg]));
export const easyReadIcon = (id) => (id ? ICONS[id] : '');

// **bold** is the only markup allowed in an Easy Read line (for hard words explained where they first appear)
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
export const easyLine = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

function check(er, issue) {
  const n = er.issue;
  const blocks = [...er.intro, ...er.sections.flatMap((s) => s.blocks)];
  for (const b of blocks) {
    if (b.icon && !ICONS[b.icon]) throw new Error(`Easy Read ${n}: unknown icon "${b.icon}". Icons are in src/assets/easy-read-icons/.`);
    if (b.vote) {
      const d = (issue.discussion || [])[b.vote.question - 1];
      if (!d) throw new Error(`Easy Read ${n}: issue ${n} has no Discussion Corner question number ${b.vote.question}`);
      // Votes are stored by option position, so the Easy Read answers must match the issue's answers one to one
      if (b.vote.options.length !== (d.options || []).length) throw new Error(`Easy Read ${n}: the vote needs ${d.options.length} answers, in the same order as the issue`);
      b.vote.id = discussionId(n, d, b.vote.question - 1);
    }
  }
  return er;
}

export function getEasyReads() {
  const issues = getIssues();
  return Object.values(files).map((er) => {
    const issue = issues.find((i) => i.number === er.issue);
    if (!issue) throw new Error(`Easy Read: there is no Notes # ${er.issue}`);
    return { ...check(structuredClone(er), issue), issueData: issue };
  });
}

export const hasEasyRead = (n) => Object.values(files).some((er) => er.issue === n);
