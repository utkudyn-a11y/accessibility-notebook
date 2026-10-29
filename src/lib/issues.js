// Reads every issue Markdown file and splits it into the pieces the site needs.
// New issues only need a new file in src/content/issues/ (same format as the others).
import matter from 'gray-matter';
import { marked } from 'marked';
import { splitSections, splitItems } from './parse.js';
import { pictureHtml } from './images.js';

marked.setOptions({ gfm: true });
// Images in issue text: WebP copy when there is one, lazy loading, fixed size so the page does not jump.
marked.use({ renderer: { image({ href, title, text }) { return pictureHtml(href, text, { title }); } } });

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

// Take Action items: front matter "pledges". Roles are the six role groups of W3C's
// Accessibility Roles and Responsibilities Mapping (ARRM), https://www.w3.org/WAI/planning/arrm/
export const PLEDGE_GROUPS = [
  { role: 'Business', covers: 'Business analysis' },
  { role: 'Authoring', covers: 'Content authoring and publishing' },
  { role: 'Design', covers: 'UX research, UX design and visual design' },
  { role: 'Development', covers: 'Front-end and back-end development' },
  { role: 'Testing', covers: 'Automated and manual QA testing' },
  { role: 'Administration', covers: 'Product ownership, project management and governance' },
];
export const PLEDGE_ROLES = PLEDGE_GROUPS.map((g) => g.role);
const checkPledges = (list = [], n) => {
  for (const p of list) {
    if (!PLEDGE_ROLES.includes(p.role)) throw new Error(`Notes # ${n}: unknown pledge role "${p.role}". Use one of: ${PLEDGE_ROLES.join(', ')}`);
    if (!/^I will /.test(p.text || '')) throw new Error(`Notes # ${n}: a pledge must start with "I will": ${p.text}`);
  }
  return list;
};

// "from": where a pledge or Discussion Corner question comes from inside its issue, so "Notes # N" links
// land on that spot: personal-notes, in-detail, article-from-me, news-1, inspiration-2, ...
const checkFrom = (list = [], anchors, n) => {
  for (const x of list) {
    if (x.from && !anchors.includes(x.from)) throw new Error(`Notes # ${n}: "from": "${x.from}" is not a part of this issue. Use one of: ${anchors.join(', ')}`);
  }
  return list;
};

const issues = Object.entries(files)
  .map(([path, raw]) => {
    const { data, content } = matter(raw);
    const { intro, parts } = splitSections(content);
    const anchors = [
      ...Object.keys(parts),
      ...splitItems(parts['news']?.markdown).map((_, i) => `news-${i + 1}`),
      ...splitItems(parts['inspirations']?.markdown).map((_, i) => `inspiration-${i + 1}`),
    ];
    const at = (from) => `/notes/${data.number}/${from ? `#${from}` : ''}`;
    return {
      ...data,
      discussion: checkFrom(data.discussion, anchors, data.number).map((d) => ({ ...d, sourceUrl: at(d.from) })),
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
      pledges: checkFrom(checkPledges(data.pledges, data.number), anchors, data.number).map((p) => ({ ...p, sourceUrl: at(p.from) })),
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

// "New" label: Discussion Corner questions and Take Action items from the latest issue are marked "New";
// when the next issue arrives, its items take the label over. Starts with Notes # 30.
export const NEW_LABEL_FROM = 30;
export const isNewIssue = (n) => n === issues[0]?.number && n >= NEW_LABEL_FROM;

// Every pledge, newest issue first.
export const getPledges = () => {
  return issues.flatMap((i) =>
    i.pledges.map((p, k) => ({ id: `${i.number}-${k + 1}`, role: p.role, text: p.text, issue: i.number, issueUrl: p.sourceUrl, isNew: isNewIssue(i.number) }))
  );
};
