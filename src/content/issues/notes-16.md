---
title: "Notes # 16: Legal Action In France, Inclusive Africa Conference, Email Accessibility ..."
number: 16
date: "2026-06-15"
description: "Trying FIFA's audio description app, legal action in France, the Inclusive Africa conference, email accessibility, and AI and human collaboration at Binclusive."
cover: "/images/notes-16-cover.jpg"
album: {"artist": "María José Llergo", "title": "El Juego", "url": "https://open.spotify.com/intl-tr/album/3npP1Pzs2y4STodqCVelp1"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-16-legal-action-france-inclusive-africa-email-utku-demiryakan-imxqf/"
personalNoteTitle: "Correcting Myself: FIFA's Audio Description App Just Works"
inDetailTitle: "AI and Human Collaboration in Accessibility Work – The Binclusive Example"
inDetailSlug: "ai-and-human-collaboration-in-accessibility-work-the-binclusive-example"
discussion: [{"context": "Axess Lab looked at a site built with Lovable's AI that scored 100% in its built-in accessibility check, and manual testing still found real problems.", "question": "Should tools be allowed to show a \"100% accessible\" score at all?", "options": ["Yes, with a clear note on what automated checks miss", "No, it misleads people"], "from": "inspiration-2"}]
inspirationTopics: [["Design", "Resources"], ["AI", "Testing"], ["AI"]]
newsDates: ["2026-06-02", "2026-06-02", "2026-05-21"]
pledges: [{"role": "Testing", "text": "I will never trust a \"100% accessible\" automated score", "from": "inspiration-2"}]
---

<!-- section:personal-notes -->
## Personal Notes

In Notes # 14, I mentioned accessibility arrangements in the FIFA World Cup, and the World Cup has started this week. I tried the audio description via the FIFA Audio Description mobile app and realized that I gave wrong information in my previous Notes # 14. You don’t need to enter an event code to listen to the audio description. Just download the app, select the match that will appear on the home screen, and listen to the description. It works perfectly fine. You can hear the visual details of the match ceremony, team kits, atmosphere, and details of critical moments. I just struggled with translating “yard” to “meter” because the narrator gives the details in "yard"s every time, and some football terms in English.

And a feedback: Since I am following the matches from TV and the narrator is in the stadium, there is a synchronization problem. It is understandable and natural, but if there is a rewind feature in the match for the audio track, I could adjust the synchronization manually from the app.

<!-- section:news -->
## News

### Legal Action For The Accessibility Of Public Services – France

Source: [Collectif Handicap Visuel](https://www.linkedin.com/posts/accessibilitaeznumaezrique-handicapvisuel-share-7467457522895982592-cHVN/)

A French advocacy NGO, [Collectif Handicap Visuel](https://www.linkedin.com/company/collectifhandicapvisuel/), filed a lawsuit against the General Directorate for Public Finances, claiming that the directorate’s website is not accessible to the blind. Form fields are not labeled, keyboard navigation is nearly impossible, and error messages are not reachable with screen readers. Due to these barriers, a blind citizen cannot independently complete the tax declaration process and must share sensitive personal data, such as ID cards or bank account information, with someone else. In this lawsuit, [Intérêt à Agir](https://www.linkedin.com/company/interet-a-agir/) is supporting Collectif Handicap Visuel. We know Intérêt à Agir from the first EAA lawsuit in France, which targeted Carrefour and three other brands.

### Kenya Pushes Digital Accessibility And Inclusive AI Transformation In Africa

Source: [Citizen Digital](https://citizen.digital/article/kenya-pushes-digital-accessibility-and-inclusive-ai-transformation-in-africa-n383855)

The 7th Inclusive Africa Conference took place on June 2–4, 2026, in Nairobi, Kenya. This hybrid event convened policymakers and tech leaders to explore the theme: “Accelerating Digital Accessibility and AI Solutions for Africa’s Future.” In the opening speech, the Cabinet Secretary for Information, Communications and the Digital Economy highlighted infrastructural improvements in Kenya, the need for accessibility in e-government services, and their inclusive AI policy. Additionally, questions from the audience emphasized that “digital accessibility represents one of Africa’s most significant untapped economic opportunities.” The conference also highlighted efforts to develop a harmonized African Digital Accessibility Standard for ICT products and services.

### Accessibility Report 2026 – Email Markup Consortium

Source: [Email Markup Consortium](https://emailmarkup.org/en/reports/accessibility/2026/)

“Despite a marginal uptick, the email ecosystem remains in a state of systemic failure: 99.88% of the 376,348 emails analyzed this year contain ‘Serious’ or ‘Critical’ accessibility defects, leaving only a 0.002% pass rate represented by just eight emails from three brands.” According to the report, there are three main reasons for the lack of accessibility in emails: not applying web accessibility standards to the inbox, prioritizing visual layout over semantics in HTML mail builders, and a lack of accessibility support in email clients.

<!-- section:inspirations -->
## Inspirations

### Seeing Colors Differently: Discovering ColorADD The Color Alphabet

Source: [A11y Blog](https://a11yblog.com/2026/05/26/seeing-colors-differently-discovering-coloradd-the-color-alphabet/)

Likewise in the article, I encountered a colorblind edition of the famous card game UNO. Your aim is to finish the cards in your hand by matching the color or number of the card on the table. In the colorblind edition, there are small symbols in different colors: a circle for blue, a rectangle for red, and so on. From this article, I learned that there is a color alphabet for the colorblind, and it is a very logical system. You can understand the relationship between orange and red very easily because primary colors like red, yellow, and blue have simple specific symbols. The symbols of other colors are generated from this baseline and create more complex keys. The good thing is that you can use the ColorADD mobile app to translate real-world colors into ColorADD symbols.

### Lovable’s AI Built A 100% Accessible Site – Or Did It?

Source: [axess lab](https://axesslab.com/lovable/)

Lovable has a built-in accessibility tool that runs Axe for automated tests. So, a website that scored 100% accessibility may still have some accessibility issues because of the limited capacity of automated checks. In the article, all the issues detected by manual tests are shown with videos. In general, Axe cannot detect content-dependent issues like missing heading structure or label–visible name mismatches. Also, action-needed detections cannot be run via automation. That’s why focus management issues, unannounced states of components, and status messages are some of the accessibility issues that cannot be detected.

### The 2–7 Problem

Source: [Anton Sten](https://www.antonsten.com/articles/the-2-7-problem/)

“AI output never leaves the middle. It always lands somewhere between a 2 and a 7. Never a 1. Never an 8.” Which means “it can’t make something accidentally brilliant. It can’t make something so specific and weird that you remember it three years later. It pattern-matches toward the median of acceptable.” That’s why human effort is needed to create truly great work. AI is a facilitator that helps you do your work, and only AI–human cooperation will guide us toward a perfect output.

<!-- section:in-detail -->
## In Detail: AI and Human Collaboration in Accessibility Work – The Binclusive Example

Anton Sten’s article provides us with a good framework for understanding AI’s capacity. AI output always tends to stay at a “good enough” level. Therefore, human effort is necessary for a truly good output. The mistake made in the marketing of accessibility products is exactly here. Solutions that claim you will become accessible with a single integration and that you don’t need to put in any effort simply don’t work. What actually works are solutions that start the work with AI and then easily incorporate human effort with AI support. The products launched by the [Binclusive](https://www.linkedin.com/company/binclusive/) are great examples of this approach. Here are explanation of 2 products:

- **Binclusive Audio Description Tool:** By uploading your video to the audio description tool, you can get an AI-generated description output in a short time. Uploading the video, skipping the settings, and pressing the button is the basic flow you can proceed with. Although the tool works well, you get a “good enough” output with this method. You can specify the points that need to be described in detail by writing prompts through the tool. You can also adjust the level of description detail you want from the settings. After receiving the output, you can edit it through prompts as well. The important thing here is that it serves as an assistant that accompanies you and simplifies your process, rather than the “give us the video and we’ll describe it” approach.
- **Binclusive PDF Remediation Tool:** By uploading your PDF to the remediation tool, you can generate an accessible version of it. The “Reader-focused” option does not guarantee protecting the visual structure of the PDF, but “Preserve Source” adds semantic tags while maintaining the visual design. The feature I like most here is the ability to edit the output after receiving it. The tool mostly identifies elements that should be headings, accurately tags lists, and adds alt text to images. On the other hand, it may not always correctly determine whether a heading should be an H2 or H3. Or if an image should be marked as decorative, you have to change this from the tool. As a note, the tool is not a PDF editor; it is actually a simple tool provided to you for editing HTML tags. Once again, this is a great example of the editability of AI-generated output.
