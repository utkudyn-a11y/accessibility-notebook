---
title: "Notes # 27: The Beatles Story, Accessibility Overlays, Screen Reader User Survey..."
number: 27
date: "2026-10-11"
description: "Accessibility insights from England, a visit to The Beatles Story, automated testing for the US Web Design System, and Screen Reader User Survey #11."
cover: "/images/notes-27-cover.jpg"
album: {"artist": "Hilal Kaya", "title": "Sümbül", "url": "https://open.spotify.com/intl-tr/album/16euRvu3YYHyqlstsk8osC"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-27-beatles-story-accessibility-overlays-screen-user-demiryakan-2mbvf/"
personalNoteTitle: "The Beatles Story and an Audio Guide I Couldn't Use"
inDetailTitle: "Accessibility Insights From England"
inDetailSlug: "accessibility-insights-from-england"
discussion: [{"context": "For Utku, independence doesn't mean doing everything alone. It means being free to decide when to ask for help. His trip to England left him with more questions than answers about this.", "question": "Should services invest in staff assistance or in accessible self-service? Where's the right balance?"}, {"context": "Almost no organization targets WCAG AAA, because no law requires it.", "question": "Are AAA criteria still useful, or have they become a \"nice to have\" that no one reads?"}]
inspirationTopics: [["Legal & Standards"], ["Legal & Standards"], ["Strategy"]]
newsDates: ["2026-09-25", "2026-09-16", "2026-09-29"]
---

<!-- section:personal-notes -->
## Personal Notes

Last week I was in England and spent most of my days in Liverpool. I have many insights regarding accessibility, which you can read about in the “In Detail” section. Here I want to tell you my favorite memory: I went to The Beatles Story. You can see, read, and most importantly, experience everything about The Beatles. They established a replica Cavern Club with sound effects and some other replica objects. There is a Beatlemania tunnel where you can hear fans screaming, listen to some memories, and feel the fan hysteria surrounding The Beatles. In the Abbey Road room, you can touch an old recording machine. The Yellow Submarine is one of the most psychedelic rooms in the museum, where you feel a little sad and hear about the end of the band.

In the museum, you have to use an audio guide to listen to every story. But guess what? Audio guides are separate devices, and you cannot use a screen reader or increase the text size on them. Also, you have to enter the room number to listen to the related story. And I couldn’t see the room numbers. So, a museum staff member accompanied me around the museum and typed the room numbers for me. If there were an audio guide app that worked on visitors’ mobile phones and automatically detected the room numbers, The Beatles Story experience could be fully inclusive.

<!-- section:news -->
## News

### A Trump Team Wants To Automate U.S. Web Design System Accessibility Testing. Experts Are Worried

Source: [FedScoop](https://fedscoop.com/trump-team-automate-uswds-accessibility-testing-ai/)

Actually, this is not bad news in itself. Efforts to automate accessibility are, of course, valuable and the most logical thing to do to make processes sustainable. On the other hand, current technology in its basic configuration is not sufficient to ensure accessibility right from the start; you still have to prepare skill documents, and guide AI with the right prompts. This is why experts are worried. We all know that accessibility is not a primary concern for the Trump administration, and they might use these tools simply to speed things up. In short, 'automating as much accessibility testing as possible' can be a valid goal, if you acknowledge the risks and take necessary precautions.

### 90% Of TV Programs Must Become Accessible To People With Hearing And Vision Impairments

Source: [SUD](https://sud.ua/en/news/publication/372254-90-teleprohram-maiut-staty-dostupnymy-dlia-liudei-z-porushenniamy-slukhu-ta-zoru-shcho-chekaie-na-media)

An ambitious media accessibility rule has been proposed to the Ukrainian parliament to make 90% of audiovisual content accessible with subtitles, audio description, and sign language. There is a transition period that increases the accessible audiovisual content from 50% to 90%. Organizations must present a plan to the authority, backed by a monitoring mechanism, and penalties will be regulated according to the general media law. While this is a great rule foreseeing accessibility plans, monitoring, and penalties, media outlets are going through hard times due to war conditions, making implementation challenging. For this reason, this rule may not pass the parliament, in my opinion. Maybe classifying and prioritizing media content, for example news or governmental announcements, instead of setting a basic proportion like 50% or 90% could be more applicable and practical.

### Screen Reader User Survey #11 Results

Source: [WebAIM](https://webaim.org/projects/screenreadersurvey11/)

To learn more about the most commonly used screen readers and browsers, you can look at the results from the link. One of the most striking results for me is that in response to 'Which of the following do you think would have a bigger impact on improvements to web accessibility?', 83.9% of participants chose 'more accessible websites' rather than 'better assistive technology'. Also, more than 95% of participants are satisfied or somewhat satisfied with the screen reader they are using. Naturally, persons with disabilities want accessible products from the beginning rather than having to change their habits.

<!-- section:inspirations -->
## Inspirations

### #Corpowid And #Skynet Technologies Will Get You Sued

Source: [Adrian Roselli](https://adrianroselli.com/2026/09/corpowid-and-skynet-technologies-will-get-you-sued.html)

In his "… Will Get You Sued" series of articles, Adrian Roselli explains how accessibility overlays do not work. In this article, he highlights Corpowid’s and Skynet Technologies’ solutions and their WCAG violations. Sometimes, even the companies selling overlays cannot solve their own accessibility issues with overlays. That is why he advises: "Don’t use accessibility overlays. They do not work. If you want to install one to help users, keep reading. If you want to build one because you think it can help users, you’re kidding yourself."

### WCAG Process For Assigning Levels

Source: [Alastair Campbell](https://alastairc.uk/blog/2026/09/wcag-leveling-process/)

Let’s be honest: almost nobody seems to care about WCAG AAA. Since there is no legal regulation enforcing WCAG AAA compliance, every organization sets its accessibility target strictly at WCAG A or AA. This often renders AAA criteria 'redundant' in real-world applications. The W3C Accessibility Guidelines Working Group co-chair addressed these exact issues regarding WCAG levels, reminding us that assigning levels to criteria requires striking a balance between user needs, technical capability, design impact, and budget. He also highlighted that in WCAG 3.0, these levels will become more flexible and practical which might finally solve this 'redundant criteria' problem.

### The Dunning-Kruger Effect In Accessibility

Source: [Craig Abbott](https://www.craigabbott.co.uk/blog/2026/the-dunning-kruger-effect-in-accessibility/)

The Dunning-Kruger effect is overestimating your competence when you lack knowledge, and underestimating it when you have expertise. Linking this cognitive bias to accessibility is a brilliant idea. Craig Abbott outlines a 5-step accessibility journey, from over-relying on automated tools to accepting that accessibility will never be perfect. Also, this article provides a great framework for evaluating accessibility maturity levels.

<!-- section:in-detail -->
## In Detail: Accessibility Insights From England

To be honest, I went to England with high expectations for accessibility. However, when I returned, I had more questions in my mind than answers or examples.

- **Assistance vs. Independence:** To avoid any misunderstanding, let me state this first: independence does not mean doing everything completely on your own. It means having the freedom to decide when you want to ask for help. Therefore, assistance and independence are not conflicting concepts. However, the lack of accessibility arrangements at Manchester Airport forced me to use assistance services. Even if the assistance system works well, accessibility must still exist. Being forced to rely on assistance conflicts with personal independence. In many places across England, I saw well-developed assistance services, but incomplete accessibility.
- **The Spread of Accessibility:**  I had the chance to meet a disability organization working in Northern England and Wales. Based on what I learned from them and my own observations, accessibility in London is quite different from other cities. In Manchester and Liverpool, I did not see any audio traffic lights, tactile paving, or Braille for example.
- **Which Accessibility?:**  From what I observed, ramps and video content with British Sign Language are quite common. I joined the Everton Stadium tour and saw that they built quiet match-viewing rooms for neurodivergent individuals. On the other hand, accessibility efforts for blind people are really limited. In Turkey, the blind movement is strong in terms of advocacy, which made me truly curious about the situation in England.
- **Internalized Inclusion:**  Despite all the shortcomings, I was very happy throughout my entire trip and generally felt comfortable. The main reason for this was the warmth and ease of the people. Nobody tried to force help on me or grab my arm. Whenever I asked for help, everyone supported me genuinely and made me feel like an individual. An inclusive culture really compensates for accessibility gaps up to a certain point.
