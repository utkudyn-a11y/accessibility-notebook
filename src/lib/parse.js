// Pure helpers that turn one issue's Markdown into sections and items (no Astro dependency).
const SECTION_RE = /<!--\s*section:([a-z-]+)\s*-->/g;

export function splitSections(body) {
  const parts = {};
  const marks = [...body.matchAll(SECTION_RE)];
  const intro = body.slice(0, marks.length ? marks[0].index : body.length).trim();
  marks.forEach((m, i) => {
    const end = i + 1 < marks.length ? marks[i + 1].index : body.length;
    let chunk = body.slice(m.index + m[0].length, end).trim();
    const h = chunk.match(/^##\s+(.+)\n?/);
    const heading = h ? h[1].trim() : '';
    if (h) chunk = chunk.slice(h[0].length).trim();
    parts[m[1]] = { heading, markdown: chunk };
  });
  return { intro, parts };
}

const LEAD_LINK = /^\*{0,2}\[([^\]]+?)\]\(([^)\s]+)\)\*{0,2}/;

// News / Inspirations items.
// Newer issues: "### Title" then "Source: [Name](url)".
// Older issues: blocks that start with "[Title:](url) text" (sometimes list items, sometimes separated by ---).
export function splitItems(markdown) {
  if (!markdown) return [];
  const items = [];
  if (/^###\s+/m.test(markdown)) {
    for (const c of markdown.split(/^###\s+/m).slice(1)) {
      const nl = c.indexOf('\n');
      const title = (nl === -1 ? c : c.slice(0, nl)).trim();
      let rest = nl === -1 ? '' : c.slice(nl + 1).trim();
      let source = null;
      const s = rest.match(/^Source:\s*\[([^\]]+)\]\(([^)]+)\)\s*/);
      if (s) { source = { name: s[1], url: s[2] }; rest = rest.slice(s[0].length).trim(); }
      items.push({ title, source, url: source ? source.url : null, markdown: rest });
    }
    return items;
  }
  const blocks = markdown
    .split(/\n\s*\n|\n(?=- )/)
    .map((b) => b.trim())
    .filter((b) => b && !/^-{3,}$/.test(b));
  for (const raw of blocks) {
    const b = raw.replace(/^-\s+/, '');
    const m = b.match(LEAD_LINK);
    const after = m ? b.slice(m[0].length) : '';
    const isItem = m && (/[:–-]\s*$/.test(m[1].replace(/\*+/g, '')) || /^\s*:/.test(after) || /^\s*\[/.test(after));
    if (isItem) {
      const title = m[1].replace(/\*+/g, '').replace(/\s*[:–-]\s*$/, '').trim();
      const rest = (/^(\s*\[[^\]]*\]\([^)]*\))+\s*:/.test(after)
        ? after.replace(/^(\s*\[[^\]]*\]\([^)]*\))+\s*:\s*/, '')
        : after.replace(/^\s*:\s*/, '')).trim();
      items.push({ title, source: null, url: m[2], markdown: rest });
    } else if (items.length) {
      items[items.length - 1].markdown += '\n\n' + b;
    }
  }
  return items;
}
