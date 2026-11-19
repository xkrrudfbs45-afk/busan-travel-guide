# Haeundae Blue Line Park on-site ticket queue tip — 2026-11-20

## Decision and scope

- Baseline main: `13c1182cb60065673a9ea1bd6ccd4f7fab2888b6`.
- Existing page only: EN / JA / zh-TW `haeundae-blueline-park-sold-out`; no new URL.
- The existing guide already explains the official booking window, limited same-day tickets, the Visit Busan Pass distinction, and alternatives when the Sky Capsule is sold out.
- Added one carefully qualified traveler-reported tip: check the ticket-availability display near the on-site ticket office before joining a queue, then confirm the next available departure with staff.
- Localized the tip in all three languages and linked the original Traditional Chinese Dcard report. Updated the JA visible information-check date and the zh-TW visible / Article JSON-LD modified date to 2026-11-20.
- No fare, operating hour, ticket entitlement, route, reservation guarantee, affiliate CTA, URL, canonical, hreflang, image, analytics, privacy or SNS setting changed.

## Primary community signal — Taiwan

- [Dcard: #分享 2026釜山四天三夜](https://www.dcard.tw/f/korea_travel/p/262264413): a Taiwan group trip in early October 2026; the public page showed 40K+ views when checked on 2026-11-20. The author reports that the Haeundae Coastal Train queue was confusing, waited nearly an hour before realizing tickets were sold out, and recommends checking the screen near the ticket booth for current ticket status before lining up.
- The same report also notes Gamcheon at 09:00 felt less crowded but its slopes were tiring; Songdo cable-car queues were heavy; Huinnyeoul was crowded in the afternoon; and the traveler had a pre-booked Sky Capsule time. These are one group's observations, not representative crowd forecasts or general rules.
- The post's exact publication date is not exposed in the accessible page text; the trip period is explicitly early October 2026. Do not present 40K+ views as demand volume or the screen procedure as an official guarantee.

## Official verification — checked 2026-11-20

- [Haeundae Blueline Park official FAQ, page 2](https://www.bluelinepark.com/eng/faqList.do?pageNo=2): says only a few on-site tickets are sold at the ticket office and Sky Capsule tickets may sell out before noon. It also confirms the Beach Train has no assigned seats.
- [Haeundae Blueline Park official booking page](https://www.bluelinepark.com/eng/booking.do): says on-site tickets are limited, sold first-come first-served, and may sell out early.
- These official sources verify the limited-ticket / early-sellout risk, but they do **not** document the ticket-status screen. The screen instruction is therefore explicitly attributed to one traveler report and paired with “confirm with staff”; it is not stated as an official procedure.
- The existing page already explains that a Visit Busan Pass does not reserve a Sky Capsule slot and that the Beach Train and Sky Capsule are different benefits / ticket types. No changes were needed to that section.

## Other market and community scan

### Japan
- [Yahoo!知恵袋: parent-and-child 2-night / 3-day Busan trip](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13325650958), 2026-02-23: one family asks how to fit Lotte World, X the Sky and Blue Line Park into short arrival / departure windows, and whether a Visit Busan Pass should be 24 or 48 hours. One answer; 135 views when checked. This is a planning question, not a current ticket-availability estimate.
- [4travel: solo Gyeongju–Busan trip](https://4travel.jp/travelogue/12074223), 2026-05-31 to 2026-06-01: one traveler uses public transport and spends a short Busan stay around Seomyeon / Jeonpo. It provides itinerary context, not a Blue Line Park ticket claim.
- No additional recent Yahoo!知恵袋 thread about the ticket-office display surfaced.

### English-language communities
- [Reddit: Winter itinerary help](https://www.reddit.com/r/koreatravel/comments/1xtbrwu/winter_itinerary_help/), 2026-11-11: a family with two children asks how to combine east- and west-Busan sights. The accessible search excerpt includes a reply recommending area grouping and the Jagalchi / Chungmu Market village-bus route to Gamcheon. Direct Reddit page retrieval was unavailable in this pass; treat it as a single search-excerpt signal.
- No separate English-language thread about the Blue Line Park ticket-office display surfaced.

### Taiwan public forum
- [PTT: first Busan trip for a group of 11](https://www.ptt.cc/bbs/Korea_Travel/M.1769864293.A.ABB.html), 2026-01-31: public search excerpt asks about hotel base, group meals and private transport for a large group. Direct page retrieval returned 403; use only as a qualitative planning signal.

### Korean public sources
- [Clien: Busan–Gimhae Light Rail Tagless payment plan](https://www.clien.net/service/board/news/19294275), 2026-11-17: 740 views, 1 like and 0 comments when checked. It republishes T-money's official announcement rather than showing independent travel discussion. The existing transit-card guide already covers the two initial trial stations, the 21-station rollout target and the March 2027 launch target; no duplicate edit was justified.
- [TheQoo: Busan accommodation-location question](https://theqoo.net/travel/3406334191), 2024-09-16, and [Gamcheon vs Huinnyeoul question](https://theqoo.net/travel/3908218151), 2025-09-10, are older context only and are not treated as current demand.
- Public YouTube search surfaced Gamcheon visit videos (2026-01-11 and 2026-05-04), but no reliable public comment thread about the ticket queue. No relevant public Instagram result surfaced.
- Naver Blog search results were blocked by robots.txt. No login or access-control bypass was attempted.

## Competitor benchmark

- [Busan.net winter lights guide](https://busan.net/en/guide/busan-winter-lights/) uses an at-a-glance event table, map pins, nearest subway stations, ticket / price detail and FAQ.
- [Busan 101 first-day guide](https://www.busan101.com/en/arrival/) presents airport, ferry, transit-card, app and taxi decisions in a useful sequence. Its changeable fares and timetables still need official verification.
- No competitor wording or image was copied. This patch is a small, source-qualified improvement to an existing high-intent ticket guide.

## Validation and remaining QA

- Source-level check: one insertion point per locale; localized note and Dcard source link added; JA / zh-TW freshness dates updated as described.
- Official ticket-office FAQ and booking page were opened and checked on 2026-11-20.
- No new image or asset. Existing Sky Capsule image and its recorded credit remain unchanged.
- Full static build and Technical SEO audit are expected from the PR workflow; record the exact-head run before review.
- Real-browser review at 360 / 390 / 1280 px was not performed. No mobile visual, image crop, LCP, CLS or performance claim is made.
- Draft only: no merge, production deployment, affiliate change or external SNS publication.
