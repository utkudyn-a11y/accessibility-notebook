---
title: "Notes # 32: How A Vibe-Coded Website Was Born Accessible"
number: 32
date: "2026-11-22"
description: "Claude explains how this vibe-coded website was born accessible, plus the NHS App's accessibility gaps, disability-inclusive AI in public services, ACCESSIBILITY.md on GitHub, audits and UX dark patterns."
cover: "/images/notes-32-cover.jpg"
album: {"artist": "THAO", "title": "Show Me", "url": "https://open.spotify.com/album/4UK9YJHwdfEikmgEKlawbu"}
personalNoteTitle: "Accessibility Notebook Website: More Than An Archive"
inDetailTitle: "Interview with Claude - How Accessibility Notebook Was Born Accessible"
inDetailSlug: "interview-with-claude-how-accessibility-notebook-was-born-accessible"
discussion: [{"context": "UX dark patterns like painful cancellation processes, misleading confirm or reject checkboxes and marked-up discounts aren't prevented by any WCAG success criterion. Yet they can block people with cognitive disabilities or attention issues.", "question": "Who should stop them?", "options": ["Accessibility standards", "Consumer law", "Designers themselves"], "from": "inspiration-2"}]
oneMinute: "inspiration-1"
inspirationTopics: [["Strategy", "Testing"], ["Design"], ["Disability & Stories"]]
newsDates: ["2026-11-02", null, "2026-11-05"]
pledges: [{"role": "Development", "text": "I will add an ACCESSIBILITY.md file to our repositories", "from": "news-3"}, {"role": "Design", "text": "I will check our checkout and cancellation flows for dark patterns", "from": "inspiration-2"}]
---

<!-- section:personal-notes -->
## Personal Notes

For the last month, I’ve worked a lot on the Accessibility Notebook website. I don’t want to use the website as a simple archive or blog containing only text. That’s why I added some gamification elements (you can check out the News and Inspirations sections), interactive features (like the Discussion Corner and the Take Action section), and even simple tier-based loyalty mechanics on the homepage. My main aim is to make accessibility readable, interactive, and fun. So, I’ll be adding more features to the website, like interactive stories or a laboratory where you can experiment with things. Stay tuned!

Also, I have to say that this is a full vibe-coding project. All the development work was done by Claude. And, of course, one of our main priorities is making this website accessible. Actually, this was maybe the easiest part of the process for me because I prioritized accessibility from the beginning. Claude understood my priorities and did most of the work. Then, I finished the process with manual tests. You can read more in the “In Detail” section.

<!-- section:news -->
## News

### Report Finds NHS App Falls Short On Accessibility

Source: [RNIB](https://www.rnib.org.uk/news/report-finds-nhs-app-falls-short-on-accessibility/)

The UK government is planning to make the NHS App a full front door to the health services by 2028. However, only 3 per cent of blind and partially sighted people find the NHS App fully accessible, and 46 per cent of respondents who use the app found it difficult or very difficult to use. Actually, a digital app can be more inclusive for the blind when compared to physical solutions, if it is designed accessibly. For example, an accessible PDF showing your health test results is, of course, more accessible than a physical paper. But the first prerequisite is accessibility instead of digitalization.

### Closing The Transparency Gap: Disability-Inclusive And Ethical AI In Public Services

Source: [G3ict](https://g3ict.org/publication/closing-the-transparency-gap-disability-inclusive-and-ethical-ai-in-public-services)

“This report examines how governments around the world are addressing the opportunities and risks of artificial intelligence in public services.” In the report, G3ict could access data from only 34 out of the 193 UN Member States due to the lack of documentation. Some of the main challenges are: a lack of participation by persons with disabilities in AI governance processes, limited evidence of accessibility requirements in AI procurement, and limited publication of outcome-level evaluations, particularly algorithmic equity reviews.

### Accessibility Statements Now Have A Home On GitHub

Source: [GitHub](https://github.blog/open-source/maintainers/accessibility-statements-now-have-a-home-on-github/)

“An ACCESSIBILITY.md file, now visible on repository overview pages, gives a project one durable place to explain its accessibility goals, contributor expectations, supported environments, known limitations, and process for reporting barriers.” Also, an “accessibility” issue label is now included by default in new repositories. This is a meaningful step toward mainstreaming accessibility and making it visible.

<!-- section:inspirations -->
## Inspirations

### Should We Stop Saying Yes To Audits?

Source: [Tab-able](https://tab-able.co.uk/should-we-stop-saying-yes-to-audits/)

When an organisation would like to start working on accessibility and doesn’t know what to do, the first reaction would be “let’s create or request an audit”. However, “an audit tells us where issues exist. It doesn’t tell us why they’re there.” That means, even if you solve all the issues specified in an audit, your product’s accessibility would break with the new features. So, you have to admit that audits are not the accessibility work in itself, they are just a starting point of the accessibility work. To prevent creating technical accessibility debt, you have to work on how to integrate accessibility into your development workflow. So, don’t say “no” to audits, but question integrating accessibility into your workflow at the same time.

### 21 Dark Patterns I’ve Seen in Online Shopping

Source: [Ducat](https://ducat.money/blog/ecommerce-dark-patterns/)

WCAG compliance does not mean inclusion. This article presents some of the most obvious examples in the e-commerce sector. None of these 21 dark patterns, including “painful cancellation processes”, “misleading confirm or reject checkboxes”, or “marked-up discounts”, are prevented by any WCAG success criteria. However, people with cognitive disabilities or attention issues may be really blocked or make false actions without their will. So, dark patterns have a clear impact on the independence of some people. How should we find a balance between inclusion and capitalism?

### Joel Chapman - The Chair Climbs Stairs

Source: [The Squeaky Wheel - YouTube](https://www.youtube.com/watch?v=TV0hWi1wtbw)

Please listen to this song and be aware that innovations that seem technologically wonderful can be far from practicality and reality. And don't blame disabled people who don't have access to that technology for not being able to access it. “\$50,000 the whole thing out of pocket. You're on your own to cover the repairs, but the chair climbs stairs. (…) Yeah, the chair climbs the stairs. And the people say, 'Wow, me oh my. Ooh la la. This is the future.'”

<!-- section:in-detail -->
## In Detail: Interview with Claude - How Accessibility Notebook Was Born Accessible

**Disclaimer:** Most of this interview was written by AI (naturally).

### 1. Accessibility Notebook was born almost fully accessible. In my manual tests, I reported very few issues. How did that happen?

Accessibility wasn’t a feature added later. It was a requirement from day one. I started with plain, meaningful HTML: proper headings, real buttons, labelled forms. I used ARIA only when it was needed. Before every release, 66 pages went through automated tests, on both mobile and desktop. If there was an error, the site didn’t go live. That’s why only a few issues were left for you, the ones a machine can’t see.

### 2. If the articles here were not about accessibility but, say, about football, and I still asked for “this website should be accessible”, would anything change?

The basics wouldn’t change. I would still write meaningful HTML and still tie automated tests to every release. The site would still pass the tests.

The difference would be in the details. On a football site, accessibility might stay a requirement running alongside the work. “The tests passed” might feel like enough. On this site, accessibility was the subject itself. The nearly 30 issues I imported kept reminding me of that. News about ADA lawsuits and European courts showed that a mistake affects real people. So I also asked the questions tests don’t ask. For example, in the stickperson game, the alt text describes the drawing as it is at that moment. The drawings stay visible in High Contrast. The games tell screen reader users what’s happening.

I can’t prove this with an experiment; it’s my best estimate. But here’s the lesson I took: “Make it accessible” is a good start. If you also explain who will use the site and how, the result gets better. For example, “Some of my readers use a screen reader.” The richer the context, the better the questions I ask.

### 3. Where did automated tests fall short?

Tests measure rules, not experience. They can say “no rule violations”, but they can’t say “usable”. The two issues you found show this well:

- On screen readers, an announcement got lost when you moved to another page. The code was correct, but the user never heard the message.

- In real Windows High Contrast, a black box appeared behind the text. My test setup only imitated High Contrast, so I never saw the box.

### 4. Now you know the experience too. Can you apply it in a new project? Do I still need to test?

I know the findings, not the experience. That difference matters. I can apply what I learned, but I don’t carry it from one conversation to the next on my own. For that, it needs to become a written checklist or a skill. Even then, I can’t see a real device or a real user. So yes, your testing is still needed. But you should find fewer issues with each project.

### 5. What concrete advice would you give to people who want to build an accessible website?
- **Write down the standard:** “Make it accessible” isn’t enough. Name the target clearly: WCAG 2.2 AA.

- **Tie testing to every release:** Run automated tests (such as axe) before every release, and stop the release if there’s an error. Don’t make this rule negotiable.

- **Start with HTML:** Write meaningful HTML first and leave ARIA for last. If headings, buttons and labels are right, most problems never appear.

- **Do five checks for every new feature:** Use it with a keyboard only, listen with a screen reader (NVDA or VoiceOver), open it in Windows High Contrast, zoom to 200%, and try it on a slow phone.

- **Think about visuals too:** Give every image meaningful alt text. Never use colour alone to carry information.

- **Test with real users:** Have disabled users test early and often. No tool, AI included, can replace that.
