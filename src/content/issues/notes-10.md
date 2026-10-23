---
title: "Notes # 10: Irony In Nepal, Audible Crawl Rule, IKEA Finland..."
number: 10
date: "2026-05-03"
description: "Nepal's inaccessible feedback process, the FCC audible crawl rule, IKEA Finland's pilot, and the most common Windows High Contrast Mode issues."
cover: "/images/notes-10-cover.jpg"
album: {"artist": "Metric", "title": "Romanticize The Dive", "url": "https://open.spotify.com/intl-tr/album/75oefoG5Cn2MbBc32uNPnu"}
linkedinUrl: "https://www.linkedin.com/pulse/notes-10-irony-nepal-audible-crawl-rule-ikea-finland-utku-demiryakan-puzif/"
personalNoteTitle: "Labour Day Barricades Through Partially Sighted Eyes"
inDetailTitle: "The Most Common Windows High Contrast Mode Incompatibilities"
inDetailSlug: "the-most-common-windows-high-contrast-mode-incompatibilities"
discussion: [{"context": "Most accessibility professionals say Windows High Contrast Mode issues don't fail WCAG 2.1. Utku believes they're still serious usability problems that need fixing.", "question": "Should high contrast support be a requirement, or is \"not a WCAG failure\" good enough?"}]
inspirationTopics: [["Design"], ["Design", "Development"], ["Legal & Standards"]]
newsDates: ["2026-04-30", "2026-04-30", "2026-04-28"]
---

<!-- section:personal-notes -->
## Personal Notes

May 1, Labour Day has a special meaning in Turkey. Because of the bloody 1 May 1977 and the current government’s stance, Taksim—the political and touristic center of Istanbul—and the surrounding districts are under heavy police control every year. Public transportation cannot be used, the roads leading to Taksim are closed, and police barricades block entrance of every street.

On this chaotic day, we decided to meet a friend in Osmanbey, a district near Taksim. We knew that the metro station in Osmanbey was out of service, so we had to walk 30 minutes from another station. We accepted this, but as a partially‑sighted couple we could not handle the chaos: we could not distinguish the grey police barricades or see where the officers were standing. We could not distinguish which streets were closed or which route to take. Naturally, Google Maps also failed to show the blocked roads. Occasionally, police allowed us to slip through a small gap between barricades, and after a 1-hour walk we finally reached our destination.

I can not imagine what a wheelchair user would experience in such a situation. In summary, we experienced that “crises” like this or political occurrences disproportionately affect people with disabilities.

<!-- section:news -->
## News

### Government Invites Feedback On Disability Law Online, But Target Group Is Locked Out

Source: [The Kathmandu Post](https://kathmandupost.com/national/2026/04/30/government-invites-feedback-on-disability-law-online-but-target-group-is-locked-out)

In Nepal, the Ministry of Women, Children and Senior Citizens published a public notice inviting feedback on a draft amendment to the Act Relating to the Rights of Persons with Disabilities. However, the notice document is not accessible to assistive technologies because it is an image‑based file, so screen readers can not read its content. Unfortunately, we experienced the same problem last year in Turkey. Our Ministry of Family and Social Services issued a directive making website and app accessibility mandatory, but the PDF document was also image‑based and inaccessible. As Nepal and Turkey, we are trying to take action, but I do not know whether the government truly understands the essence of inclusion. Enacting legal regulations without a cultural shift causes such ironies.

### FCC Proposes To Amend Audible Crawl Rule To Preserve Accessibility

Source: [TV Technologies](https://www.tvtechnology.com/regulatory-legal/fcc-proposes-to-amend-audible-crawl-rule-to-preserve-accessibility)

“The Audible Crawl Rule requires the use of a secondary audio stream to convey televised emergency information aurally when such information is conveyed visually (e.g., in an on-screen text crawl or a small image, like a weather radar map), so that it is accessible to people who are blind or visually impaired. The rule was adopted on April 8, 2013, with an original effective date of May 26, 2015, but has been waived and delayed “to the present day because a technical solution for automated descriptions of the information in such graphics does not exist,” the National Association of Broadcasters said. And in April, the implementation of the rule was delayed once again until 2027.” It seems interesting to me that no technical solution was developed for 14 years. I would have expected the rule to become applicable with some additional guidances or a technical solution to be developed.

### IKEA Finland Pilot Connects Digital And Physical Accessibility

Source: [INGKA](https://www.ingka.com/newsroom/from-screen-to-store-ikea-finland-pilot-connects-digital-and-physical-accessibility/)

In a large store, moving around and finding the product you want is very challenging for the blind and partially‑sighted. IKEA has launched a pilot project in Finland to overcome these challenges. With colorful QR codes provided by NaviLens, visually impaired customers can receive audio guidance about locations and product areas by scanning the codes placed throughout the store. IKEA supports its partnership with NaviLens through an assisted‑shopping service. Customers can pre‑book a 90‑minute visit which a trained co‑worker accompanies them. Generally, organizations implement only one accessibility solution and then claim “we did it,” but IKEA combines the power of digital technologies with personal assistance. Digital solutions are not a replacement for humans; they are generally just supportive elements.

<!-- section:inspirations -->
## Inspirations

### Is This Really Needed?

Source: [Alan](https://alan.com/en/blog/healthy-business/a/is-this-really-needed)

To make a product understandable and usable for everyone, eliminating cognitive overload is essential. That’s why I am trying to learn about minimalist design. In that sense, the “Remove before you add” principle mentioned in the article seems like a good recommendation.

> “A new setting adds a decision the user didn’t ask to make, a new screen introduces a path that needs to be learned, and a new component means one more thing to maintain, document, and keep consistent across the product.”

### Session Timeouts: The Overlooked Accessibility Barrier In Authentication Design

Source: [Smashing Magazine](https://www.smashingmagazine.com/2026/04/session-timeouts-accessibility-barrier-authentication-design/)

Session timeouts are one of the most challenging accessibility issues. A poorly designed timeout function creates critical barriers for various disability groups, including motor, visual, and cognitive impairments. In the article, design patterns such as an advance‑warning system, extend functionality, auto‑save, and progress preservation are explained and exemplified.

### Do Issues With Windows High Contrast Mode Fall Under WCAG 2.1?

Source: [GitHub](https://github.com/w3c/wcag/issues/623)

Short answer: While there is no agreed‑upon answer, most professionals consider that issues with Windows High Contrast Mode do not violate WCAG 2.1. On the other hand, it is an important usability problem that should be fixed. For me, Windows High Contrast Mode is like a screen reader. I use it in my daily tasks and on every website because bright backgrounds really disturb my eyes. But, incompatibility with Windows High Contrast Mode force me to change my settings each time - you can see the examples of some issues below. In my opinion, Windows High Contrast Mode can be treated as an assistive technology, and a digital product’s compatibility with different color modes should be within the scope of WCAG (maybe in WCAG 3).

<!-- section:in-detail -->
## In Detail: The Most Common Windows High Contrast Mode Incompatibilities

- **Selected (?) Radio Buttons:** On most web pages it’s impossible to tell whether radio buttons are selected. In the example below, the “One Way” option is marked, but this can not be seen visually when High Contrast Mode is turned on.

![Two radio buttons side by side in a black background. Selection areas are empty in both of them.](/images/notes-10-1.png)

- **Invisible Icon‑Buttons:** Hamburger‑menu icons, the “X” symbols used to close pop‑ups, and similar icon buttons can become invisible due to low contrast. Because I couldn’t see the hamburger menu, I mistakenly thought the site was a single‑page site most of the time.

![A hamburger menu icon in the header](/images/notes-10-2.png)

![A black header. Nothing can be seen.](/images/notes-10-3.png)

- **Datepickers:** Just like radio buttons, most calendars do not make it clear which date is selected. In the example below, May 4 and May 6 are actually selected, but this isn’t visible. Google Flights’ design is a very good example here.

![A table-like calendar. Each day seems like the same.](/images/notes-10-4.png)

![A table-like calendar. 3 May and 6 May is marked with a circle](/images/notes-10-5.png)

- **Selected (?) Tabs:** Determining which tab is active becomes impossible in situations like the one shown below.

![There are three tabs under "Plan Your Trip" header. Tabs are Flights, Hotels and Airbnb and Cars. We do not know which one is selected.](/images/notes-10-6.png)

- **Buttons Without Borders:** Missing button borders are a common issue like in Spotify’s cookie‑accept banner. Although it doesn’t severely affect functionality, floating‑in‑the‑air buttons are not a great user experience.

![There are three options: Accept, decline and manage. But there are no borders around the buttons.](/images/notes-10-7.png)
