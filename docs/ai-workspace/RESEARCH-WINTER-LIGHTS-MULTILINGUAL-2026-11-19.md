# Winter lights multilingual guide — research and implementation log

**Checked:** 2026-11-19 (KST)  
**Repository baseline:** 5e57f2c266a79a9ba72fe8ad38b7adf65ab6ccb0  
**Scope:** Extend the existing English winter-lights guide into Japanese and Traditional Chinese; correct a date contradiction; no new topic or image asset.

## Decision

The English winter-lights page already covers the seasonal intent. Rather than create another topic or duplicate the winter-travel guide, this batch adds Japanese and Traditional Chinese equivalents for the existing event hub and links them from the matching guide directories and winter guides. Taiwan remains the first localization priority. The pages distinguish confirmed event listings from a procurement-specified lighting window and from separate street performances.

## Public community evidence

### Taiwan
- **PTT Korea_Travel — [2026 Busan independent-trip itinerary](https://www.ptt.cc/bbs/Korea_Travel/M.1784120556.A.8B2.html), 2026-07-15.** A five-day/four-night itinerary groups Seomyeon, Haeundae, Nampo/BIFF, Songdo and Yeongdo into separate area days. It is an older summer trip report, useful as itinerary context but not evidence of winter-event demand.
- Targeted Dcard searches in this pass did not surface a sufficiently current, independent Busan winter-lights question. No market-wide demand claim is made.

### Japan
- **4travel — [Summer Busan family trip](https://4travel.jp/travelogue/12075350), 2026-08-12 to 08-16.** The writer split four nights between Nampo-dong and Haeundae and noted preparing Uber and T-money before departure. This supports area-based planning and transport-preparation context, not winter-event demand.
- **4travel — [Summer trip with two children](https://4travel.jp/travelogue/12070971), 2026-08-24 to 08-27.** A family with a four-year-old and an infant centered the trip on Haeundae; useful context for family pacing, not a winter-event signal.
- Targeted Yahoo!知恵袋 searches did not surface a sufficiently current Busan winter-lights Q&A in this pass.

### English-language communities
- **Reddit r/koreatravel — [Busan before Christmas](https://www.reddit.com/r/koreatravel/comments/1xi0w09/busan_before_christmas/), 2026-10-28.** The traveler asks about five December days and staying in the downtown market district, partly to avoid Christmas-week restaurant crowds. A reply recommends grouping Nampo/BIFF and markets rather than crossing the city repeatedly. Small thread; one itinerary question, not a demand estimate.
- **Reddit r/koreatravel — [Seoul and Busan in December](https://www.reddit.com/r/koreatravel/comments/1xv5q7e/seoul_and_busan_in_december/), 2026-11-13.** The thread discusses Christmas atmosphere, coastal wind and luggage/coat storage between climates. Treat comments as individual advice, not official storage guarantees.
- **Reddit r/koreatravel — [November 2026 events and festivals](https://www.reddit.com/r/koreatravel/comments/1xkcc44/november_2026_events_and_festivals/), 2026-10-31.** A monthly community events thread lists Busan Christmas Village for Nov 26–Dec 25. This is a discovery signal, not ticket authority.

### Korean public communities and local intelligence
- **Clien — [Busan marine tourism taxi trial](https://www.clien.net/service/board/park/19290927), 2026-11-11.** One public post with two comments discusses the proposed Suyeong River–Gwangalli–Haeundae route; one commenter questions whether the Suyeong River–Gwangalli leg is worthwhile on foot and compares the river–Haeundae leg with the subway. This is one discussion, not a general view.
- **Official cross-check:** [Busan City press release, 2026-11-11](https://www.busan.go.kr/nbtnewsBU/1763204) says the 45-minute run was a press-only trial and that infrastructure completion is targeted for the second half of 2027. Other same-day reporting gives a 2028 full-service target, so the public launch date is inconsistent. **Decision: do not present the marine taxi as an available visitor service or create a booking guide yet.** Recheck the launch date, fares, route stops and public ticketing when the city/operator issues a visitor notice.
- Naver Blog returned a robots.txt access block in this pass. No login or access-control bypass was attempted. Targeted searches of DCInside, TheQoo, Ppomppu and public Instagram/YouTube results did not produce a stronger, independently verifiable winter-event travel discussion in this run.

## Official facts checked

- **Haeundae Light Festival:** Busan City lists 2026-11-28 to 2027-01-10, daily 18:00–23:00, free admission: https://www.busan.go.kr/eng/bsevents/1762645
- **Millak Luce Festa:** Busan City lists 2026-11-14 to 2027-01-10, daily 18:00–23:30, free admission: https://www.busan.go.kr/eng/bsevents/1762643
- **Gwangalli M Drone Light Show:** the official overview lists winter Saturdays at 19:00 and 21:00, with first/third-week laser-show pattern; weather and technical cancellation notices can change the schedule: https://www.gwangallimdrone.co.kr/en/overview
- **Christmas Village Busan:** YES24's 2026 ticket notice lists Nov 26–Dec 25, 21 operating days (Thu–Sun plus Dec 21–25), weekday 16:00–22:00, weekends and Dec 24–25 11:00–22:00, standard prices ₩5,900 / ₩7,900 / ₩14,900, and free entry under 36 months with proof: https://m.ticket.yes24.com/Notice/18701
- **Seomyeon Light Festival 2026:** Busan City's event calendar lists 2026-10-29 to 2027-02-14; the current listing does not establish daily lighting hours or admission conditions, so the localized pages do not claim a free-entry status: https://www.busan.go.kr/eng/bsevents/
- **Gwangbok-ro Winter Light Tree Festival:** Jung-gu's 2026-09-08 re-notice specifies a planned lighting-installation period of 2026-12-04 to 2027-01-31, 17:30–22:30. It is a procurement/operations schedule, not a final visitor programme: https://eminwon.bsjunggu.go.kr/emwp/gov/mogaha/ntis/web/ofr/action/OfrAction.do?context=NTIS&homepage_pbs_yn=Y&jndinm=OfrNotAncmtEJB&method=selectOfrNotAncmt&methodnm=selectOfrNotAncmtRegst&not_ancmt_mgt_no=30073&subCheck=Y
- **Gwangbok-ro Street Festa:** Busan City lists a separate event on 2026-12-05, 16:00–20:00: https://www.busan.go.kr/eng/bsevents/1762987

## Competitor benchmark

- **Busan.net** published English, Japanese and Traditional Chinese winter-lights pages on Nov 13 and updated them Nov 16:
  - EN: https://busan.net/en/guide/busan-winter-lights/
  - JA: https://busan.net/ja/guide/busan-winter-lights/
  - zh-TW: https://busan.net/zh-tw/guide/busan-winter-lights/
- Structural strengths worth learning from: at-a-glance comparison, station/map references, a one-evening route, ticket detail and FAQ.
- Our editorial differentiation: include Millak Luce Festa and the Gwangbok-ro procurement caveat; separate Street Festa from the light-tree installation; state the official Haeundae 18:00–23:00 hours; avoid the competitor's “two stops” description between Centum City and Haeundae (the stations are not adjacent); do not copy its text or images.

## Image and rights review

- Reuse the existing /assets/images/events/haeundae-light-festival-800.jpg only. The current English page captions it as a 2020 archive image by Lee Jeong-il / Busan Metropolitan City, sourced from Busan Tourism Archive and licensed KOGL Type 1.
- Localized alt text and captions explicitly say it is an archive image, not a photograph of the 2026 installation.
- No image file, crop, credit record, OG image or external asset was added or replaced.

## Files in this Draft PR

- guides/busan-winter-lights-christmas-2026/index.html — corrected Gwangbok-ro contradiction; added current YES24 operating-day, time and price details; updated reciprocal hreflang.
- ja/guides/busan-winter-lights-christmas-2026/index.html — Japanese localized event hub.
- zh-tw/guides/busan-winter-lights-christmas-2026/index.html — Taiwan Traditional Chinese localized event hub.
- ja/guides/index.html, zh-tw/guides/index.html — directory discovery links.
- ja/guides/busan-winter-travel-guide/index.html, zh-tw/guides/busan-winter-travel-guide/index.html — internal links; Traditional Chinese copy corrects the outdated statement that the Gwangbok-ro planned window is unconfirmed.
- sitemap.xml — three-way reciprocal EN / JA / zh-TW / x-default cluster and lastmod 2026-11-19.

## SEO and user-value hypothesis

Search intent is seasonal and action-oriented: date, free vs paid, operating days, ticket prices, station/area and whether events fit into one evening. The new pages give Japanese and Taiwan readers native-language titles, event names, ticket caveats and neighborhood-based route planning. The update should reduce wrong-date and missed-ticket decisions and improve language-appropriate discovery; traffic or ranking impact has not been measured.

## Validation and remaining risk

- Source-level checks in this PR verify all three canonical URLs, reciprocal hreflang, sitemap entries, localized internal links, official ticket links and image-credit wording.
- Exact-head Technical SEO CI and the live sitemap/HTTP smoke test have not run for this branch yet.
- Browser screenshots and visual checks at 360 / 390 / 1280 px have not been performed. Do not treat source-level checks as visual proof.
- Ticket inventory, event operations, weather cancellations and the Gwangbok-ro visitor programme can change. Recheck the organizer and district notices near the travel date.
- No analytics IDs, consent settings, affiliate CTAs, SNS content/schedules, external posts, redirects, URLs, prices or payment flows were changed. No merge or production deployment is included.
