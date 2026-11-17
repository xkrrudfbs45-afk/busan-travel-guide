# First-trip checklist UX research — 2026-11-17

**Decision:** Improve the three existing first-trip guides instead of creating another checklist URL. Add a lightweight, multilingual checklist that remembers checked items in the current browser only.

## Competitor benchmark

- Busan 101's [first-day guide](https://www.busan101.com/en/arrival/) puts airport-to-hotel transport, transit card, mobile data and apps in the order a visitor needs them. Its [trip checklist](https://www.busan101.com/en/trip-checklist/) is tickable and saves progress on the device. The [Essentials hub](https://www.busan101.com/en/guides/) makes these utilities easy to discover.
- [BusanGuide.app](https://busanguide.app/en/) combines 3–6 day routes, an offline-readable guide, a five-step pre-departure checklist, nearby discovery and a Visit Busan Pass calculator. We are adopting the small checklist interaction, not its wording, page structure or commercial links.

## Community signals checked

- Taiwan Dcard, 2026-10 early, [four-day / three-night Busan trip report](https://www.dcard.tw/f/korea_travel/p/262264413): the traveller describes a steep Gamcheon route, crowding and afternoon sun at Huinnyeoul, a long queue and sold-out Beach Train despite holding a Pass, and walking the coastal path as a fallback. This is one trip report, not a general crowd forecast.
- English Reddit, 2026-10-24, [Busan November trip / sold-out Sky Capsule discussion](https://www.reddit.com/r/koreatravel/comments/1xdxvop/busan_november_711/): the visitor was unable to find the preferred booking online and asked about sharing a booked capsule. A small discussion, not a demand estimate.
- Japanese 4travel, 2026-09-18 to 2026-09-21, [Haeundae and Gwangalli trip report](https://4travel.jp/travelogue/12075164): the writer notes a typhoon-related flight cancellation and did not ride the capsule. It reinforces the need to leave schedule flexibility, not a fixed weather rule.
- Japanese Yahoo!知恵袋, 2026-07-13, [Sky Capsule fare / ticket-type question](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13329707553): one visitor was unsure whether a displayed price referred to a one-way ride or a package. Do not generalize this into a universal pricing problem.
- Korean Theqoo, 2026-01-18, [one-way capsule vs package itinerary question](https://theqoo.net/travel/4065623296): the poster compared a capsule-only trip with a package that could take more than three hours if stopping at every Beach Train station. Four replies; a useful planning question, not current ticket policy.
- Korean Clien, 2026-11-11, [Busan sea-taxi trial discussion](https://www.clien.net/service/board/park/19290927): two comments debated route utility and connections. Not relevant to the checklist feature; retained as a signal for a separate future transport review.
- PTT's surfaced Haeundae / Pass posts were from 2023–2024, so they were treated as historical context only. Naver Blog was blocked by robots.txt in this search; no bypass was attempted. No relevant current Ppomppu or YouTube public result was verified in this pass.

## Product change

- Replace the static EN checklist and the existing JA / zh-TW arrival lists with the same eight task IDs, naturally localized in each language.
- Add local-browser persistence, visible completion count, progress bar and reset action.
- Keep the checklist readable without JavaScript. If browser storage is blocked, checkmarks work for the open page only and the interface explains the limitation.
- Share the same storage key across the three language versions so a visitor can switch language without losing progress on the same browser.
- No account, server-side storage, analytics event, new URL, affiliate link or image asset.

## Acceptance and remaining QA

- CI static test checks all three locales use the same eight task IDs, accessible status, progress and reset controls, and the shared script/style.
- Mobile targets: 360 / 390 / 1280 px. Check keyboard focus, 320 px overflow, browser storage blocked, reset and language-switch persistence.
- No real-browser screenshot QA is claimed in this research note; that remains a reviewer task.
