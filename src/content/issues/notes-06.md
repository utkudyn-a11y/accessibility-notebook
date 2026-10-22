---
title: "Notes # 6: AppleVis, Digital Accessibility In Nigeria, Section 508 Compliance..."
number: 6
date: "2026-03-30"
description: "A weekend in Kiel, the AppleVis 2025 Report Card, government websites in Nigeria and the US, and a closer look at WCAG 3 assertions."
cover: "/images/notes-06-cover.jpg"
album: {"artist": "Charif Megarbane, Ali", "title": "Tirakat", "url": "https://open.spotify.com/intl-tr/album/4FiEX8kdgko6dZkaYzqeqs"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-6-applevis-digital-accessibility-nigeria-508-utku-demiryakan-owdff/"
personalNoteTitle: "Kiel on Foot: Tactile Paving, Silent Traffic Lights and Cyclists"
inDetailTitle: "What Are Assertions?"
inDetailSlug: "what-are-assertions"
---

<!-- section:personal-notes -->
## Personal Notes

On the last weekend, I was in Kiel, a small German city close to Hamburg. Interestingly, the weather was sunny and warm—warmer than Istanbul. So, I had the opportunity to walk around the city, go to the seaside, and see the port of Kiel. The walkways are generally accessible. I saw many people with wheelchairs and walkers. There are tactile pavings and audible traffic lights in the city centre, but you cannot see accessibility regulations for the blind in the different parts of the city. Some audible traffic lights are not working – FYI, Kiel Municipality.

There are also many cyclists around the city, which can be a nightmare for blind and low‑vision pedestrians. They move silently and quickly, so as a visually impaired person I couldn’t tell whether a bike is coming or not. This was a stressful situation for me, especially while I was walking alone. I completely understand the value of micromobility and respect the concept, but there should be further accessibility regulations for pedestrians.

<!-- section:news -->
## News

### Apple Vision Accessibility: The 2025 AppleVis Report Card

Source: [AppleVis](https://www.applevis.com/blog/apple-vision-accessibility-2025-applevis-report-card)

As a community‑driven study, the Apple Vision Accessibility Report Card has been prepared to give users a voice and to present information to Apple on accessibility features for the blind, low‑vision, and deaf‑blind. This year’s survey results indicate that, across almost all categories, satisfaction with Apple’s accessibility offerings decreased compared with 2024. Many categories received their lowest individual ratings since the beginning of this survey. I am not an Apple user, but I know how Liquid Glass reduces contrast and negatively impacts the experience of low‑vision users. As I saw in the comments section of the survey, even when you activate dark mode, the transparent effects of Liquid Glass remain in system apps such as the keyboard. Lastly, for me, one of the most striking point of the survey: “Many participants called on Apple to prioritize fixing bugs over adding new features.”

### FIJ Tested 4 Govt Disability Agency Websites for PWD Accessibility. We Found Barriers

Source: [FIJ](https://fij.ng/article/fij-tested-4-govt-disability-agency-websites-for-pwd-accessibility-we-found-barriers/)

In Nigeria, government websites should be accessible in accordance with guidelines issued by the national agency. However, a journalism foundation tested disability‑related websites and found that the regulations are not being applied. The foundation used Google Lighthouse and WAVE automation to detect issues and obtain scores. Regarding the methodology, the article does not present anything particularly different or inspiring. The important point is that the foundation conducted the study. They are not solely a disability‑focused organization, their main focus is journalism. So, seeing an accessibility study from a non‑disability organization makes me happy.

### Government Tech Largely Falls Short On Accessibility Requirements, GSA Finds

Source: [Fedscoop](https://fedscoop.com/government-tech-largely-falls-short-on-accessibility-requirements-gsa-finds/)

The General Services Administration (GSA) is an independent agency that supports federal agencies in the United States. GSA recently published a report on federal agencies’ Section 508 compliance status and found that the alignment score is 1.96 on a 5‑point scale. This low rating stems from a lack of usability testing, infrequent accessibility audits, and insufficient accessibility checks before deploying resources to websites. As a result, compliance is inconsistent. GSA recommends incorporating accessibility into risk‑management systems, defining concrete compliance metrics, and mainstreaming accessibility in the procurement process. Additionally, Section 508 compliance should be clarified and made stricter by Congress.

<!-- section:inspirations -->
## Inspirations

### Your Browser Can Already Speak a Page

Source: [Adrian Roselli](https://adrianroselli.com/2026/03/your-browser-can-already-speak-a-page.html)

Most of the features offered by accessibility overlays can be controlled through system settings or browsers, so many accessibility specialists argue that investing in these kinds of extensions is unnecessary. In his blog, Adrian Roselli explains how a browser’s reading mode can be used as an embedded screen reader—one of the most commonly used features of accessibility overlays.

### Every Jira Ticket Is Your Accessibility Policy

Source: [Accessibility NYC - YouTube](https://www.youtube.com/watch?v=DmD6ITUMExI&t=33s)

A talk with concrete messages by Charlie Triplett: “You can’t change the way people think. All you can do is give them a tool.” So, we can use Jira tickets and acceptance criteria to get people to think about accessibility. In the talk, many examples show how accessibility can be integrated into Jira tickets. Sometimes, when we focus too much on “organizational culture” and “inclusivity” concepts, it feels like we’re talking about nothing to me. That’s why I love talks that concentrate on real, practical tools.

### What I Like About WCAG 3.0

Source: [Karl Groves](https://afixt.com/what-i-like-about-wcag-3-0/)

Karl Groves wrote a review of WCAG 3. While many issues are still missing, we now have a sense of the direction it’s heading. In the article, the framing of success criteria as outcome statements, the emphasis on assertions and process, the coverage of cognitive accessibility, and the conformance model are highlighted as positive features. You can read this piece before diving into WCAG 3 as a useful starting point to get a quick glance at what’s happening.

<!-- section:in-detail -->
## In Detail: What Are Assertions?

In WCAG 3, some guidelines will not only cover requirements but also include the methods and procedures necessary for development and for making accessibility sustainable. These methods and procedures are called assertions. In his blog, Karl Groves defined assertions as “the most interesting and the most controversial idea in WCAG 3”. They are controversial because we do not yet know how an organization can document them or how assertions can be verified.

Even though there is a documentation and verification problem, some assertions can still be used as guidance for organizations. For example, the assertions in the Media Alternatives guideline describe clear steps. According to it, an organization should publish a media‑alternative style guide that specifies its policies for audio description, transcription, closed captioning, and sign‑language‑supported media. It should also address the accessibility of the video player. Since video players can be third‑party components, this is not included as a success criterion but as an assertion. Finally, the organization should state that alternative media (e.g., audio‑described video content) have been tested and reviewed by users and content authors.

Many of the assertions are about cognitive accessibility criteria. The test procedures for criteria related to clarity of page structure, plain language, error prevention, and consistency can be somewhat ambiguous. Here, with the assertions an organization can and should declare it has reviewed aspects such as the understandability of error messages or the structure of the page with users or guidance on related criteria. This creates an additional checkpoint for cognitive accessibility criteria.

In short, it is a good point that assertions focus on a process, emphasize the importance of user experience, and add additional checkpoints to hard-to-test criteria. Placing the assertions on the organization’s accessibility statement page can also solve the documentation problem. However, alongside all of this, the most important issue is the implementation of assertions by organizations, and I think this is somewhat difficult. In its current form, it appears to be an overwhelming process for organizations. Additional documentation is needed, such as the questions that could be asked during user reviews and what could be reviewed in internal review processes. Moreover, the distinction between the existing criteria and the assertions needs to be clarified. For example, it is not clear why we should assert separately if we already comply with the time‑limit success criteria. Situations like this create confusion. It may be early to say this, but the assertions could also be presented in a more compact and simple manner. For instance, grouping the assertions related to cognitive accessibility together could speed up the review process.
