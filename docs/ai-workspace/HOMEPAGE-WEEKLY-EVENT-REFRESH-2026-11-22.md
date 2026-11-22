# Homepage weekly-event refresh — 2026-11-22

## Decision

Replace the expired G-STAR 19–22 November homepage card in EN, JA and zh-TW with a direct entry to the already-prepared weekly guide for 23–29 November 2026. Keep the existing Haeundae Light Festival and Gwangbok-ro event cards. Refresh the section's checked date to 22 November.

This is a homepage discovery improvement, not a new event article or a change to the weekly guide's facts.

## Community signals

- Taiwan Dcard, [Busan free-travel report: Gwangalli food, shopping and drone show](https://www.dcard.tw/f/korea_travel/p/261529484): the public page shows 10K+ views, 53 reactions and 2 comments. The visible page does not expose a reliable publication date. The author describes spending a full day around Gwangalli and arriving early for the drone show; they observed a busy beach, road traffic and police traffic control. This is one travel account, not a crowd forecast or demand-volume estimate.
- Japan 4travel, [first Busan family trip, 29 September–2 October 2026](https://4travel.jp/travelogue/12078008): a recent family itinerary covering Haeundae and central Busan. It supports the usefulness of area-based planning but is not evidence about the 28 November show.
- English Reddit, [Free Luggage Storage in Busan?](https://www.reddit.com/r/BusanTravelTips/comments/1vt6ati/free_luggage_storage_in_busan/), 20 August 2026: one low-engagement post lists free same-day storage options and recommends calling because capacity may fill. This is already addressed in the existing luggage guide; no duplicate page or new luggage claims were added.
- Korean public search surfaced a Clien post on the Busan–Gimhae Light Rail tagless pilot (17 November 2026), already reflected in the separate transit-card work. No new event-specific public post from TheQoo, Ppomppu or an accessible Naver result was sufficiently verifiable in this pass. No login or access-control bypass was attempted.
- A PTT first-trip group-planning question (31 January 2026) and a 23 July 2026 Seoul–Busan transport question remain useful context for group travel and luggage planning, but their subjects are already covered by existing first-trip, transit and luggage guides. They do not justify another URL.

## Official verification

Busan Metropolitan City’s multilingual notice, published 11 November 2026, confirms the Gwangalli M Drone Light Show programme for Saturday 28 November:
- 19:00 and 21:00 winter sessions; approximately 12 minutes each.
- Free admission at Gwangalli Beach.
- The 28 November theme is listed as “Avengers: Doomsday in Gwangalli”.
- Weather, wind, typhoon or technical conditions can cause cancellation or delay, including notice on the day.

Sources:
- [Busan City — English, November 2026 schedule](https://www.busan.go.kr/eng/bsnews01/1763224)
- [Busan City — Japanese, November 2026 schedule](https://www.busan.go.kr/jpn/bsnews01/1763230)
- [Busan City — Traditional Chinese, November 2026 schedule](https://www.busan.go.kr/zht/bsnews01/1763234)
- [Official event organiser](https://www.gwangallimdrone.co.kr/en/home)

The linked weekly guide contains the full six-item list, localized detail, official venue links and day-of-visit caveats. The homepage card does not repeat volatile prices or opening hours.

## Changed pages

- EN: `index.html`
- JA: `ja/index.html`
- zh-TW: `zh-tw/index.html`

## Before / after

- Before: homepage event card still promoted G-STAR, whose listed run ended 22 November.
- After: the card promotes “This Week in Busan” / localized equivalents for 23–29 November and links to the matching language page:
  - `/guides/this-week-in-busan/`
  - `/ja/guides/this-week-in-busan/`
  - `/zh-tw/guides/this-week-in-busan/`
- The seasonal section's checked date changes from 19 to 22 November 2026.
- The Japanese and Traditional Chinese homepage calendar links now point to Busan City's matching `/jpn/bsevents` and `/zht/bsevents` calendars instead of sending those audiences to the English calendar.
- The BEXCO image reference is removed from this homepage card and its visible credit line. The card uses the existing registered Gwangalli Beach and Gwangan Bridge photograph by Masterhatch (CC BY-SA 4.0, commercial use verified). Its alt text explicitly says it is a location image, not a photograph of the drone show. No image file or image-credit registry entry changed.

## SEO and user-value hypothesis

A visitor arriving after 22 November should no longer encounter a finished event as the third “what's happening next” item. The homepage now gives a clear route into the weekly guide, which clusters six current options by area and identifies official pages, hours and prices. The Dcard account suggests Gwangalli can be a full-day neighborhood visit and that traffic can be busy around the show; the card links visitors to the fuller plan rather than making an unsupported crowd or travel-time promise.

## QA and release boundary

- Exact old card was found once in each localized homepage before replacement.
- Localized weekly-guide destinations were confirmed to exist on the same Draft PR branch.
- Official multilingual event dates and showtimes were checked on 22 November 2026.
- The existing homepage image is registered and its commercial-use license is recorded; no unverified image was introduced.
- CI for the new homepage commits is pending.
- Browser visual review at 360 / 390 / 1280 px, image crop review and live-page verification of this new branch have not been performed. Do not report them as passed.
- PR #645 remains Draft. No merge, Render deployment, GA4/GSC query, affiliate-link change, SNS post or scheduling change was made.
