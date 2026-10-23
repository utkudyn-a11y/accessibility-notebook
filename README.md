# Accessibility Notebook website

The website of [Accessibility Notebook](https://buttondown.com/accessibility-notebook), a digital accessibility newsletter by Utku Demiryakan. Built with [Astro](https://astro.build) and published on Cloudflare.

## Adding a new issue

1. Copy the last file in `src/content/issues/` and name it `notes-29.md` (two digits for 1–9: `notes-09.md`).
2. Update the information at the top of the file (between the `---` lines):
   - `title`, `number`, `date` (YYYY-MM-DD), `description` (1–2 sentences, shown in Google and on the home page)
   - `cover`: put the cover in `public/images/` and write `/images/<file name>`
   - `album`: artist, title and Spotify link
   - `linkedinUrl`: the LinkedIn article address
   - `personalNoteTitle`: a title for the Personal Notes section
   - `inDetailTitle` and `inDetailSlug`: the In Detail title and its web address (lowercase, words joined with `-`)
   - `discussion`: one or more Discussion Corner questions, each with a short `context`, the `question` itself and 2–4 vote `options`, for example
     `discussion: [{"context": "Some background.", "question": "Yes or no?", "options": ["Yes", "No"]}]`.
     "Something else, I'll explain on LinkedIn" is added as the last option automatically. Never reorder or remove options of a published question: votes are stored by option position.
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
- A Cloudflare rate limiting rule ("Discussion Corner votes") blocks more than 5 votes in 10 seconds from one IP.
- To reset all votes: run `DELETE FROM votes;` in the D1 console.
