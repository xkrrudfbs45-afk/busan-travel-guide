# KTX sold-out and cancellation-seat guidance — 2026-11-18

## Editorial decision
Improve the existing English, Japanese and Taiwan Traditional Chinese KTX booking guides rather than create duplicate URLs. This is a high-friction step in a Busan trip: travelers may have chosen their dates but cannot secure a train seat.

## Verified official guidance
- Korail ticket FAQ: https://www.korail.com/ticket/reserve/guide/faq
  - Foreign-traveller booking window: Korail's official press release dated 2026-10-08 states that from 2026-10-01 the advance booking period for foreign rail users expanded from one month to two months before departure (see https://info.korail.com/info/selectBbsNttView.do?bbsNo=199&key=911&nttNo=27403, section “승차권 예매 2개월 전부터”, lines 342–345 in the published page). The Korail English homepage / FAQ may still display the older one-month wording; treat this as a live-source inconsistency and advise readers to check the date-specific booking form and latest notices. Do not state one month as the current foreign-traveller rule.
  - Waitlist: for sold-out trains, online requests can be made until two days before departure where the option is available; canceled seats are assigned in request order.
  - Sold-out trains: Korail FAQ says standing tickets may be purchased at station ticket counters. Availability and conditions vary.
- Korail mobile usage guide: https://m.letskorail.com/mbt/m_guide.html
  - Waitlist is an explicit status in the booking flow; seat assignment and payment instructions are shown in the reservation record. Some older Korail help pages still show a different midnight payment deadline, so the guide tells users to follow the deadline displayed in their current Korail+ booking record rather than publish an unverified universal cutoff.
- SR transition notice: https://www.srail.or.kr/cms/article/view.do?pageId=TK0502000000&pageIndex=16&postNo=922
  - Since 2026-09-01, former SRT-origin services are booked as KTX through Korail+ / Korail channels. Do not send users to a separate SRT booking flow as an alternative.
- Korea government / Korail integration context: https://info.korail.com/info/selectBbsNttView.do?bbsNo=199&integrDeptCode=&key=911&nttNo=27109&pageIndex=1&searchCnd=CN&searchCtgry=&searchKrwd=
  - Integration and additional seat supply announcements are not a guarantee of availability for an individual date or train.

## Important correction
- Correction after primary-source recheck: the foreign-traveller booking window is two months before departure from 2026-10-01, according to Korail's 2026-10-08 official press release. Some Korail English homepage / FAQ text remains inconsistent and still displays one month. The EN / JA / zh-TW pages now explain both the official two-month foreign-traveller rule and the conflicting legacy display, with a direct link to the dated announcement.
- Taiwan Traditional Chinese and Japanese pages now state the same standard release rule, with a caveat for special holiday schedules.

## What changed
- EN / JA / zh-TW title, meta description and main heading now emphasize sold-out tickets, waitlists and cancellation-seat checks.
- Added actionable sold-out steps: Korail+ waitlist when displayed, widen departure-time search, ask the station counter about standing tickets, enable notifications and verify the final ticket.
- Removed obsolete guidance to search for a separate SRT service as an alternative.
- Explicitly clarified that Korail does not publish a universal nightly cancellation-seat reset hour. Do not promise 02:00 or 03:00 releases. Seats may return when other passengers change or refund bookings.
- Preserved existing canonical URLs, hreflang, article images, image credits, affiliate disclosure and existing travel content.

## Validation / release boundary
- Run static build and Technical SEO workflow on the exact PR head.
- Review mobile layouts at 360 / 390 / tablet / desktop; browser screenshot QA remains required and is not claimed complete.
- Keep Draft until CI and responsive visual review are complete. No merge or production deployment in this task.


## Follow-up community and content-source check — 2026-11-19

### Korea — public community signals
- **DCInside KTX Gallery:** [“오늘(9/19)도 새벽 3시 20분 취소표 풀림”](https://gall.dcinside.com/mgallery/board/view/?id=ktx&no=2125), posted 2026-09-19 at 03:23 KST. The post title refers to a cancellation seat appearing around 03:20; the author says they managed to get the preferred time. The page showed 784 views at review. This is one user's time-specific anecdote, not evidence of a daily release schedule.
- **DCInside Transit Gallery:** [KTX cancellation-seat timing question](https://gall.dcinside.com/mgallery/board/view/?id=transit&no=918120), posted 2026-04-21 at 00:08 KST. The writer asks when cancellation seats appear for a Busan-bound train (073) on April 30. The visible page did not provide a substantive answer. This shows the question recurs, not that a particular time is reliable.
- **TheQoo:** [“그...ktx 취소표 새벽3시에 풀린다고?”](https://theqoo.net/theqdeal/3574060162), posted 2025-01-16 at 00:11; 2,097 views and 2 comments at review. It is an older question about the 03:00 rumour, not confirmation of a rule.
- **Ppomppu:** [“요즈음 예매 어렵다는 KTX 부산 상황 jpg”](https://m.ppomppu.co.kr/new/bbs_view.php?id=freeboard&no=10032821), posted 2026-07-12; search result showed 2,830 views and 9 comments. The page could not be reliably decoded in this pass, so its comments were not used.
- Targeted public searches did not surface a sufficiently relevant current KTX cancellation-seat thread on Clien, Instagram or YouTube. Naver Blog search results were blocked by robots.txt; no login or access-control bypass was attempted.

### Taiwan
- **PTT Korea_Travel:** [Seoul + Busan transport planning](https://www.ptt.cc/bbs/Korea_Travel/M.1784801459.A.532.html), posted 2026-07-23. The visible search result asks whether KTX or express bus is better and how to handle two 28-inch suitcases between hotels and stations. Direct access returned 403, so this is a search-snippet-only planning signal, not a verified full-thread consensus.
- **PTT Korea_Travel:** [Korail ticket advance-sale window change](https://www.ptt.cc/bbs/Korea_Travel/M.1790778498.A.840.html), posted 2026-09-30. The visible result says the standard advance-sale window for Korail tickets expanded from 30 days to two months from 2026-10-01, usually opening at 07:00 KST. Direct access returned 403; the rule is included only because Korail's own 2026-10-08 announcement independently confirms it.
- No recent Dcard post specifically about KTX cancellation-seat release timing was verified in this pass.

### Japan
- Searches of 4travel and Yahoo!知恵袋 did not surface a sufficiently recent, specific Busan KTX sold-out / cancellation-seat question in this pass. No Japanese demand claim is inferred from the absence of a result.

### English-language communities
- **Reddit r/koreatravel:** [Train tickets sold out online, standing tickets at Busan Station?](https://www.reddit.com/r/koreatravel/comments/1ckqy4b/), posted 2024-05-05. The traveler asks about sold-out trains and station standing tickets; replies discuss station-counter availability and repeated cancellation checks. This is older, individual experience and not a current ticket rule.
- **Reddit r/KoreaTravelAdvice:** [All train/buses from Seoul to Busan are sold out](https://www.reddit.com/r/KoreaTravelAdvice/comments/1wd9lgr/), posted 2026-09-11 for travel on September 23. It is a current-season scarcity question but a small thread; it does not establish route-wide demand volume or a cancellation timetable.
- **Reddit r/koreatravel:** [KTX Korail troubles](https://www.reddit.com/r/koreatravel/comments/1tgs5a5/), posted 2026-05-18. A traveler asks when tickets become available; a reply points to 07:00 KST for the normal ticket-sale opening. This concerns the scheduled booking window, not cancellation-seat release.

### Editorial adjustment in this PR
- Keep the approximately 05:00 KST check as a Go2Busan editor's firsthand practical tip supplied by the site owner; do not present it as an official release time or a guarantee.
- Replace the vague phrase “Some travelers report seeing returned seats in the early morning” with a source-aware distinction: one public Korean KTX-gallery anecdote mentions approximately 03:20, while the site owner's firsthand check suggests trying again around 05:00. Both are individual experiences, not a repeatable timetable.
- Link the original DCInside post for transparency. Keep the 02:00 / 03:00 fixed-reset rumour explicitly unconfirmed.
- Do not change the official two-month advance-sale rule, 07:00 standard opening, Korail+ waitlist conditions, or station standing-ticket caveats.

### Competitive and image review
- The official Korail booking FAQ remains the primary source for waitlists and standing-ticket conditions; Korail's dated 2026-10-08 announcement remains the source for the foreign-traveller two-month booking window. Third-party and older community answers can be stale, so the guide directs visitors to the live date-specific booking form.
- Existing KTX cover: Wikimedia Commons KTX_in_Seoul.jpg, CC0, subject matches the page and visible attribution is retained. No image bytes, crop, URL, alt text or license were changed in this pass.
- Canonical URLs, hreflang, title/meta, OG/Twitter metadata, JSON-LD, affiliate CTA and analytics remain unchanged.

### Validation / release boundary for the follow-up
- Updated EN / JA / zh-TW cancellation-seat paragraphs and this research note only; no new URL.
- Exact-head static build and Technical SEO checks are required after PR creation. Responsive browser screenshots at 360 / 390 / 1280 remain a separate review; no browser screenshot QA is claimed here.
- No GA4/GSC query, SNS post, merge, Render deployment or production configuration change was made.
