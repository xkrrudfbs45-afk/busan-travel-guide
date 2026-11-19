# zh-TW food-picks count and image correction — 2026-11-19

## Decision

Fix the metadata count on `/zh-tw/guides/busan-newspaper-food-picks/` and replace the unrelated Busanhang Bridge share image with an already-verified Bupyeong Kkangtong Night Market food-vendor photograph.

The page contains **28 H3 restaurant/food entries**. The visible H1 and opening deck already say 28; only the SEO/social metadata still said 25. A repository search found no separate search-index record for this URL and the zh-TW guide directory has no stale numeric count. The related `local-food-by-neighborhood` page already links to the guide as a 28-item list.

## Change

- Replaced 25 with 28 in the title, meta description, OG title/description, Twitter title/description and JSON-LD headline/description.
- Replaced the unrelated Busanhang Bridge OG/Twitter image with the registered Bupyeong Kkangtong Night Market food-vendor image.
- Added localized `og:image:alt` and `twitter:image:alt`.
- Added one near-hero inline image with descriptive alt text and visible photographer / source / CC BY-SA 4.0 attribution.
- The caption explicitly identifies the image as an illustrative market-atmosphere photograph taken in September 2018, not a photo of any of the 28 named businesses or a current shop.
- No image-registry edit was needed: the exact Commons file was already `verified`, commercial-use permitted, and registered in `assets/data/image-credits.json`. It is already used on the closely related Kkangtong Market food guide; reuse here is relevant to the market-food subject rather than an unrelated destination.

## Community scan — 2026-11-19

### Taiwan

- [Dcard: 2026 Busan four days / three nights](https://www.dcard.tw/f/korea_travel/p/262264413), trip in early October 2026. The poster describes a group trip, a Seomyeon hotel, restaurant choices and Uber use. One trip report, not a market-wide demand measure.
- [PTT: first Busan trip, 7 adults + 4 school-age children](https://www.ptt.cc/bbs/Korea_Travel/M.1769864293.A.ABB.html), posted 2026-01-31. The questions focus on a workable base, arranging a group meal and whether private transport is needed.
- [PTT: Seoul + Busan transport planning](https://www.ptt.cc/bbs/Korea_Travel/M.1784801459.A.532.html), posted 2026-07-23. The poster specifically asks about two 28-inch suitcases and avoiding repeated hotel moves.

### Japan

- [4travel: Busan food trip](https://4travel.jp/travelogue/12042089), 2026-03-06 to 2026-03-09; crab, pufferfish, samgyeopsal, market snacks and Haeundae Traditional Market appear in the itinerary.
- [4travel: first 3-night / 4-day Busan family trip](https://4travel.jp/travelogue/12077347), 2026-09-29 to 2026-10-02. A first-time Busan trip is built around Nampo and food/culture stops.
- [Yahoo!知恵袋: three women, four nights / five days](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14329280114), posted 2026-06-27. The question asks for an efficient route from the airport / Seomyeon base and practical food recommendations.
- [Yahoo!知恵袋: Haeundae–Gimhae limousine capacity and card payment](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13328919303), posted 2026-06-14. This reinforces the need to state current transport details and avoid treating one anecdote as a guarantee.

### English-language communities

- [Reddit: Gimhae Airport limousine status](https://www.reddit.com/r/koreatravel/comments/1jdc914/airport_limousine_gimhae_international_airport/), started 2025-03-17 with later replies in March 2026. Conflicting old answers about suspension and a later report that the service was operating show why dated official verification matters.
- [Reddit: Gimhae Airport to Seomyeon with luggage](https://www.reddit.com/r/koreatravel/comments/1s983gd/best-way-from-busan-airport-to-seomeyon/), 2026-04-01. The question is specifically about luggage and whether a direct limousine is easier than light rail plus metro.

### Korean public discussion

- [Clien: Busan sea-taxi trial](https://www.clien.net/service/board/park/19290927), posted 2026-11-11. Two replies discuss whether a short route adds enough value compared with a 30-minute walk or two subway stops, and whether a longer Busan Station–Haeundae link would be more useful. This is a small local discussion, not evidence of broad demand.
- Public searches of Naver, DC Inside, TheQoo and Ppomppu did not surface a recent, independently corroborated discussion about the specific 28 businesses in this roundup. No new restaurant claims or local-favorite rankings were added on that basis.

## Benchmark notes

- [Korea Starter Kit's first-timer guide](https://koreastarterkit.com/visit/busan-first-time-guide/) makes the first answer easy to scan with a quick answer, neighborhood table and transport / winter-weather context.
- [Tourism Busan's airport guide](https://tourismbusan.com/gimhae-airport-to-busan-transportation-guide) separates route, fare, waiting interval and luggage trade-offs, then answers common questions. The structural lesson is to make the travel decision explicit, not to copy its wording.

## Image source and rights

- [Wikimedia Commons file page](https://commons.wikimedia.org/wiki/File:Food_vendor_at_the_Bupyeong_Kkangtong_Night_Market.jpg)
- Photographer: Christophe95
- License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Wikimedia Commons file page rechecked 2026-11-19: 4,032 × 3,024 px original, 666 KB, own work by Christophe95, photographed 27 September 2018; CC BY-SA 4.0 is explicitly shown on the file page. The existing registry entry was refreshed to `checked_on: 2026-11-19`. The page caption preserves author, source and license links; only Wikimedia thumbnail resizing is used, with no derivative crop.
- The original image is portrait-ish 4:3; social-platform 1200×630 cropping and responsive 360 / 390 / 1280 rendering still require visual browser review. Do not treat that review as complete from the source edit alone.

## Static checks performed

- Counted 28 `<h3>` entries in the page source.
- Confirmed no `25家` remains in the updated file.
- Confirmed OG/Twitter image and localized alt fields are present.
- Confirmed JSON-LD image points to the same registered Commons file.
- Confirmed the new figure contains a visible photographer and CC BY-SA 4.0 credit.
- No browser rendering, mobile screenshot, production check, merge or deployment was performed in this run.
