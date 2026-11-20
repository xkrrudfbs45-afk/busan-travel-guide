# Japanese KTX booking quick answer and navigation fix — 2026-11-21

## Editorial decision
Improve the existing Japanese KTX booking guide only. Do not create a new URL. Taiwan remains the priority market; the Taiwan and English pages already surface the two-month rule in their opening answer. The Japanese page contained the same rule farther down the page but did not answer it immediately, and its “sold out” summary contained a duplicated, incorrect luggage anchor.

## Demand signals checked 2026-11-21

### Taiwan
- PTT Korea_Travel, 2026-09-30: [Korail ticket advance-sale window change](https://www.ptt.cc/bbs/Korea_Travel/M.1790778498.A.840.html). The public post explains the move from 30 days to two months from 2026-10-01 and mentions 07:00 KST. This is a community explanation, not the authority for the rule.
- PTT Korea_Travel, 2026-07-23: [Seoul + Busan transport planning question](https://www.ptt.cc/bbs/Korea_Travel/M.1784801459.A.532.html). The poster asks whether KTX or express bus is better and how to handle two 28-inch suitcases between hotels and stations. This supports the need to connect ticket booking with station/luggage planning; it is one planning thread, not a demand-volume estimate.
- Targeted public Dcard searches did not surface a sufficiently relevant current KTX sold-out / cancellation-seat thread in this pass. No demand claim is inferred from the absence of results.

### Japan
- 4travel, 2026-10-14: [October 2026 Korea rail trip](https://4travel.jp/travelogue/12083387). The diary discusses the 2026-09-01 KTX/SRT integration and travel on the former SRT corridor. It is a firsthand trip report, not a booking-problem thread.
- Targeted public Yahoo!知恵袋 searches did not surface a recent, specific Busan KTX sold-out / cancellation-seat question. No demand claim is inferred from the absence of results.

### English-language communities
- Reddit r/KoreaTravelAdvice, 2026-09-11: [All train/buses from Seoul to Busan are sold out](https://www.reddit.com/r/KoreaTravelAdvice/comments/1wd9lgr/all_trainbuses_from_seoul_to_busan_are_sold_out/). A traveler planning 2026-09-23 asks about alternatives after trains and buses appear sold out. The thread is small (three visible votes); it demonstrates the problem type, not broad demand.
- Reddit r/koreatravel, 2026-08-03: [KTX booking dates](https://www.reddit.com/r/koreatravel/comments/1vequd4/ktx_booking_dates/). A traveler still assumes the old 30-day window, showing how stale booking guidance can confuse visitors after the rule change.

### Korea
- DCInside KTX Gallery, 2026-09-19 03:23 KST: [A cancellation seat appeared around 03:20](https://gall.dcinside.com/mgallery/board/view/?id=ktx&no=2125). The visible page showed 743 views and four comments at the current crawl. This is one user's anecdote, not a predictable release time.
- TheQoo, 2026-10-08 22:44: [Question about the 3 a.m. KTX cancellation-seat rumour](https://theqoo.net/leagueoflegends/4369438083). The visible page showed 275 views and nine comments. It indicates recurring uncertainty, not confirmation of a schedule.
- Targeted searches did not surface a sufficiently relevant current Clien or Ppomppu discussion, Instagram public post or YouTube comment thread. Naver Blog results were blocked by robots policy; no login or access-control bypass was attempted.

## Official verification
- KORAIL press release, 2026-10-08: [Foreign-traveller booking window expanded to two months](https://info.korail.com/info/selectBbsNttView.do?bbsNo=199&key=911&nttNo=27403), especially the “승차권 예매 2개월 전부터” section. This is the primary source for the two-month rule.
- KORAIL's public foreign booking page currently has a crawlable legacy notice that still says “one month” while showing 07:00. This conflicts with the dated 2026-10-08 announcement on the advance window. Keep the existing page's explicit warning that old one-month wording can remain on some English screens; tell visitors to enter their exact travel date and follow the live booking form and latest notice. The 07:00 time is retained as a usual reference, not a guarantee for special holiday schedules.
- KORAIL booking FAQ retrieval timed out in this pass. No new waitlist, payment-deadline or standing-ticket rule was added.

## Competitor structure benchmark
- [Don't Panic Korea — KTX tickets go on sale at 7:00, two months ahead](https://dontpanickorea.com/en/guides/how-to-book-ktx-train-tickets-in-korea), checked in public search on 2026-11-21: strong “short version”, date-specific booking checklist and clearly separated deadlines.
- [Kedanto — Where foreigners can book KTX tickets, and when the seats open](https://kedanto.com/en/blog/ktx-booking-foreigners), published 2026-10-13: useful table of booking channels and time-zone conversion.
- Structural lesson only: answer the booking-window question before the detailed channel comparison. No competitor wording, imagery, prices or affiliate claims were copied.

## Change in this PR
- Japanese opening answer now states the two-month advance window for foreign travelers from 2026-10-01, gives 07:00 KST as the usual reference, links the dated KORAIL announcement, and flags the stale one-month wording on some English screens.
- The Japanese “when booking is unavailable” summary now links once to the actual “sold-out options” section instead of rendering two duplicate luggage links plus the correct link.
- Existing section 2 and the detailed sold-out section remain the source of the full instructions, including the non-guaranteed early-morning 05:00 editor tip. No cancellation-seat release time is presented as official.
- No title, meta description, URL, canonical, hreflang, JSON-LD, affiliate CTA, image, analytics or SNS schedule changed.

## Image / UX review
- The existing hero shows a KTX train and credits Syced / Wikimedia Commons, CC0. It remains subject-matched; no image replacement or new license claim is required.
- The hero still uses lazy loading. Whether it is the LCP element and its actual transfer size were not measured.
- Source HTML was reviewed for the duplicated anchor. A real browser screenshot / responsive crop check at 360 / 390 / 1280 px was not performed in this run.

## Validation and release boundary
- Source-level exact-string checks confirm the opening answer replacement and removal of the duplicated anchor.
- The first exact-head Technical SEO workflow passed on PR head `cbdd63dee48ad0a22d5ba59db0ca9483322a899f` (run https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44774820212). This note-only correction records that result; the new documentation commit will receive its own workflow run.
- Public go2busan.com, /version.txt, sitemap.xml and robots.txt could not be independently fetched by the browser in this run. Main SHA is not proof of live deployment.
- Draft PR only. No merge, production deployment, re-index request, affiliate change or SNS post / schedule change.
