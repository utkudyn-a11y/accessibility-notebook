---
title: "Notes # 31: Atomic Accessibility, New Zealand's DAS, A11y In Ghana..."
number: 31
date: "2026-11-09"
description: "An NFC-only ID check that locked me out of my bank, New Zealand's Digital Accessibility Standard, user testing with disabled people in Ghana, the Atomic Accessibility Model, and a dark mode checklist."
cover: "/images/notes-31-cover.jpg"
album: {"artist": "Sampa The Great", "title": "Nu Zamrock", "url": "https://open.spotify.com/album/3XRKBEcQMSiMzGcGQJ2qDz"}
personalNoteTitle: "Stuck In An NFC Loop"
inDetailTitle: "What Can We Learn From New Zealand's Digital Accessibility Standard (DAS)?"
inDetailSlug: "what-can-we-learn-from-new-zealands-digital-accessibility-standard"
discussion: [{"context": "Ghana's NCA met basic accessibility standards first, then invited disabled users to test its website. I think asking disabled users to test a system that doesn't meet basic criteria is an awful idea.", "question": "When should disabled users test a product?", "options": ["After it meets basic standards", "From day one"], "from": "news-2"}]
inspirationTopics: [["Strategy"], ["Testing"], ["Design", "Development", "Resources"]]
newsDates: ["2026-07-06", "2026-10-28", "2026-10-27"]
pledges: [{"role": "Administration", "text": "I will name an accessibility champion in every product team", "from": "inspiration-1"}, {"role": "Design", "text": "I will check my designs against a dark mode checklist", "from": "inspiration-3"}]
---

<!-- section:personal-notes -->
## Personal Notes

In [Notes # 28](/notes/28/), I shared news from Belgium where digital means are becoming the only access point for some essential services. Even if these services remain accessible online, physical options should still exist due to varying levels of digital literacy and device dependencies. I experienced a similar situation last week.

I use a low-cost Android phone that doesn't have NFC functionality. Since my primary device for completing almost all my tasks is a laptop, a lower-end Android phone is sufficient for me just to make calls or use WhatsApp. However, when I tried to make a bank transfer with my main bank, it required me to verify my ID card, and the only available method was NFC for security reasons. A human call center agent couldn't help me because I hadn't verified my ID yet. What a loop... So, I ended up using someone else’s NFC-enabled phone to verify my ID card for my bank account. Do you think logging into your account and verifying your ID from someone else’s phone is more secure than using a call center?

<!-- section:news -->
## News

### Digital Accessibility Standard (DAS) – New Zealand

Source: [Digital Government New Zealand](https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/digital-accessibility-standard)

The announcement of accessibility standards is just as important as the standards themselves. New Zealand will adopt new standards incorporating EN 301 549 v4.1.1 in 2027 for government agencies. They clearly explained who is responsible for the standards, why and how they developed them, and what support mechanisms they are working on. They also provided alternative formats for the announcement, such as large print, sign language interpretation, and easy-read formats. I wrote an “In Detail” article on the draft standards, which includes some great takeaways.

### Ghana’s NCA Engages Persons With Disabilities To Test Website Accessibility

Source: [Tech Review Africa](https://techreviewafrica.com/news/7983/ghanas-nca-engages-persons-with-disabilities-to-test-website-accessibility)

Involving persons with disabilities in digital accessibility work is essential, especially during the testing and auditing phase. But this approach carries risks if done incorrectly. If an organization fails to implement basic accessibility criteria and simply says, “let disabled users test the system”, that is an awful idea. Standards and technical guidelines already exist; organizations must first build the technical baseline before conducting usability tests with the disabled community. That is why I wanted to highlight this news article from Ghana. They implemented the fundamental standards first, and then validated the real-world experience through a user-testing event with the disability community.

### AccessibleEU Publishes New Study On How Companies Implement Accessibility

Source: [AccessibleEU](https://accessible-eu-centre.ec.europa.eu/content-corner/news/accessibleeu-publishes-new-study-how-companies-implement-accessibility-2026-10-27_en)

In short, the study shows an increased awareness but a low level of implementation regarding accessibility in companies. Unfortunately, there are no numbers or percentages in the report to follow up on the progress next year. This is more like a strategy development document. So, I am pasting the most frequently encountered challenges here to keep in mind and try to find solutions for: “Regulatory complexity, fragmented guidance, and lack of practical implementation support consistently emerged as major obstacles across sectors and company sizes.”

<!-- section:inspirations -->
## Inspirations

### Atomic Accessibility Model

Source: [Nat Tarnoff](https://tarnoff.info/2026/10/19/atomic-accessibility-model/)

In his presentation, Nat Tarnoff brings forward a digital accessibility governance suggestion for organizations. A central accessibility team, called 'the hub,' is responsible for governance, understands standards and tooling, and provides training. There are also accessibility champions who are responsible for implementation. To learn more about the relationship between these two concepts, you have to read the article. Also, it contains one of the clearest definitions of a cultural shift for me: “Culture shift: how we build, not what we fixed. This is the long-term goal.”

### We Need More Choices In Automated Testing

Source: [Karl Groves](https://karlgroves.com/we-need-more-choices-in-automated-testing/)

I used to think that automated accessibility tools could never find accessibility issues in a meaningful way simply because I didn't believe in their capabilities. However, Karl Groves gave me a different perspective. Right now, there are very few dominant accessibility tools in the field. This lack of competition prevents these tools from evolving. After all, “When one engine becomes dominant, its capabilities can start to define the boundaries of the practice around it.” Naturally, progress in automation remains limited. More competition could drive the evolution of automation.

### Dark Mode Checklist

Source: [Max Design](https://www.maxdesign.com.au/articles/dark-mode-checklist.html)

Russ Weakley has prepared a great, practical dark mode compatibility checklist for both designers and developers. All you have to do is simply answer 'Yes' or 'No' to each question. I'm thinking of adding dark mode to my Accessibility Notebook website and passing this checklist along to Claude. I'll share the results once I do.

<!-- section:in-detail -->
## In Detail: What Can We Learn From New Zealand's Digital Accessibility Standard (DAS)?

The Digital Accessibility Standard, which will go into effect in early 2027, makes EN 301 549 v4.1.1 mandatory for government software and hardware. Below, I’ve summarized a few governance-related aspects of this standard that I really like:

- **Internal Material Exception:** Every standard leaves certain things out. Usually, internal work materials are exempt from accessibility rules. What makes the New Zealand standard different is the requirement for "reasonable accommodation." If a disabled employee asks for an internal material to be accessible, it must be provided. This right is now protected by the standard.

- **Accessibility Statements:** In New Zealand, sharing your accessibility efforts is just as important as doing the work. We previously saw this in the news announcement, and the standard itself gives clear details on what an accessibility statement should include. In fact, section 3.5.4 provides helpful guidelines for everyone on what to put in a statement.

- **Accessibility Plan:** The Accessible Canada Act has a similar requirement. Every organization must publicly share its plans and explain where it is falling short. These plans will be reviewed every year. I think it would be helpful to provide a ready-to-use annual plan template. A standard template would simplify internal workflows for organizations and help the public know what to expect.

- **Plain Language?:** Organizations are expected to take "reasonable steps" to use plain language in ICT products and services. However, this seems to be the weakest part of the standard. It remains unclear what steps can be taken since plain language standards have not been finalized yet.

- **Communication with Vendors:** During procurement, organizations are required to work only with vendors that meet their accessibility needs. Organizations might need supporting resources here. For example, the Section 508 website offers detailed guidance on how to add accessibility clauses to technical specifications.
