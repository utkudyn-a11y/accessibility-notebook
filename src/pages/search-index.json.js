// Builds /search-index.json: one entry per searchable piece of the notebook.
// Loaded only by the search page.
import { getIssues, plainText, formatDateLong } from '../lib/issues.js';
import { questionId } from '../lib/discussion.js';

const text = (md) => plainText(md || '', Infinity);

export function GET() {
  const docs = [];
  let id = 0;
  const add = (d) => docs.push({ id: id++, ...d });

  for (const i of getIssues()) {
    const day = formatDateLong(i.date);
    add({ group: 'Full Issues', kind: 'Full Issue', title: i.title, url: i.url, meta: day, text: [i.description, i.album && `Created while listening: ${i.album.artist} – ${i.album.title}`].filter(Boolean).join(' ') });

    if (i.sections['personal-notes']) {
      add({ group: 'Originals', kind: 'Personal Notes', title: i.personalNoteTitle || `Personal Notes, Notes # ${i.number}`, url: `${i.url}#personal-notes`, meta: `Notes # ${i.number} · ${day}`, text: text(i.sections['personal-notes'].markdown) });
    }
    if (i.sections['in-detail']) {
      add({ group: 'Originals', kind: 'In Detail', title: (i.inDetailTitle || i.sections['in-detail'].heading).replace(/^Bonus:\s*/, ''), url: i.inDetailSlug ? `/in-detail/${i.inDetailSlug}/` : `${i.url}#in-detail`, meta: `Notes # ${i.number} · ${day}`, text: text(i.sections['in-detail'].markdown) });
    }
    if (i.sections['article-from-me']) {
      const md = i.sections['article-from-me'].markdown;
      const h = md.match(/^#{1,4}\s+(.+)$/m);
      add({ group: 'Originals', kind: 'An Article From Me', title: h ? h[1].replace(/[*_]/g, '') : `An Article From Me, Notes # ${i.number}`, url: `${i.url}#article-from-me`, meta: `Notes # ${i.number} · ${day}`, text: text(md) });
    }
    for (const it of i.news) {
      add({ group: 'News', kind: 'News', title: it.title, url: `${i.url}#${it.anchor}`, meta: `Notes # ${i.number} · ${it.published ? `Published ${formatDateLong(it.published)}` : day}`, text: [it.source?.name, text(it.markdown)].filter(Boolean).join(' ') });
    }
    for (const it of i.inspirations) {
      add({ group: 'Inspirations', kind: 'Inspiration', title: it.title, url: `${i.url}#${it.anchor}`, meta: `Notes # ${i.number} · ${day}`, text: [it.source?.name, (it.topics || []).join(' '), text(it.markdown)].filter(Boolean).join(' ') });
    }
    (i.discussion || []).forEach((d, k) => {
      add({ group: 'Discussion', kind: 'Discussion Corner', title: d.question, url: `/?question=${questionId(i.number, k)}#dc-title`, meta: `Notes # ${i.number}`, text: [d.context, ...(d.options || [])].join(' ') });
    });
  }
  return new Response(JSON.stringify(docs), { headers: { 'content-type': 'application/json; charset=utf-8' } });
}
