---
title: "Notes # 23: Am I Disabled Or A Robot?"
number: 23
date: "2026-08-31"
description: "Am I disabled or a robot? CAPTCHAs in visa appointments, Estonia's 112 deadline, sign language AI, and what W3C says about CAPTCHAs."
cover: "/images/notes-23-cover.jpg"
album: {"artist": "Jorja Smith", "title": "What Are The Odds", "url": "https://open.spotify.com/intl-tr/album/53Rf76kJAhJNtyrxLgKTRa"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-23-am-i-disabled-robot-utku-demiryakan-j6xlf/"
personalNoteTitle: "A CAPTCHA I Can't See: Booking a Schengen Visa Appointment"
inDetailTitle: "Bonus: What W3C Says on CAPTCHAs?"
inDetailSlug: "what-w3c-says-on-captchas"
discussion: [{"context": "At almost every step of booking a Schengen visa appointment, Utku is shown a light gray CAPTCHA on a white background that he simply can't read. W3C has long warned that traditional CAPTCHAs lock out many people with disabilities.", "question": "Should CAPTCHAs be banned from public services? What would you use instead?", "options": ["Ban them and use invisible bot checks", "Keep them only with an equally easy alternative", "Keep them as they are"], "from": "personal-notes"}, {"context": "Utku's design team sometimes can't agree on colors because WCAG's contrast formula doesn't match real human perception.", "question": "Should we wait for APCA in WCAG 3, or keep following the current rule even when it feels wrong?", "options": ["Wait for APCA", "Keep following the current rule", "Use both side by side"], "from": "inspiration-1"}]
inspirationTopics: [["Legal & Standards", "Design"], ["Resources", "Strategy"], ["Testing"]]
newsDates: ["2026-08-21", "2026-08-14", "2026-08-12"]
pledges: [{"role": "Testing", "text": "I will test every flow with a keyboard, not only with tools", "from": "inspiration-3"}, {"role": "Product", "text": "I will never add a CAPTCHA without an equally easy alternative", "from": "in-detail"}]
---

<!-- section:personal-notes -->
## Personal Notes

Let me tell you the least accessible process in the world: Visa Application. I am trying to book an appointment for a Schengen visa for Spain. The process is operated by [BLS International](https://www.linkedin.com/company/blsintservices/). I will not mention screen reader accessibility issues, time-consuming procedures, or cognitive overload. I just want to show you a screenshot.

![A CAPTCHA page asking to select the number 781. There are 9 boxes with different colors](/images/notes-23-1.png)

I am partially sighted and I cannot see colors very well. My contrast perception is horrible. So, why are you expecting me to see light gray '781' on a white background? I come across this CAPTCHA verification at almost every step. I don’t want to struggle with it, dear Spain. Not having 'normal' vision does not mean I am a robot.

<!-- section:news -->
## News

### Estonia Pushes 112 Accessibility Deadline To 2027 As Service Falls Short

Source: [ERR News](https://news.err.ee/1610116087/estonia-pushes-112-accessibility-deadline-to-2027-as-service-falls-short)

In terms of the accessibility of 112 emergency call services, video calling is a need for the sign language-speaking Deaf community. Also, Real-Time Text technology provides more instant and accurate service compared to SMS for persons who prefer texting to speaking, which is mainly beneficial for people with speech disabilities and the hard-of-hearing community. These accessibility regulations were introduced into law under the European Accessibility Act in 2022. However, Estonia could not meet the 2025 deadline and stated that 112 services will become fully accessible in 2027.

### Purdue Launches New Accessibility App That Converts Handwritten Text To Compliant HTML

Source: [Purdue University](https://www.purdue.edu/online/purdue-launches-new-accessibility-app-that-converts-handwritten-text-to-compliant-html/)

Professors from Purdue University developed the Ink2html app to convert handwritten text into an accessible HTML document with the help of AI. The article gives details about the project and AI implementation. This is a very simple and effective solution that a university can apply for disabled students in the AI era. This kind of Ink2html project can also be beneficial for ADA Title II compliance for governments, because they also have many inaccessible images and documents in their websites.

### Putting Sign Language AI Into Users’ Hands

Source: [Google Deepmind](https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/)

Google has introduced a sign-language-to-text (SL2T) translation model that powers sign-to-text dictation in Gboard and Live Transcribe on Pixel 11 with American Sign Language (ASL) to English. More devices are coming soon, and additional languages will follow. In the blog article, I highly recommend that you read the “Why Sign Language Matters” part. This is a great summary of sign language’s importance and its differences with spoken languages. The Google team explains the challenges of AI work on sign language very clearly in that part as well.

<!-- section:inspirations -->
## Inspirations

### WCAG Contrast Rule vs. APCA

Source: [Kevin Muldoon - LinkedIn](https://www.linkedin.com/posts/kevinrmuldoon_the-black-text-passes-wcag-contrast-requirements-share-7491940048896962560-qo0G/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACNeAkkBcEc_-Y5MlRtwUtGLQxeFyCE5cow)

As an accessibility specialist, I am working closely with the design team in our organization. Sometimes we cannot find a common ground just because of WCAG contrast rules that are different from real human perception. WCAG is not applicable in some cases, as can be seen in the example in the LinkedIn post that I linked above. Therefore, I am looking forward to APCA being implemented in WCAG 3.

### Accessibility Remediation Estimator

Source: [Inclusion Impact](https://inclusionimpact.co/accessibility-remediation-estimator/)

A very simple tool to answer “How long will it take to make my product accessible?”. It depends on the number of pages, the average number of issues per page, the number of developers working on accessibility and their estimated effort, and the average time spent on an issue. I just wanted to insert a number less than 1 for the “hours for remediation for an issue” question, but it is not possible yet.

### Does This Menu Work With Keyboard? The Surprising Number Of Big Brands That Fail

Source: [Chris Young](https://a11yblog.com/2026/08/18/does-this-menu-work-with-keyboard-the-surprising-number-of-big-brands-that-fail/)

Chris Young clearly exemplifies visible focus and focus order criteria with videos in the article. The number of issues also surprised me, by the way. Why is this happening? 'Only 5% of Frontend jobs mention WCAG, we have an issue.'

<!-- section:in-detail -->
## Bonus: What W3C Says on CAPTCHAs?

Source: [W3C](https://www.w3.org/TR/turingtest/)

CAPTCHAs are designed to keep automated bots away from websites, but traditional tests create major barriers for people with disabilities. Many sites ask users to read blurry text or click specific images, which is extremely difficult or impossible for people who are blind or visually impaired. Audio alternatives are often suggested as a fallback, but these do not work for users who are deaf or hard of hearing. Furthermore, complex logic puzzles and strict time limits add extra stress for people with cognitive or learning disabilities. As security systems make these tests even harder to stop smart bots, they end up locking out real human users who simply interact with technology differently.

To fix this problem, modern websites are moving away from interactive puzzles and switching to invisible security methods. Instead of forcing users to solve a test, new systems work quietly in the background to check if a visitor behaves like a real person. For example, a website can look at simple patterns, like how a mouse moves or how pages are clicked, without asking the user to do anything extra. Other approaches let users prove their identity just once through their device or browser, using secure digital keys that automatically confirm they are human. By taking the pressure off the user and handling verification behind the scenes, websites can stay safe from bots while remaining completely easy and accessible for everyone.
