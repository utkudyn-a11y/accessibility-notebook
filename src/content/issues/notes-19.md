---
title: "Notes # 19: AI Omnibus, UsableNet's Midyear Report, Accessibility Standards Bill..."
number: 19
date: "2026-07-15"
description: "Summer park days in Istanbul, how the AI Omnibus weakens disability protections, UsableNet's midyear report, and New Zealand's accessibility standards bill."
cover: "/images/notes-19-cover.jpg"
album: {"artist": "The Temper Trap", "title": "Sungazer", "url": "https://open.spotify.com/intl-tr/album/1oNybU0H4Odc0CHNQRdgaj"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-19-ai-omnibus-usablenets-midyear-report-bill-utku-demiryakan-yx65f/"
personalNoteTitle: "A Ball in a Plastic Bag: Accessibility Can Be That Easy"
discussion: [{"context": "The European Disability Forum warns that the EU's AI Omnibus would allow sensitive data, including disability information, to be used without individual consent, which could lead to bias in areas like recruitment.", "question": "Should disability data ever be used without consent? Where would you draw the line?", "options": ["Never without consent", "Only to detect and fix bias, with strict safeguards", "Yes, if the data is anonymised"]}, {"context": "UsableNet expects more than 6,000 website accessibility lawsuits in the US in 2026, because private plaintiffs step in when federal enforcement slows down.", "question": "Are lawsuits a healthy way to enforce accessibility, or a sign that the system is broken?", "options": ["A healthy way to enforce accessibility", "A sign that the system is broken"]}]
inspirationTopics: [["Design"], ["Development", "AI"], ["Development", "Resources"]]
newsDates: ["2026-06-23", "2026-07-08", "2026-07-08"]
pledges: [{"role": "Development", "text": "I will use semantic HTML before reaching for ARIA"}]
---

(My “I am still in my 20s and listening to lively indie rock” album of the year)

<!-- section:personal-notes -->
## Personal Notes

In Istanbul, we live in a district that is a 20-minute walk from a huge park and the seaside. Our favorite activity is walking to the park and spending time there during the summer, so we have camping chairs, a thermos, and a ball to play with. Last weekend, one of our blind friends visited us, and we planned to have a picnic breakfast in the park. We also wanted to play with the ball, but I had some concerns about how we could play, as we were two partially sighted people and one blind person.

My friend came up with a solution. We put the ball inside a plastic bag and tied the opening tightly to maintain its round shape. This way, the ball began to make a rustling sound with every movement. Thanks to this inclusive solution, we were able to play a passing game. Sometimes, accessibility is just that easy.

<!-- section:news -->
## News

### 6 Ways The AI Omnibus Weakens Protections For Persons With Disabilities

Source: [European Disability Forum](https://www.edf-feph.org/6-ways-the-ai-omnibus-weakens-protections-for-persons-with-disabilities/)

The AI Omnibus is a legislative package aiming to facilitate the implementation of the European Union AI Act by postponing some deadlines on high-risk AI and reducing administrative burdens. However, the [European Disability Forum](https://www.linkedin.com/company/europeandisabilityforum/) has some concerns about this simplification process and the changes proposed by the Omnibus. The AI Omnibus allows the usage of sensitive data, including disability information, without individual consent. This can be risky due to potential bias, for example in recruitment procedures. EDF also mentions some transparency risks, a lack of legal protection against potential harm, and the risk of reduced AI literacy requirements.

### Inside The 2026 Midyear Numbers: The ADA Continues To Be The Only True Enforcement Around

Source: [UsableNet](https://blog.usablenet.com/inside-the-2026-midyear-numbers-where-digital-accessibility-litigation-is-going)

The most striking part of [UsableNet](https://www.linkedin.com/company/usablenet/)’s 2026 midyear report: “At the current pace, website accessibility lawsuits are on track to surpass 6,000 in 2026, a historic high and a nearly 20% increase over 2025. The spike follows a familiar pattern: when federal enforcement slows, through delays to Title II and limited DOJ involvement, private plaintiffs step in to fill the gap.” This is a clear sign of why federal laws and strict regulations are important. Also, as a note, the sector most affected by the lawsuits is e-commerce (79%).

### Groundbreaking Accessibility Standards Bill From New Zealand

Source: [Open Access](https://www.openaccess.nz/blog/groundbreaking-accessibility-law-proposed-by-nz-first-mp-jenny-marcroft/)

New Zealand already has some anti-discrimination and accessibility acts protecting the rights of persons with disabilities and creating a legal framework. However, there are no well-developed and updated accessibility standards in the field that organizations can follow. With the Accessibility Standards Bill, the aim is to create a system for setting accessibility standards, involving the community in co-creation and feedback processes, and defining accessibility plans and timeframes. In short, the main goal is to make accessibility regulations applicable with concrete plans and defined standards.

<!-- section:inspirations -->
## Inspirations

### 16 Little UI Design Tips That Make A Big Impact

Source: [Adham Dannaway](https://www.adhamdannaway.com/blog/ui-design/ui-design-tips#1)

I am an accessibility person, but I don't have a formal UI/UX background. While working on accessibility within our organization, I also participate in UI/UX meetings with our design team, where we discuss design issues that affect accessibility. Therefore, we have to create a balance between design and accessibility to reach an optimal point. This is why I am so curious about UI and UX. This article exemplifies some key points and makes the topic very easy to understand.

### ARIA, Anti-Patterns, And You

Source: [David Bushell](https://dbushell.com/2026/06/26/aria-anti-patterns-and-you/)

As David Bushell mentioned, giving ARIA Authoring Practices (APG) to an LLM and waiting for an accessible result is a very common practice. But this violates the first rule of ARIA, which is: Do not use ARIA! Since the APG is a biased guideline that favors ARIA, it naturally recommends ARIA implementation everywhere, even when an HTML solution is applicable. Consequently, this creates more complicated and confusing products in terms of accessibility. You can read more details from the article.

### Semantica11y - Semantic HTML For Everyone

Source: [Mark Steadman](https://dev.to/steady5063/semantica11y-semantic-html-for-everyone-4daa)

Since we are talking about ARIA and HTML, let me share a tool with you: “Semantica11y (by [Mark Steadman](https://www.linkedin.com/in/mark-steady/) ) is a small, focused rules engine that analyzes your application and highlights places where semantic HTML should be used instead of ARIA-heavy or non-semantic patterns. It’s not Axe-core, its not a WCAG violation checker, it’s simply a tool that helps you write cleaner, sustainable, and more accessible markup from the start.”
