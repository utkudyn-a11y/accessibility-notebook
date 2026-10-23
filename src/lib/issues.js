// Reads every issue Markdown file and splits it into the pieces the site needs.
// New issues only need a new file in src/content/issues/ (same format as the others).
import matter from 'gray-matter';
import { marked } from 'marked';
import { splitSections, splitItems } from './parse.js';

marked.setOptions({ gfm: true });

const files = import.meta.glob('../content/issues/*.md', { query: '?raw', import: 'default', eager: true });

export const render = (md) => (md ? marked.parse(md) : '');

export const plainText = (md, max = 220) => {
  const t = (md || '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return t.length > max ? t.slice(0, t.lastIndexOf(' ', max)) + '…' : t;
};

// Inspirations topics. Each issue lists them in front matter (inspirationTopics), one entry per item, in order.
export const TOPICS = ['AI', 'Design', 'Development', 'Testing', 'Legal & Standards', 'Disability & Stories', 'Resources', 'Strategy'];
export const topicSlug = (t) => t.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const checkTopics = (list = [], n) => {
  for (const t of list) if (!TOPICS.includes(t)) throw new Error(`Notes # ${n}: unknown Inspirations topic "${t}". Use one of: ${TOPICS.join(', ')}`);
  return list;
};

const checkDate = (d, n) => {
  if (d == null) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) throw new Error(`Notes # ${n}: newsDates entry "${d}" must be YYYY-MM-DD or null`);
  return d;
};
export const formatDateLong = (d) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Accessibility Pledge items: front matter "pledges", 1–2 per issue.
export const PLEDGE_ROLES = ['Design & Content', 'Development', 'Testing', 'Product'];
const checkPledges = (list = [], n) => {
  for (const p of list) {
    if (!PLEDGE_ROLES.includes(p.role)) throw new Error(`Notes # ${n}: unknown pledge role "${p.role}". Use one of: ${PLEDGE_ROLES.join(', ')}`);
    if (!/^I will /.test(p.text || '')) throw new Error(`Notes # ${n}: a pledge must start with "I will": ${p.text}`);
  }
  return list;
};

const issues = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const { intro, parts } = splitSections(content);
    return {
      ...data,
      slug: String(data.number),
      url: `/notes/${data.number}/`,
      dateObj: new Date(`${data.date}T09:00:00+03:00`),
      intro,
      sections: parts,
      news: splitItems(parts['news']?.markdown).map((it, idx) => ({
        ...it,
        issue: data.number,
        date: data.date,
        anchor: `news-${idx + 1}`,
        // Original publication date of the story (front matter newsDates, same order as the items); null = unknown
        published: checkDate(data.newsDates?.[idx], data.number),
      })),
      inspirations: splitItems(parts['inspirations']?.markdown).map((it, idx) => ({ ...it, issue: data.number, date: data.date, anchor: `inspiration-${idx + 1}`, topics: checkTopics(data.inspirationTopics?.[idx], data.number) })),
      pledges: checkPledges(data.pledges, data.number),
      body: content,
    };
  })
  .sort((a, b) => b.number - a.number);

export const getIssues = () => issues;
export const getIssue = (n) => issues.find((i) => i.number === Number(n));

export const getInDetail = () =>
  issues
    .filter((i) => i.inDetailSlug && i.sections['in-detail'])
    .map((i) => ({
      title: i.inDetailTitle,
      slug: i.inDetailSlug,
      url: `/in-detail/${i.inDetailSlug}/`,
      issue: i,
      markdown: i.sections['in-detail'].markdown,
      heading: i.sections['in-detail'].heading,
    }));

export const getPersonalNotes = () =>
  issues
    .filter((i) => i.sections['personal-notes'])
    .map((i) => ({
      title: i.personalNoteTitle,
      url: `${i.url}#personal-notes`,
      issue: i,
      markdown: i.sections['personal-notes'].markdown,
    }));

export const formatDate = (d) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Every pledge, newest issue first; the latest issue's pledges are marked as new.
export const getPledges = () => {
  const latest = issues[0]?.number;
  return issues.flatMap((i) =>
    i.pledges.map((p, k) => ({ id: `${i.number}-${k + 1}`, role: p.role, text: p.text, issue: i.number, issueUrl: i.url, isNew: i.number === latest }))
  );
};
