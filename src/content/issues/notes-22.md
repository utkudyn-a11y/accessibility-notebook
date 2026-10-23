---
title: "Notes # 22: \"Could AI Be Increasing Our Accessibility Debt? What Should Be Done?\""
number: 22
date: "2026-08-10"
description: "Could AI be increasing our accessibility debt? Takeaways from Deque's \"From Debt To Dividend\" report, plus WCAG-EM 2.0 and India's draft rules."
cover: "/images/notes-22-cover.jpg"
album: {"artist": "Shearwater", "title": "The New World", "url": "https://open.spotify.com/intl-tr/album/3iclJkPCwRcI0DlTMB23Wz"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-22-could-ai-increasing-our-accessibility-debt-what-demiryakan-vhrrf/"
personalNoteTitle: "Freeze or Melt: The Inaccessible Office Thermostat"
inDetailTitle: "Takeaways From Deque’s “From Debt To Dividend” Report"
inDetailSlug: "takeaways-from-deques-from-debt-to-dividend-report"
discussion: [{"context": "Deque surveyed 200 engineering leaders and found that teams are highly confident in the accessibility of AI-generated code, while the reality is very different.", "question": "Is AI increasing our accessibility debt? What should be done?", "options": ["Yes; build accessibility checks into AI coding tools", "Yes; keep manual testing with disabled users", "No, AI will reduce the debt over time"]}]
inspirationTopics: [["Strategy"], ["Design"], ["Strategy"]]
newsDates: [null, "2026-07-23", "2026-07-29"]
pledges: [{"role": "Development", "text": "I will test AI-generated code with a screen reader before shipping"}]
---

<!-- section:personal-notes -->
## Personal Notes

Last week was the hottest week of this summer in Turkey so far. So, I understand that people want to cool the office and meeting rooms by adjusting the air conditioning to the lowest temperature on the thermostat. But I am not an “everywhere should be cold” person and I am freezing. However, thermostats are mostly inaccessible hardware. The temperature can be adjusted only via touchscreens or keys that have many more functions than just adjusting the temperature. So, I cannot use these devices independently and I only know the turn-on/off button. In summer months, I have two options: Freeze or melt. Please make thermostats accessible!

<!-- section:news -->
## News

### How Engineering Leaders Can Advance Accessibility In The AI Era

Source: [Deque](https://accessibility.deque.com/debt-to-dividend-guide)

Probably "the report of the year" from [Deque Systems, Inc](https://www.linkedin.com/company/deque-systems-inc/). “Deque surveyed 200 engineering leaders actively using AI-generated code and agents. The findings document clear gaps. Teams have high confidence in the accessibility of their AI-generated code, but the reality is very different—and that’s a real risk. This report offers an approach for integrating AI to achieve compliance while minimizing financial, legal, and reputational risk and optimizing workflows.” I also wrote an “In Detail” section summarizing some key takeaways.

### WCAG Evaluation Methodology (WCAG-EM) 2.0

Source: [W3C](https://www.w3.org/TR/wcag-em-2/)

First things first: WCAG-EM is not an accessibility standard, nor is it a new set of techniques. It is a helpful document for creating a reasonable sample to evaluate the accessibility of your digital product. Having said that, while an accessible sample does not mean full WCAG compliance, this document is still important for quick and periodic accessibility checks. For me, there are two use cases for this document: First, before proceeding with a comprehensive accessibility audit, it helps me understand the current state of the product using a reasonable sample. Second, when planning periodic (perhaps monthly) manual accessibility checks, I can use these reasonable samples again. For these reasons, the notes, guidance, and warnings provided in the document for creating samples can be very useful.

### Ministry Of Social Justice Releases Draft Accessibility Rules 2026: What Technology Companies Need To Know

Source: [Nasscom](https://community.nasscom.in/communities/public-policy/ministry-social-justice-releases-draft-accessibility-rules-2026-what)

In India, the Ministry of Social Justice & Empowerment published draft accessibility rules for technology businesses providing digital products and services. According to the rules, all digital products, including mobile apps, websites, and hardware, should comply with Indian standards that are very similar to EN 301 549. Therefore, for websites and mobile apps, the bare minimum is WCAG 2.1 AA. Beyond compliance, the draft rules require Accessibility Conformance Reports from organizations, as well as periodic reviews. Organizations must also manage the accessibility of user-generated content and establish a mechanism for complaints. In short, the new rules, which will come fully into force after 2 years, have both compliance and management impacts.

<!-- section:inspirations -->
## Inspirations

### Why Website Bloat Is A Governance Problem, Not A Tech One

Source: [Carnegie Higher Ed](https://www.carnegiehighered.com/higher-education-website-governance-pdf-bloat/)

Due to the ADA Title II deadline, most state governments and higher education institutions discussed PDFs extensively until this April. This article attributes the high number of inaccessible PDFs to web pages being treated as digital archives. Having too many outdated and unused files is not just an accessibility issue; it is a website governance problem. In fact, accessibility requirements might actually be a great opportunity to clean up websites that have turned into digital junkyards. The strategy is simple: Identify and remove unnecessary documents, and if a document is truly necessary, make it accessible.

### The Colors That Are Compliant On Both White And Black Backgrounds

Source: [A11y With Diana](https://a11ywithdiana.substack.com/p/the-colors-that-are-compliant-on)

“Choosing colors that are compliant on both white and black backgrounds can make it much easier to build components that work consistently in both light and dark themes without sacrificing readability. It can also reduce the number of color variations that need to be designed, tested and maintained.” While there is a very small range of colors that can be used, Diana offers several practical suggestions in the article.

### Bend, Do Not Break: Building Resilient Accessibility Programs

Source: [Access Ability](https://buttondown.com/access-ability/archive/bend-do-not-break-building-resilient/)

“Conformance answers whether a product met the criteria once. Resilience answers whether it will still meet them after the people, the platform, the regulations, and the tooling have all changed, because all of them will.” That’s why sustainability in accessibility is key, and [Sheri Byrne-Haber (disabled)](https://www.linkedin.com/in/sheribyrnehaber/) highlights several barriers to resilient accessibility efforts. In the article, she outlines six questions that should be posed to the team during an accessibility workshop.

<!-- section:in-detail -->
## In Detail: Takeaways From Deque’s “From Debt To Dividend” Report

The Deque report highlights four main gaps between AI-assisted development and accessibility, along with proposed solutions:

**The Confidence Gap:**  Engineering leaders heavily trust AI-generated code's accessibility, yet AI models default to producing critical accessibility errors.

- *Solution:*  Integrate automated accessibility testing directly into IDEs and AI coding tools to provide real-time feedback during code creation.

**The Validation Gap:**  Accessibility flaws frequently hit production because testing happens too late in the lifecycle.

- *Solution:*  Embed automated accessibility checks into the CI/CD pipeline so every build is continuously evaluated, fixing issues when it is cheapest.

**The Prioritization Gap:**  Organizations rank accessibility last in compliance priorities, yet it is their third leading cause of post-production rework.

- *Solution:*  Include accessibility requirements directly in sprint completion criteria and "Definition of Done" statements rather than treating them as a final gate.

**The Scalability Gap:**  Rapid AI code generation is outstripping existing accessibility validation infrastructure, increasing compliance risks.

- *Solution:*  Shift accessibility left by embedding it seamlessly into every stage—from the IDE and code reviews to build pipelines and AI agent workflows—making testing automatic and effortless.
