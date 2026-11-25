# Winter-lights image cleanup and growth scan — 2026-11-25

**Checked:** 2026-11-25 (KST)  
**Baseline:** main at `402b6b058ddbb2c3d603551a0cf6b628d8697e0b` (merged PR #678)  
**Scope:** Existing EN / JA / zh-TW winter-lights hub only. No new URL, asset, affiliate CTA, analytics, SNS or production change.

## Decision and change

- Remove the redundant second, standalone copy of the 2020 Haeundae Light Festival archive image from all three existing winter-lights hub pages. The same archive image remains in the opening two-photo layout.
- Add direct links to the Busan Tourism Archive source and KOGL Type 1 license page in the retained image caption in each language.
- Keep the Gwangalli image and all image files unchanged. The retained Haeundae photo is clearly labelled as an archival 2020 image, not the 2026–27 installation.

## Community signals (qualitative only)

- **Taiwan / Dcard:** [11月去釜山怎麼穿](https://www.dcard.tw/f/korea_travel/p/262410978), indexed about two weeks before this check. The post and replies discuss layering, evening/sea-side wind, and indoor heating. This is a useful winter-preparation signal, not evidence of broad event demand.
- **Taiwan / PTT:** [First Busan trip, 11-person group](https://www.ptt.cc/bbs/Korea_Travel/M.1769864293.A.ABB.html), 2026-01-31. Accommodation, meals and transport questions; older planning context and not winter-light demand.
- **Japan / 4travel:** [2026 early-winter Busan trip](https://4travel.jp/travelogue/12086020), 2026-11-13–16. One travelogue split a stay between Nampo-dong and Sasang before an early flight. Individual itinerary only; no general demand claim.
- **Japan / Yahoo!知恵袋:** targeted searches did not surface a current winter-light-specific Busan question in this pass.
- **English / Reddit:** [Seoul and Busan in December](https://www.reddit.com/r/koreatravel/comments/1xv5q7e/seoul_and_busan_in_december/), 2026-11-13. A small thread mentions Nampo/Gwangbok-ro lights and BIFF Square snack pairing; one thread is not a demand estimate.
- **Korean public communities:** targeted searches of DCInside, Clien, Ppomppu and other public results did not yield a stronger, independently verifiable winter-light travel discussion in this pass. Naver Blog access remains restricted by robots.txt in earlier checks; no bypass was attempted.

## Competitor benchmark

- [Busan.net's winter-lights guide](https://busan.net/en/guide/busan-winter-lights/) (updated 2026-11-24 in its page metadata) uses a concise event comparison, station references, route pairing and FAQ.
- [Hantabi's Jagalchi / winter-event guide](https://hantabi.org/en/korea/articles/busan-jagalchi-market) and other winter-event pages illustrate the same FAQ and date-comparison format. Some secondary listings disagree on Gwangbok-ro details; use primary sources and keep procurement schedules separate from visitor-programme confirmation.
- Go2Busan already has the EN / JA / zh-TW winter-event hub with event dates, confirmed schedules, booking windows and area-planning context. No new URL or competing page is justified.

## Gwangbok-ro vehicle-control issue #663

- A public republication [Golmoknews](https://golmoknews.com/n/898bd1d2-9307-4079-bb79-36eae59090df) displays the purported Jung-gu notice #30307 with the dates, time windows and limited section from Gwangbok-ro entrance to City Spot.
- The official Jung-gu notice page could not be opened (400 response) and the attachment was not independently checked. Therefore the republication is not treated as confirmed official content; no traffic-control wording is added to the hub. Keep issue #663 open pending direct verification.

## QA limits

- No local static build or complete SEO audit was run from a repository checkout.
- CI and browser QA at 360 / 390 / 1280 px, image HTTP/MIME and rendered crop checks remain pending.
- No GA4 / GSC query was run; daily operations owns those checks.
- No affiliate, SNS, merge, main or production change was made.
