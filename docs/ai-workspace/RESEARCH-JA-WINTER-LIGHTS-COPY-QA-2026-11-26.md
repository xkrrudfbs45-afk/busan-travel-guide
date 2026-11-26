# Winter-lights Japanese copy QA — 2026-11-26

## Scope and decision
- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Base: `6fbc38d98d8d39fd7dbf59270c9c2d28d6a37bd5`
- Existing issue: [#601](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/601)
- Existing canonical guide only: `ja/guides/busan-winter-lights-christmas-2026/index.html`
- Removed the duplicated Seomyeon caveat and replaced the two repetitive sentences with one natural sentence: 「釜山市のイベントカレンダーでは開催期間を確認できますが、毎日の点灯時間は現時点で案内されていません。」
- No new page, dates, hours, facts, metadata, URL, canonical, hreflang, sitemap, affiliate or analytics changes.

## Community research (public, checked 2026-11-26)
- **Taiwan / Dcard:** A recent November outfit thread asks about layers, thermal clothing, wind and night-time seaside conditions; replies emphasize adjustable layers and wind protection. Another late-November travel discussion reports variable clothing needs and strong indoor heating. These are qualitative examples, not representative demand.
  - https://www.dcard.tw/f/korea_travel/p/262410978/b/1
  - https://www.dcard.tw/f/korea_travel/p/257335115
- **Japan / 4travel:** A 2026-11-13–16 early-winter Busan trip report describes an annual winter visit, strolling and food-focused travel around Nampo-dong. It is one travel diary, not a general trend.
  - https://4travel.jp/travelogue/12086020
- **Japan / Yahoo!知恵袋:** targeted public searches did not surface a current, useful Busan winter-light question in the accessible results; no demand claim is made.
- **English / Reddit:** A November 13, 2026 thread about a December Seoul/Busan itinerary has replies suggesting Nampo-dong/Gwangbok-ro lights, BIFF Square seed hotteok and pocket hand warmers; one thread and anecdotal.
  - https://www.reddit.com/r/koreatravel/comments/1xv5q7e/seoul_and_busan_in_december/
- **Korean local context:** Busan MBC's November 21–22 reporting describes the arrival of colder weather and cold outings in Busan. A November 11 local weather explainer uses KMA climate normals to contrast November and December and notes coastal wind; secondary-source context only.
  - https://www.youtube.com/watch?v=o1wBIQk-BoI
  - https://www.youtube.com/watch?v=3YFnPMcyf-g
  - https://n-killo.github.io/ko/posts/busan-november-december-weather/
- **PTT / other Korean communities:** searches did not yield a strong, current, independent signal specific to this Japanese-language copy defect or the winter-lights page. Older itinerary questions are not treated as current demand.

## Competitor / page audit
- RankThree's recent winter-light comparison presents festival dates, time, transport and pairing options in a compact comparative structure: https://rankthree.com/en/busan-winter-lights-haeundae-gwangbokro-gwangalli
- Go2Busan already has an existing winter-lights hub with a date summary and neighborhood routes. The audit found a copy repetition, not a justified new URL or new section.
- Source-level image review only: the hub's retained Haeundae image is explicitly captioned as an archive photo, not the 2026 installation; the Gwangalli image caption retains attribution and CC BY 2.0 link. No image was changed or fetched for live HTTP/MIME/crop verification.

## QA and limits
- Source-level exact replacement: verified the duplicated sequence existed once and was replaced once.
- EN and zh-TW page text and metadata left untouched.
- No local build or repository audit was run in this runtime.
- No browser/pixel review at 360/390/1280 px, no custom-domain live page verification, and no live image HTTP/MIME, crop, LCP or CLS check.
- PR is Draft. Merge, deployment, analytics, affiliate and SNS changes are not included.
