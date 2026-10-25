# Accessibility Notebook website

The website of [Accessibility Notebook](https://buttondown.com/accessibility-notebook), a digital accessibility newsletter by Utku Demiryakan. Built with [Astro](https://astro.build) and published on Cloudflare.

## Adding a new issue

1. Copy the last file in `src/content/issues/` and name it `notes-29.md` (two digits for 1–9: `notes-09.md`).
2. Update the information at the top of the file (between the `---` lines):
   - `title`, `number`, `date` (YYYY-MM-DD), `description` (1–2 sentences, shown in Google and on the home page)
   - `cover`: put the cover in `public/images/` and write `/images/<file name>`
   - `album`: artist, title and Spotify link
   - `linkedinUrl`: the LinkedIn article address (optional; kept for reference, the site no longer links to LinkedIn posts: discussion happens in the site's comments).
   - `personalNoteTitle`: a title for the Personal Notes section
   - `inDetailTitle` and `inDetailSlug`: the In Detail title and its web address (lowercase, words joined with `-`)
   - `discussion`: one or more Discussion Corner questions, each with a short `context`, the `question` itself and 2–4 vote `options`, for example
     `discussion: [{"context": "Some background.", "question": "Yes or no?", "options": ["Yes", "No"], "from": "news-2"}]`.
     `from` says which part of the issue the question comes from, so "Read Notes # N" lands there: `personal-notes`, `in-detail`, `article-from-me`, `news-1`, `news-2`…, `inspiration-1`… A wrong value stops the build.
     Never reorder or remove options of a published question: votes are stored by option position.
     The home page shows one question at a time, at random; there is no page that lists them all.
   - `inspirationTopics`: the topics of each Inspirations item, one list per item, in the same order as the items, for example
     `inspirationTopics: [["AI", "Development"], ["Design"], ["Resources", "Disability & Stories"]]`.
     Allowed topics: AI, Design, Development, Testing, Legal & Standards, Disability & Stories, Resources, Strategy (one or two per item). A misspelled topic stops the build with an error message.
   - `newsDates`: the original publication date of each News story (YYYY-MM-DD), one per story, in order, for example
     `newsDates: ["2026-10-14", "2026-10-09", null]`. Use `null` when the source shows no date; the News page then uses the issue date and says "Shared" instead of "Published".
3. Write the issue below. Each section starts with its marker and heading:

   ```markdown
   <!-- section:personal-notes -->
   ## Personal Notes

   <!-- section:news -->
   ## News

   ### Title of the news item

   Source: [Source name](https://link)

   Your comment.

   <!-- section:inspirations -->
   ## Inspirations

   <!-- section:in-detail -->
   ## In Detail: Title
   ```

4. Images inside the text: put them in `public/images/` and write `![Alt text](/images/<file name>)`.
5. Push to GitHub. Cloudflare publishes the site in a few minutes; the accessibility test runs on GitHub at the same time.

## Before launch

- [x] About Me text (`src/content/site/about.md`)
- [x] AI policy text (`src/content/site/ai-policy.md`)
- [x] Custom domain: https://accessibilitynotebook.com (Cloudflare Registrar, connected to the Pages project; www redirects to the root domain via a Cloudflare redirect rule; canonical tags point pages.dev visitors to the domain)
- [ ] Add the Cloudflare Web Analytics token to `src/consts.js` (`CF_ANALYTICS_TOKEN`)
- [x] LinkedIn profile URL in `AUTHOR.url`

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Installs everything |
| `npm run dev` | Local preview at http://localhost:4321 |
| `npm run build` | Builds the site into `dist/` |
| `npm run test:a11y` | Runs axe (WCAG 2.2 AA) on every built page, desktop and mobile |

## Discussion Corner votes

- Votes are counted by a Cloudflare Pages Function (`functions/api/votes.js`) in the D1 database `notebook-votes`, bound to the Pages project as `DB` (Settings → Bindings). The table is created by `schema.sql`.
- Only a counter per question and option is stored; no personal data. A browser remembers its own vote in localStorage.
- `scripts/gen-questions.mjs` runs before every build and tells the API which question ids (`<issue>-<n>`) and how many options exist.
- Votes belong to a question id and an option position. So: never reorder options, and only remove the last option of a question. When you remove a question, every later question in the same issue keeps its old id through an explicit `"id"` (for example Notes # 28 has `"id": "28-3"` on its second question), so its votes stay attached; then delete the removed question's votes in the D1 console (`DELETE FROM votes WHERE question = '15-1';`) so a future question cannot inherit them.
- Questions are written in Utku's own voice: "I wrote that…", "My design team…", never "Utku…".
- A Cloudflare rate limiting rule ("Discussion Corner votes and comments") blocks more than 5 votes, comments or admin login attempts in 10 seconds from one IP.
- To reset all votes: run `DELETE FROM votes;` in the D1 console.

## Search

- The search page (`/search/`) runs in the browser with MiniSearch. Its data, `/search-index.json`, is built from the issues on every build (`src/pages/search-index.json.js`): full issues (with album), Personal Notes, In Detail, An Article From Me, every News and Inspirations item, and the Discussion Corner questions.
- Matching ignores case and accents ("Altin Gun" finds "Altın Gün"), treats simple plurals as the same word ("CAPTCHAs" = "captcha") and forgives small typos in longer words ("accesibility").
- Abbreviations: `src/lib/search-synonyms.js` lists abbreviations with their long forms, so "EAA" also finds "European Accessibility Act" and the other way round. **When a new issue uses an abbreviation that is not in the list, add a line with its long form**, for example `['dsa', 'digital services act'],`.
- Results link straight to the story on its issue page (`#news-2`, `#inspiration-1`, `#personal-notes`), to the In Detail page, or to the Discussion Corner question on the home page (`/?question=23-2`).
- The "Popular topics" on the search page are set at the top of `src/pages/search.astro`.

## Accessibility Pledge

- `/pledge/` (menu: Accessibility Pledge) lets readers pick up to 3 pledges and download a 1080 × 1080 card, share it (on phones) and copy its alt text. Everything happens in the browser; nothing is stored.
- Pledges live in each issue's front matter, 1–2 per issue: `pledges: [{"role": "Testing", "text": "I will test every flow with a keyboard, not only with tools", "from": "inspiration-3"}]`. `from` works as in `discussion`: the "From Notes # N" link lands on that part of the issue. Roles: Design & Content, Development, Testing, Product. Text starts with "I will", about 80 characters at most, no final period. The latest issue's pledges get a "New" label.
- The album card in Read While Listening links to the issue's album line (`#album`).
- Do not reword or remove a published pledge lightly: people may have shared cards with it.
- The page's social image is `public/images/pledge-og.png`.

## Images

- `npm run build` first runs `scripts/optimize-images.mjs`: it makes smaller WebP copies of every image in `public/images/` (and the logo) in `public/images/webp/` at a few widths, and writes their sizes to `src/data/images.json`. Commit the new files it makes.
- Pages show the WebP copy in a `<picture>` element; browsers without WebP get the original. Originals are never removed, so old emails, LinkedIn posts and social previews keep working. `*-og.png` social images are not converted.
- Images in issue text get their width and height and load only when the reader scrolls near them.
- Only missing copies are made. If you replace an image under the same file name, delete its files in `public/images/webp/` first.

## Comments

- Every issue page ends with a Comments section and an "I Have Something To Say" form (`src/components/Comments.astro`). In Detail pages link to the issue's comments (`/notes/N/#comments`).
- Readers give only a name and a comment (no email, nothing else stored). A comment waits as "pending" and shows on the site after Utku approves it. Links in comments are shown as plain text.
- API: `functions/api/comments.js` (GET approved comments, POST a new one; also works as a plain form post without JavaScript). Spam protection: hidden honeypot field, the Cloudflare rate limiting rule, length limits, a cap on waiting comments, and moderation.
- Moderation: `/admin/` (not in the sitemap, not indexed) lists waiting comments with Approve, Reply and Delete, and recent approved ones with Hide. Utku's replies are shown under the comment with an "Author" label. Its API is `functions/api/admin/comments.js`.
- `/admin/` asks for a password. The password is the encrypted Pages secret `ADMIN_PASSWORD` (Cloudflare → Workers & Pages → accessibility-notebook → Settings → Variables and Secrets, type Secret, Production). It must be at least 16 characters; until it is set, the admin page stays locked and comments simply wait. A correct password gives a signed cookie for 7 days; changing the password logs everyone out. Wrong passwords are slowed down and `/api/admin/login` is covered by the rate limiting rule. Code: `functions/_lib/session.js`, `functions/api/admin/login.js`.
- The `comments` table is in `schema.sql` (database notebook-votes).
- Local testing: temporary `wrangler.toml` with the D1 binding, `wrangler d1 execute notebook-votes --local --file schema.sql`, then `wrangler pages dev dist --binding ADMIN_DEV=1` (opens /admin/ on localhost without a password; or pass `--binding ADMIN_PASSWORD=<a local test password>` to test the login). Never set `ADMIN_DEV` in Cloudflare and never commit `wrangler.toml`.
