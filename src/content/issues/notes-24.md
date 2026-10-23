---
title: "Notes # 24: What Changed In EN 301 549 Version 4.1.1?"
number: 24
date: "2026-09-08"
description: "What changed in EN 301 549 version 4.1.1, plus a graphic novel about ULIS classes, Access100, and La Liga's web accessibility table."
cover: "/images/notes-24-cover.jpg"
album: {"artist": "The Linda Lindas", "title": "GOTTA GET OUT", "url": "https://open.spotify.com/intl-tr/album/3mzfWcRxRWAstm92UwJ9td"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-24-what-changed-en-301-549-version-411-utku-demiryakan-ifycf/"
personalNoteTitle: "Why I Recommend the Graphic Novel ULIS"
inDetailTitle: "What Changed In EN 301 549 Version 4.1.1?"
inDetailSlug: "what-changed-in-en-301-549-version-4-1-1"
discussion: [{"context": "AAArdvark argues that Lighthouse or axe scores are misleading, but that a score that includes manual testing can work as a progress indicator.", "question": "Can accessibility be measured with a single number, or does any score oversimplify it?", "options": ["A single number works", "Any score oversimplifies it", "A score, but always with a detailed report"], "from": "inspiration-2"}]
inspirationTopics: [["Design"], ["Testing", "Strategy"], ["Testing"]]
newsDates: [null, "2026-08-27", "2026-08-17"]
pledges: [{"role": "Design & Content", "text": "I will look beyond contrast ratios when I choose colors", "from": "inspiration-1"}]
---

<!-- section:personal-notes -->
## Personal Notes

Last week, I read a graphic novel by Fabien Toulmé titled *ULIS* . ULIS classes support the special needs of students with disabilities in mainstream schools in France. The book takes place in a ULIS classroom and tells the story of support personnel and students. In the book, you can clearly see societal stereotypes against disability, how educational support mechanisms fall short, and discriminatory practices, even by the students’ own families. In this challenging atmosphere, even a small caring action changes a lot in the world of students. *ULIS*  reminded me once again why I am working in the field of accessibility.

Yes, this is a digital accessibility newsletter, but at its essence, we are working with persons with disabilities—directly or indirectly. So, we all need to understand what is happening in society. That’s why I want to recommend *ULIS* .

<!-- section:news -->
## News

### Access100: Not Promises. Working Products

Source: [Access100](https://access100.day/en)

With 100 days to go until December 3, [Binclusive](https://www.linkedin.com/company/binclusive/) has launched a movement. As part of Access100, instead of making promises, launching single-day ad campaigns, or releasing statements that will be forgotten throughout the year, "we are coming together to make 100 applications and 100 videos accessible by December 3." This is an action-oriented movement aimed at creating a concrete impact. And the good news: there is still time to join. You can find more details via the link above.

### Understanding EN 301 549 Version 4.1

Source: [Vispero](https://vispero.com/resources/state-of-accessibility-understanding-en301549-version-4-1/)

The new draft version of the harmonized European accessibility standard has been published. While EN 301 549 version 3.2.1 is currently in place, version 4.1.1 is expected in November. For now, we have access to the draft for version 4.1.1. As expected, it sets WCAG 2.2 AA as the conformance target for websites and mobile apps to align with EAA compliance. The annexes have also been slightly updated. In Annex A, you can now find more direct references to the European Accessibility Act, specifying which clauses apply to different ICT categories for conformance. For the other changes, you can look at the “In Detail” section.

### AI Reviews Changes In Federal Regulations

Source: [Converge Accessibility](https://convergeaccessibility.com/2026/08/17/ai-reviews-changes-in-federal-regulations/)

Over the past few months, we saw the deadlines for ADA Title II and Section 504 digital accessibility regulations being postponed. In this article, Ken Nakata explores whether this is a trend or not. Nakata's AI-backed analysis shows that instead of canceling laws directly, government agencies are removing official guidance, constantly delaying compliance dates, and pausing enforcement. By relaxing standards under the excuse of "reducing burdens" and cutting protections against indirect discrimination, the government is making accessibility rules far less effective—even if the laws technically remain on the books.

<!-- section:inspirations -->
## Inspirations

### Accessible Color Choices Are About So Much More Than Just Contrast

Source: [Access Ability](https://buttondown.com/access-ability/archive/accessible-color-choices-are-about-so-much-more/)

This is the most detailed and practical article on color accessibility that I have ever read. Color accessibility is about more than just calculating contrast ratios. People with glaucoma, autistics, or people who suffer from migraines experience colors, hues, and saturation differently than those with standard vision. Even I do not mention color blindness. That is why a correct contrast ratio alone will not solve all of our problems. Extremely high contrast ratios (e.g., pure white on pure black) or bright red can have an adverse impact on different sensory perceptions. Read this article to learn how to create truly accessible color sets.

### I Spent Years Refusing To Build An Accessibility Score

Source: [Aaardvark](https://aaardvarkaccessibility.com/i-spent-years-refusing-to-build-an-accessibility-score/)

We all know that Lighthouse or axe scores cannot be used as proof of compliance or usability. The coverage of automated tests is limited, which often results in misleading scores. In this article, [AAArdvark](https://www.linkedin.com/company/aaardvarkaccessibility/)’s scoring system feels like a logical alternative because it incorporates manual testing into the score calculation. Furthermore, continuous score updates provide a framework for mainstreaming accessibility into workflows and keeping it on the team's agenda. I really like the mindset of treating a "score as a progress indicator rather than a compliance target.”

### La Liga's Web Accessibility Table: How Do Clubs Actually Score?

Source: [Alvaro Montoro](https://alvaromontoro.com/blog/68112/la-liga-accessibility)

I love football, so I love the idea behind this article. Given how highly competitive the Super League in Turkey is, we have to replicate this study here as well. Furthermore, the methodology used seems very logical to me. Normally, these kinds of studies are conducted using only automated tests, but Alvaro Montoro places greater weight on manual testing and introduces a clear scoring framework. He also incorporates automation results, along with the performance and structure of the website. This article is a real inspiration for me to create an accessibility scoring framework.

<!-- section:in-detail -->
## In Detail: What Changed In EN 301 549 Version 4.1.1?

Of course, I did not read and compare version 3.2.1 and version 4.1.1 myself. My friend Claude created a detailed change history for me, as shown below. I checked the result and made a few edits. I think we got a correct result. Here you go.

EN 301 549 v4.1.1 brings the standard in line with WCAG 2.2 and, more significantly, was revised specifically to bring it into alignment with the European Accessibility Act (Directive (EU) 2019/882). Here are the whole changes:

- **WCAG alignment** : Web, non-web document, and non-web software requirements (clauses 9, 10, 11) now reflect WCAG 2.2 instead of 2.1 — supporting both the EAA and the Web Accessibility Directive.
- **EAA coverage** : The standard now formally supports the EAA itself, not just the Web Accessibility Directive, with new conformity-evaluation tables added specifically for this purpose (Annex ZB, clause A.2).
- **Real-Time Text expansion** : RTT support gained new technical requirements (clause 6.2), tied to the EAA's requirement for electronic communications services (Annex I).
- **Total Conversation** : Combining voice, text, and video moved from a passing informative mention to a fully normative requirement (clause 6.7) — "total conversation" is named explicitly in the EAA text for electronic communications services.
- **Emergency communication** : Deepened with new scenarios covering roaming and cross-border use (clause 6.0), fulfilling the EAA's requirement for synchronized emergency communications to reach the appropriate emergency call center (PSAP).
- **Hardware contrast** : Hardware must now meet a minimum visual contrast standard (clause 8.8), required by the EAA's general product accessibility requirements.
- **Kiosk/stationary ICT ergonomics** : Precise new rules for screen height and control placement (clause 8.3), fulfilling the EAA's requirement to avoid operation modes needing excessive reach or strength.
- **Closed functionality** : Must now expose the purpose of input fields (clause 5.1.8), supporting the EAA's general requirement for multi-sensory product access.
- **User preferences** : Web pages and non-web documents themselves must now respect platform-level accessibility preferences (clauses 9.7 and 10.7), fulfilling the EAA's service-level requirement for adjustable font size, contrast, and spacing.
- **Electronic Programme Guides** : A brand-new scope area (clauses 12.4 and 12.5), added because the EAA explicitly requires EPGs for audiovisual media services to be accessible and to surface accessibility information like subtitles and audio description.
