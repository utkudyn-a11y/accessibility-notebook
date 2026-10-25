---
title: "Notes # 20: Movie Ticket Apps, AIMAC, SEO & Accessibility..."
number: 20
date: "2026-07-22"
description: "Museums of Istanbul and digital accessibility, movie ticket apps in India, the AIMAC checker, and why SEO is not accessibility."
cover: "/images/notes-20-cover.jpg"
album: {"artist": "Broke Carrey", "title": "HIJO DEL PAIS", "url": "https://open.spotify.com/intl-tr/album/7wN3L4ddlP7ZaLICrN7SI1"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-20-movie-ticket-apps-aimac-seo-accessibility-utku-demiryakan-x4xpf/"
personalNoteTitle: "No Audio Guide, No Way In: The İstanbul Archaeology Museum"
inDetailTitle: "Museums And Digital Accessibility"
inDetailSlug: "museums-and-digital-accessibility"
inspirationTopics: [["AI"], ["Design", "Disability & Stories"], ["Strategy"]]
newsDates: ["2026-07-14", "2026-07-13", null]
pledges: [{"role": "Development", "text": "I will use real headings so screen reader users can find their way", "from": "inspiration-2"}]
---

<!-- section:personal-notes -->
## Personal Notes

Last week, I was out of the office, and we decided to visit places in İstanbul that we hadn't discovered yet. There are many museums across the city dedicated to İstanbul's long history. One of them is the İstanbul Archaeology Museum, located in Sultanahmet. The museum has a beautiful garden and a very relaxing atmosphere. I had always wanted to visit, so on my first day off, my wife and I went there.

Since this is a landmark museum, we had high expectations regarding its accessibility measures. However, the reality was a huge disappointment. I love visiting museums, reading about the sculptures, and spending most of my time on cultural activities. But at the Archaeology Museum, there was nothing interactive, no audio guides, and the navigation within the building was unclear.

Even a QR code next to the sculptures linking to a webpage with written information would have been enough for me. With digital solutions, everything I outline in the "In Detail" section can easily be implemented. For me, accessibility is the only way to understand history and feel a sense of belonging to the city I live in. As we always say, accessibility is not a luxury; it shapes our lives in every aspect.

<!-- section:news -->
## News

### Movie Ticket Apps Must Disclose Accessibility Features For Persons With Disabilities

Source: [Indian Express](https://indianexpress.com/article/legal-news/movie-ticket-booking-accessibility-features-mib-advisory-10785982/)

In my previous Notes, I shared news regarding the accessibility of audiovisual platforms in India. Now, the Ministry is expanding the scope of digital accessibility: "The booking app interfaces should display the availability of accessibility features such as audio description, closed captions, Indian Sign Language (ISL), or any other feature." Focusing not only on the accessibility of the interface itself, but also on accessibility information, makes the experience more comprehensive for persons with disabilities. That is why I appreciate this effort to mainstream accessibility information.

### The Coming Assault On Disability Rights

Source: [Ken Nakata](https://convergeaccessibility.com/2026/07/13/disability-rights-assault/)

When I first entered the digital accessibility field, I learned nearly everything from resources created by US-based organizations and experts. North America has always been a compass for me. For this reason, since the beginning of 2025, I have been closely tracking the legal ecosystem in the US under the Trump administration. Unfortunately, positive news from there has been rare over the past year. In this article, Ken Nakata explains the shifts in legal practices and the efforts to change federal regulations protecting people with disabilities and digital accessibility. Most concerning is the move toward "intent-based" discrimination. If an inaccessible website or system is no longer considered illegal just because it was not built with "bad intent," the regulations lose their power to prevent discrimination.

### AIMAC: The AI Model Accessibility Checker

Source: [AIMAC](https://aimac.ai/)

"When you ask an LLM to build a web page, how accessible is the HTML it generates? AIMAC answers that question. We prompt 37 models to generate pages across 28 categories with no accessibility guidance." OpenAI currently leads the benchmark with the most successful models. Two of its models, GPT-5.4 Mini and GPT-5.3 Codex, had zero serious or critical issues across all 28 categories, recording just 22 minor or medium accessibility violations in total. Unfortunately, none of Claude's models made it into the top 10. This is disappointing given that Claude is often the default choice for technical teams. While “Anthropic's CEO claims that models like Claude will soon write most of the world's code”, their generated outputs still miss critical accessibility standards.

<!-- section:inspirations -->
## Inspirations

### AI Is Not Your Accessibility Expert: What LLMs Still Miss About WCAG

Source: [Sitepoint](https://www.sitepoint.com/ai-is-not-your-accessibility-expert-what-llms-still-miss-about-wcag/)

As mentioned in AIMAC, AI have limitations when it comes to accessibility. Therefore, understanding their limits and possibilities is important. LLMs can understand WCAG criteria, suggest semantic HTML, spot common accessibility failures, and fix basic accessibility issues. However, suggesting context-dependent solutions, overusing ARIA patterns, implementing user experience best practices, and simulating flows with assistive technologies can be challenging. That’s why AI is not an accessibility expert for now, but it is a valuable accessibility assistant that you can consult.

### A Tale of Two Menus: Why Structure Matters

Source: [Dax Castro – LinkedIn](https://www.linkedin.com/pulse/tale-two-menus-why-structure-matters-dax-castro-ads-vyhqc/)

A very clear explanation of how the experiences of screen reader users and sighted users differ. As Dax Castro mentions, sighted users comprehend a page from "whole-to-part" because they can quickly scan the overall layout and understand where specific information is located. On the other hand, screen reader users navigate a page item by item, understanding its structure from "part-to-whole." This is why headings and landmarks are so critical for accessibility. Also, I loved the menu example at the beginning of the article.

### SEO Is Not Accessibility, And We Have The Data To Prove It

Source: [AFixt](https://afixt.com/seo-is-not-accessibility-and-we-have-the-data-to-prove-it/)

"Page titles, heading structure, image alternative text, descriptive link text, and links built with real `<a href>` markup all matter to assistive technology users and to search engines." However, the benefits of accessibility on SEO are overrated and can sometimes be misleading. According to AFixt’s study, "83% of all accessibility failures are invisible to SEO. [And], the most frequent and most severe failures mean nothing to Google. [...] The overlap exists because both disciplines inherited a sliver of the same foundation: semantic HTML. [...] Accessibility starts there and then extends into interaction, perception, and comprehension. This is territory no search bot enters." In short, care about accessibility not for SEO, but for user experience, compliance, and simply because it is the right thing to do.

<!-- section:in-detail -->
## In Detail: Museums And Digital Accessibility

After my disappointment at the İstanbul Archaeology Museum, I thought about other museums I have visited. Below are a few examples that made me feel like I actually learned something or enjoyed my time. I listed them based on how simple their accessibility solutions are:

- **Aya Yani Church:**  A small church on the Princes' Islands in İstanbul. The door was locked, so we couldn't go inside. I am mentioning it here because of the QR code fixed to the outer wall. When you scan the code, it takes you to a webpage explaining the church's history and architecture. The page also has an audio option.
- **İstanbul Toy Museum:**  A museum showcasing a toy collection. To be honest, it is not very accessible overall. The positive side for me was that the QR codes on the display cases explained what was inside. When I know what is in the display case, it is much easier for me to look at the items using my phone's zoom.
- **Sakıp Sabancı Museum – "Past Present İstanbul" Exhibition: This**  exhibition was made accessible through the hard work of [Erişilebilir Her Şey](https://www.linkedin.com/company/eri%C5%9Filebilir-her-%C5%9Fey/). A lot of effort went into it, but the most outstanding feature was that the info boards were simplified and translated into sign language on tablets. Artwork descriptions were also available to listen to. Here is a [video about the project.](https://www.youtube.com/watch?v=oLJLxIGo80E)
- **Haus der Musik:**  The best museum I have ever visited. Haus der Musik in Vienna is a museum focused on classical music. It was designed to be inclusive, and almost everything is interactive. Every room has screens where you can listen to something. However, the only problem is that the screens do not support screen readers. It would be difficult for a blind person to experience it alone. The reason I mentioned Haus der Musik on this list despite this main issue is that it appeals to different senses rather than just one, like sight.
