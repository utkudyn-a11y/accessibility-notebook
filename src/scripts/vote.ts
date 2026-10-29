// Discussion Corner voting, shared by the home page card and the questions under each issue.
// Votes are stored by the Pages Function in functions/api/votes.js.
export type Q = { id: string; n: number; date: string; dateText: string; issue: string; comments: string; context: string; question: string; options: string[]; isNew?: boolean };
type Res = { counts: number[]; total: number };
type Opts = {
  /** Shown above the question, e.g. "From Notes # 6 on 3 March 2026". Leave out to show nothing. */
  over?: (q: Q) => string;
  /** Link(s) after the form and in the "Why did you choose this?" line. HTML, already escaped. */
  commentLink: (q: Q) => string;
  readLink: (q: Q) => string;
};

export const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const plural = (n: number) => `${n} ${n === 1 ? 'vote' : 'votes'}`;

// Remember which option this browser voted for (only a convenience; it may be unavailable).
const store = {
  get(id: string): number | null {
    try { const v = localStorage.getItem(`an-vote-${id}`); return v === null ? null : Number(v); } catch { return null; }
  },
  set(id: string, option: number) {
    try { localStorage.setItem(`an-vote-${id}`, String(option)); } catch {}
  },
};

export const createVoter = (body: HTMLElement, o: Opts) => {
  const head = (q: Q) => (o.over ? `<p class="over">${o.over(q)}</p>` : '') + `<p class="context">${esc(q.context)}</p>`;
  const links = (q: Q) => [o.commentLink(q), o.readLink(q)].filter(Boolean).join('');

  const renderForm = (q: Q, error = '') => {
    body.innerHTML =
      head(q) +
      `<form class="vote-form" novalidate>` +
        `<fieldset><legend class="ask">${esc(q.question)}</legend>` +
        `<div class="opts">` +
        q.options.map((op, i) =>
          `<label class="opt"><input type="radio" name="vote-${esc(q.id)}" value="${i}"> <span>${esc(op)}</span></label>`
        ).join('') +
        `</div></fieldset>` +
        `<p class="vote-error" role="alert">${esc(error)}</p>` +
        `<button type="submit" class="vote">Vote</button>` +
      `</form>` +
      `<p class="links">${links(q)}</p>`;
    const form = body.querySelector<HTMLFormElement>('form')!;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form.querySelector('.vote')!.getAttribute('aria-disabled') === 'true') return; // already sending
      const picked = form.querySelector<HTMLInputElement>('input:checked');
      const err = form.querySelector<HTMLElement>('.vote-error')!;
      if (!picked) {
        err.textContent = 'Choose an option first.';
        form.querySelector<HTMLInputElement>('input')!.focus();
        return;
      }
      vote(q, Number(picked.value), form);
    });
  };

  const renderResults = (q: Q, r: Res, mine: number | null, justVoted: boolean) => {
    const rows = q.options.map((op, i) => {
      const c = r.counts[i] || 0;
      const pct = r.total ? Math.round((c / r.total) * 100) : 0;
      return `<li${i === mine ? ' class="mine"' : ''}><div class="row"><span class="lbl">${esc(op)}${i === mine ? ' <span class="yours">Your vote</span>' : ''}</span>` +
        `<span class="pct">${pct}% <small>(${plural(c)})</small></span></div>` +
        `<div class="bar" aria-hidden="true"><span style="width:${pct}%"></span></div></li>`;
    }).join('');
    body.innerHTML =
      head(q) +
      `<p class="ask">${esc(q.question)}</p>` +
      `<p class="total" tabindex="-1">${justVoted ? '<span class="visually-hidden">Your vote is saved. Results: </span>' : ''}${plural(r.total)}</p>` +
      `<ul class="res">${rows}</ul>` +
      `<p class="thanks">${mine !== null ? 'Thanks for voting! ' : ''}${justVoted && r.total === 1 ? "You're the first one here. " : ''}Why did you choose this? ${o.commentLink(q)}</p>` +
      (o.readLink(q) ? `<p class="links">${o.readLink(q)}</p>` : '');
    if (justVoted) body.querySelector<HTMLElement>('.total')!.focus();
  };

  const vote = async (q: Q, option: number, form: HTMLFormElement) => {
    const btn = form.querySelector<HTMLButtonElement>('.vote')!;
    const err = form.querySelector<HTMLElement>('.vote-error')!;
    btn.setAttribute('aria-disabled', 'true');
    btn.textContent = 'Saving…';
    try {
      const res = await fetch('/api/votes', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ q: q.id, option }) });
      if (!res.ok) throw new Error(String(res.status));
      const data: Res = await res.json();
      store.set(q.id, option);
      renderResults(q, data, option, true);
    } catch {
      btn.removeAttribute('aria-disabled');
      btn.textContent = 'Vote';
      err.textContent = 'Sorry, your vote could not be saved. Please try again in a moment.';
    }
  };

  const show = async (q: Q) => {
    const mine = store.get(q.id);
    if (mine === null) return renderForm(q);
    body.innerHTML = head(q) + `<p class="ask">${esc(q.question)}</p><p class="total">Loading results…</p>`;
    try {
      const res = await fetch(`/api/votes?q=${encodeURIComponent(q.id)}`);
      if (!res.ok) throw new Error(String(res.status));
      renderResults(q, await res.json(), mine, false);
    } catch {
      body.innerHTML = head(q) + `<p class="ask">${esc(q.question)}</p><p class="total">You voted on this question. The results could not be loaded right now.</p>` +
        `<p class="links">${links(q)}</p>`;
    }
  };
  return { show };
};
