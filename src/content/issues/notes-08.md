---
title: "Notes # 8: PDFs In Germany, AI Agents, Redesign Works..."
number: 8
date: "2026-04-20"
description: "A dark-music festival, PDF accessibility in Germany, AI agent skills for accessible code, and how the AJet redesign improved accessibility."
cover: "/images/notes-08-cover.jpg"
album: {"artist": "Wesley Joseph", "title": "Forever Ends Someday", "url": "https://open.spotify.com/intl-tr/album/7GVpOkI5do8Hb8NOtqb39y"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-8-pdfs-germany-ai-agents-redesign-works-utku-demiryakan-uohef/"
personalNoteTitle: "Disco Anxiety: My Accessibility Needs vs. My Love for Dark Music"
inDetailTitle: "What Else Can A Redesign Project Improve Accessibility? – The Case Of AJet"
inDetailSlug: "what-else-can-a-redesign-project-improve-accessibility-the-case-of-ajet"
discussion: [{"context": "Korea's Supreme Court agreed that missing alt text on a shopping site is discriminatory, but it cancelled the damages because there was no clear evidence of intent or negligence.", "question": "Should companies pay for inaccessibility even when no one can prove they meant it?", "options": ["Yes, they should pay without proof of intent", "No, damages need intent or negligence"], "from": "news-2"}]
inspirationTopics: [["Design"], ["AI", "Development"], ["Design"]]
newsDates: [null, "2026-04-13", "2026-04-15"]
pledges: [{"role": "Design & Content", "text": "I will publish tagged, accessible PDFs or HTML pages", "from": "news-1"}]
---

<!-- section:personal-notes -->
## Personal Notes

Last week I attended a music festival called Disco Anxiety. The festival, which brought together dark‑wave, post‑punk, industrial, gothic, and experimental dark‑music genres, featured nine bands from around the world. Since this was an event where dark music was celebrated, black was the main colour in the venue. The walls were decorated with dark‑coloured posters, the lighting was very low, and there were blinking white neon lights at the entrance to provoke anxiety in keeping with the festival’s name. As a partially‑sighted audience member, finding the drink stand and moving around independently was very challenging. Moreover, because everyone wore black, I sometimes lost my friends 😊

While my partially‑sighted side grumbled about the low level of accessibility, I was generally very happy—because, to be honest, I loved the dark atmosphere. Of course, everything should be dark for an immersive experience, and we should feel some kind of negativity at a dark‑music festival. I was okay with that. My disability and my accessibility needs are real, but my love for dark music is real too. What should I feel in this controversial situation?

<!-- section:news -->
## News

### Report On The Accessibility Of PDF Documents On Public Sector Websites In Germany

Source: [axes4](https://www.digitalaccessibility.report/)

Public bodies are obligated to make their digital documents accessible for EAA compliance in Germany. However, according to [axes4](https://www.linkedin.com/company/axes4/)’s study, only 9,5 % of PDFs from the public sector are accessible. Even 37,4 % of all PDFs are not tagged, which means assistive technologies like screen readers cannot understand whether an item is a list, heading, or paragraph due to the lack of semantic structure. Unfortunately, since 2020 almost nothing has changed. The inaccessibility rate remains around 10 % each year. PDFs are generally overlooked compared to web and mobile accessibility, perhaps because they are not part of the primary user flows most of the time. Nevertheless, it is a fact that they are important and we should care about them.

### Supreme Court Dismisses Damages Against Online Malls

Source: [The Chosun Daily](https://www.chosun.com/english/national-en/2026/04/13/343YCJJMYFGT3A7FIWGYYLNWGI/)

In Korea, visually impaired plaintiffs alleged that they suffered harm because e‑commerce websites lacked alternative text for image‑based content. While the first court imposed a penalty on the e‑commerce sites, the Supreme Court overturned the decision, stating that “there was no clear evidence of intentional or negligent misconduct.” The irony is that the Supreme Court also acknowledged that the absence of alternative text on a shopping website is discriminatory. According to the news article, the plaintiffs’ claim is based on an anti‑discrimination act, not on a digital‑accessibility law such as the ADA or Turkey’s Presidential Circular 2025/10. I think this case is a clear example of why specific digital‑accessibility laws are important. We all know that digital accessibility issues can lead to discrimination, but anti‑discrimination acts are often so general that they can be interpreted differently.

### Maricopa Unveils New Website For Improved Accessibility

Source: [Signals](https://www.signalsaz.com/articles/maricopa-unveils-new-website-for-improved-accessibility/)

While almost every city council in the US is in a huge panic over the approaching ADA Title II deadline, which sets clear standards for the accessibility of public‑sector websites, the City of Maricopa took a proactive step. They approached accessibility compliance as an opportunity for a broader UX redesign. In addition to basic WCAG compliance, they added more visual elements and preview text to the news section and calendar to make updates more visible, enhanced filtering options, and integrated a predictive search tool. The new city website will go live on April 21. This is a good example of how accessibility can support UX.

<!-- section:inspirations -->
## Inspirations

### Calm Web Design: Combating Cognitive Overload

Source: [Propeller](https://www.propellermediaworks.com/blog/calm-web-design/?utm_campaign=&utm_content=Is%20complexity%20the%20accessibility%20barrier%20we%27re%20missing%3F&utm_medium=email&utm_source=getresponse)

One of the most striking data from the WebAIM Million is the average number of elements on the homepage, 1,437, which is 22.5 % higher than the previous year. The report concluded that vibe coding can be an issue for that. Also, in this article it is stated that: “AI models are trained on existing design patterns. The patterns that got us to 1,437 elements and 56 errors per page. AI generating layouts from those patterns compounds the problem with a tool that has zero sense of the user’s emotional state and no ability to feel the difference between calming and triggering.” As a conclusion, every UX designer is invited to conduct a “75‑year‑old test” by asking this question: Can a 75‑year‑old with low vision use this site successfully?

### Can AI Agent Skills Help Developers Ship Accessible Code?

Source: [Intopia](https://intopia.digital/articles/can-ai-agent-skills-help-developers-ship-accessible-code/)

The previous article shows us why AI and vibe coding can be risky for accessibility, but we shouldn’t take a negative stance, I think. Because the quality of vibe coding depends on the quality of our prompts and AI‑agent configuration. At this point, [Intopia](https://www.linkedin.com/company/intopia-digital/) has released Intopia Web Accessibility Skills, including a [SKILL.md](http://skill.md/) file with a library of supporting resources. They mentioned that they are still testing the clarity and flexibility of the guidance. In the article, you can see an example of how the SKILL is used.

### In the Wake of the 2025 Font Wars, Accessibility Is Still an Afterthought

Source: [Print Mag](https://www.printmag.com/type-tuesday/in-the-wake-of-the-2025-font-wars-accessibility-is-still-an-afterthought/)

An article discusses the government’s decision to use Times New Roman for “decorum and professionalism.” Times New Roman is a serif typeface, and on screens—especially at smaller sizes—“every serif tail starts to become another small obstacle.” For this reason, the writer advocates using Calibri like in 2023. I admit that Calibri is better than Times New Roman in a digital environment, but Calibri also has several accessibility issues. In simple terms, it is a font that cannot pass the “1 i I l” test. The article presents many strong arguments and a very clear statement emphasizing the importance of font selection. I think a better alternative than Calibri could be recommended.

<!-- section:in-detail -->
## In Detail: What Else Can A Redesign Project Improve Accessibility? – The Case Of AJet

While reading the news about Maricopa, I was reminded of the recently redesigned AJet app. As the [Turkish Technology](https://www.linkedin.com/company/turkishtechnology/) accessibility team, we are responsible for the accessibility of the [AJet](https://www.linkedin.com/company/a-jet/) digital touchpoints. Since our accessibility team established one year after the release of AJet web and mobile app, our first work was working on accessibility of existing app and website. And we couldn’t do everything for accessibility. Some of the improvements made during the redesign process gave us great opportunities to enhance accessibility.

- **Contrast Issues:** AJet’s primary colors are light blue and white, which naturally caused many contrast issues. Although we remediated most issues in older AJet versions by slightly darkening the primary color, occasional overlooked areas still remained. During the redesign, the color palette was changed. Working together with the design teams, we achieved contrast compliance not only to meet standards but also to provide a more natural, good‑UX experience.
- **Some “In Itself Not Accessible” Components:** Image‑of‑text carousels… In older AJet versions, a carousel composed of image‑of‑text was placed at the top of the page so that campaigns and announcements would be visible. Even though we added alt text to the images, it was still an accessibility issue for low‑vision users. We communicated design guidelines to the design teams and discussed with the technical team about delivering the image‑of‑text as plain text, but the required effort was high. During the redesign we eliminated the image‑of‑text carousel. Now we have an accessible slider under the booker component that contains text and supporting visuals. Sometimes it is much easier to change the design directly rather than trying to make something accessible.
- **Dark Mode:** As a partially-sighted user, dark mode had been my dream since the first day we started working on AJet. I know that dark mode alone is not a solution for accessibility issues, but offering alternatives is also important. Working with the design team from the beginning to integrate dark mode was a great experience, rather than adding it later.
- **AI Chatbot:** AJet Assistant was launched together with the redesign. We have plans for chatbot accessibility and solutions that can simplify aviation processes for people with disabilities. The launch of AI support with the redesign opened the door to new projects for our accessibility team.
