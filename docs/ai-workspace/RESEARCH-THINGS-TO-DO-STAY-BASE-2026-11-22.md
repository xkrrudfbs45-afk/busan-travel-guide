# Things-to-do stay-base decision section + Agoda placement — 2026-11-22

## Decision
- Deepen the existing Things to Do in Busan guide in EN / JA / zh-TW only; no new URL.
- Add a concise, localized accommodation-area decision section before the destination list. The EN page already explains why the city should be grouped by area; the new paragraph makes the stay decision explicit. JA and zh-TW did not have a comparable stay-area section.
- Add one Agoda hotel-search placement per locale at that decision point, using the existing owner-supplied CID `1979955`, city `17172`, and the established injector. The copy explicitly says the results are Busan-wide and asks readers to set their chosen neighborhood before comparing the exact hotel-to-station walk, luggage access, total price and cancellation terms.
- No new guide URL, partner ID, analytics/consent change, price change, SNS change, image replacement, merge or production deployment.

## Community research and demand signals

### Taiwan
- PTT, `[住宿] 釜山住宿問題`, 2026-01-26: a first-time visitor asked whether to stay in Seomyeon, Haeundae or Nampo. The reply thread distinguished Seomyeon for transport, Nampo for shopping/markets, Haeundae for beach time and Gwangalli for bridge views. This is one thread with multiple replies, not a market-wide survey: https://www.ptt.cc/bbs/Korea_Travel/M.1769396221.A.6F8.html
- Dcard, `#詢問 釜山海雲台住宿`, 2025-04-06: a first-time group trip with an older family member considered splitting a five-day stay between Haeundae and Seomyeon, with concerns about hotel safety and moving luggage between bases. Older context, used only as evidence that the split-stay question recurs: https://www.dcard.tw/f/korea_travel/p/258476493
- A Dcard hotel roundup surfaced on 2026-11-21, but it was a curated hotel-promotion post rather than an independent travel question; it was not treated as a demand signal.

### Japan
- 4travel, solo trip 2026-09-16 to 2026-09-18: the traveler chose Gwangalli rather than the central Seomyeon/Nampo areas because the beach and evening atmosphere were the priority. Single trip report, not a preference estimate: https://4travel.jp/travelogue/12075152
- 4travel, family trip 2026-08-24 to 2026-08-27 with children aged four and zero: Haeundae was selected for a hotel-centered coastal stay; the author noted that travelling with two small children and luggage was tiring. Single report, useful for family context only: https://4travel.jp/travelogue/12070971
- 4travel, 2026-09-28 to 2026-09-30: a short trip used a Nampo-area hotel while visiting Jagalchi, BIFF Square, Gukje Market and Yongdusan Park: https://4travel.jp/travelogue/12076216
- No recent, directly relevant public Yahoo!知恵袋 accommodation-area question surfaced in this search. An earlier 2026-06-14 question about airport-bus seat availability and card payment is adjacent transport context, not evidence for this accommodation decision.

### English
- Reddit r/koreatravel, 2026-03-03 to 2026-03-05: a first-time visitor with only two days asked for a central base. Replies varied by itinerary: Seomyeon for mixed-area transit, Haeundae for an east-coast-focused trip; one reply specifically warned that the walk from a hotel to the nearest metro exit can feel longer with luggage: https://www.reddit.com/r/koreatravel/comments/1rjzf2q/which_area_to_stay_in_busan_as_a_first_time/
- Reddit r/koreatravel, 2025-10-13: a visitor struggled to fit Haeundae, Gwangalli, Gamcheon and Nampo into a short trip, illustrating the cost of cross-city backtracking. Older planning context: https://www.reddit.com/r/koreatravel/comments/1o5e78f

### Korea / local context
- TheQoo public thread, 2026-11-18: one visitor said the Haeundae–Gwangalli trip and the walk from Gwangan Station to the beach felt longer than expected. At capture it showed 118 views and 3 comments. This is a single local observation, not a demand estimate; it supports the practical warning to check the exact hotel-to-station route: https://theqoo.net/ktalk/4410708776
- Naver Blog search was blocked by robots.txt; no bypass was attempted. No independently verifiable recent, directly relevant post surfaced in DCInside, Clien or Ppomppu during this pass.
- Korean search results also surfaced local travel-guide pages that consistently compare Seomyeon, Nampo, Haeundae and Gwangalli by trip purpose and the final return journey. They are editorial pages, not community evidence, and were used only to compare information structure.

## Official cross-check
- Busan City’s 2025-07-31 airport-bus notice distinguishes Line 1 (Haeundae/Gijang) from Line 2 (Seomyeon/Bujeon). This illustrates why the arrival route depends on the chosen base; no 2025 fare or timetable is repeated as a current 2026 promise: https://www.busan.go.kr/eng/bsnews01/1691463
- Busan City’s public-transport guide explains the metro, bus and transfer system and links to official bus information: https://www.busan.go.kr/eng/public-transportation
- Visit Busan describes Seomyeon Market as part of Seomyeon’s shopping and food district: https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000301003001000&uc_seq=328
- Visit Busan’s historic-downtown itinerary includes Jagalchi Market and the Nampo-dong dried-fish wholesale market, supporting the old-downtown/market use case: https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000202012001000&uc_seq=2809
- Visit Busan identifies Haeundae Blueline Park as a major Haeundae coastal attraction: https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000301001001000&uc_seq=980
- Visit Busan describes Gwangalli as a beach, restaurant and café district with Gwangan Bridge views: https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000202012001000&uc_seq=1876

## Competitor / information-architecture benchmark
- Public Korean travel guides updated 2026-08-02, 2026-09-17, 2026-10-23 and 2026-11-16 commonly lead with a neighborhood comparison, match each area to a trip purpose, and call out last-return routes, luggage and total-price checks. Examples: https://korea.modelter.com/articles/busan-where-to-stay/ · https://budslog.com/ko/guides/busan-2n3d-where-to-stay-haeundae-seomyeon-nampo · https://rankthree.com/ko/busan-where-to-stay-haeundae-seomyeon-nampo · https://asiaseat.com/stay/busan/
- Adopted the structural lesson only: answer the base-choice question before listing attractions, state that no neighborhood is best for every trip, and direct readers to compare the actual hotel address and final return route. No competitor wording, images, prices or unverified travel times were copied.

## Page and conversion changes
- EN: added one concise paragraph after the existing route-by-area explanation and before the Haeundae section.
- JA / zh-TW: added a localized stay-area section before the first destination section; the existing build-generated contents list should include the new heading.
- All three: added one Agoda placement at the stay decision point. The disclosure is emitted by the existing injector; the CTA does not claim area-specific results.
- Internal links point to the existing localized `where-to-stay-busan` guides.
- SEO hypothesis: this adds a direct answer for users deciding where to stay while keeping the page’s primary attractions intent. The CTA appears only after the neighborhood choice is explained, reducing premature booking pressure.

## Images and rights
- No image changed or added.
- EN retains the Go2Busan original editorial illustration and labels it as an illustration, not a documentary photo.
- JA / zh-TW retain the Gwangalli Beach / Gwangan Bridge photo by Masterhatch, Wikimedia Commons, CC BY-SA 4.0; adjacent visible credit remains. Registry: `assets/data/image-credits.json`.
- No crop, byte-size, LCP/CLS or live image-MIME claim is made in this PR.

## Validation and remaining risks
- Source-level validation: all three insertion anchors occur exactly once; all three localized stay-guide links exist; Agoda config parses; 27 placements have unique `id:locale` pairs; existing CID/city values are unchanged.
- CI should run the public build and `scripts/inject-agoda-cta.mjs --check` against the exact PR head, plus SEO, image-credit and safe external-link audits.
- Read-only Render origin pages were inspected on 2026-11-22. The custom domain `go2busan.com` was not directly accessible through the inspection path during this pass.
- Real browser viewport QA at 360 / 390 / 1280 px, actual mobile crop, live image HTTP/MIME, LCP/CLS and final Agoda result UI remain unverified.
- No GA4/GSC query was run; no SNS post/schedule change, merge or production deploy was performed.
