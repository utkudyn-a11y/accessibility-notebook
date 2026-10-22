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
      news: splitItems(parts['news']?.markdown).map((it) => ({ ...it, issue: data.number, date: data.date })),
      inspirations: splitItems(parts['inspirations']?.markdown).map((it) => ({ ...it, issue: data.number, date: data.date })),
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
