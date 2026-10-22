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
- [ ] Custom domain: site currently runs on https://accessibility-notebook.pages.dev. When a domain is bought, update `SITE_URL` in `src/consts.js` and `public/robots.txt`
- [ ] Add the Cloudflare Web Analytics token to `src/consts.js` (`CF_ANALYTICS_TOKEN`)
- [x] LinkedIn profile URL in `AUTHOR.url`

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Installs everything |
| `npm run dev` | Local preview at http://localhost:4321 |
| `npm run build` | Builds the site into `dist/` |
| `npm run test:a11y` | Runs axe (WCAG 2.2 AA) on every built page, desktop and mobile |
