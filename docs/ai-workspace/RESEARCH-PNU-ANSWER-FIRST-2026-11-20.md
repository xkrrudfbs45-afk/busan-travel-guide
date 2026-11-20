# Pusan National University food guide: answer-first and localization review

**Checked:** 2026-11-20  
**Target:** existing EN / JA / zh-TW pages only  
**Related owner priority:** [Issue #589](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/589)  
**Decision:** improve the existing canonical pages; do not create another PNU URL.

## Why this work

Issue #589 records a Search Console average position of **4.6** for the Traditional Chinese query `釜山大學美食` and identifies the existing PNU food guide as an answer-first improvement candidate. This run did not make a new GA4 or GSC query; the position is carried forward from the owner issue and is not a fresh measurement.

The English page had a material expectation mismatch:
- `<title>` and OG title said **7** picks.
- Meta and OG descriptions said **five** picks.
- Twitter title said **5** picks.
- H1, article copy and Article JSON-LD described **six** picks.
- The visible FAQ and FAQ JSON-LD said **five** restaurants and omitted Gaya Park Dwaeji Gukbap from the first-visit list.

The Japanese page consistently described six options. The Taiwan Traditional Chinese page intentionally has eight options and should not be forced into the same list length as EN / JA.

## Community research

### Taiwan — priority market
- [Dcard: 分享釜山必吃美食](https://www.dcard.tw/f/korea_travel/p/256753260), dated 2024-09-24. A general Busan food-sharing post with 235 likes and 13 comments visible at crawl; it covers several districts, not PNU. It supports broad food-planning interest only; no PNU demand is inferred.
- [Dcard: 釜山米其林美食攻略｜57間餐廳依地區整理](https://www.dcard.tw/f/korea_travel/p/262363414). The original post date was not exposed in the page text; a comment dated 10/28 was visible, with four likes and one comment at crawl. It groups restaurants by neighborhood, keeps Korean business names for Naver Map searches, and advises checking reservations / closing days. This is a useful Taiwan-market signal for neighborhood-first planning and Korean map-search names, not a PNU-specific demand signal.
- PTT public indexed searches did not surface a recent PNU-specific food thread. No direct PTT link is cited because no matching post was verified.

### Japan
- [4travel: local cuisine around Pusan National University](https://4travel.jp/overseas/area/asia/korea/pusan/pusan_national_university_pus/local-cuisines) currently surfaces only two regional listings, including a Bokguk restaurant near Oncheonjang; it is not a recent first-person PNU campus food report.
- No direct PNU food question on Yahoo!知恵袋 surfaced in the public indexed search.

### English-speaking visitors
- [Reddit: To do in Busan](https://www.reddit.com/r/koreatravel/comments/1q1qoqo/to_do_in_busan/), posted 2026-01-02. One reply suggests Pusan National University as a less-crowded slow-walk area with affordable food and coffee. The visible reply had four upvotes at crawl; this is one itinerary comment, not a representative survey or restaurant review.

### Korea — local source discovery
- [Tonshou PNU queue review](https://hst123.tistory.com/entry/%EB%B6%80%EC%82%B0%EB%A7%9B%EC%A7%91%ED%86%A4%EC%87%BC%EC%9A%B0-%EB%B6%80%EC%82%B0%EB%8C%80%EC%A0%90-%ED%9B%84%EA%B8%B0-%EC%BA%90%EC%B9%98%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%9B%A8%EC%9D%B4%ED%8C%85%EB%B6%80%ED%84%B0-%ED%9E%88%EB%A0%88%EC%B9%B4%EC%B8%A0-%EB%B2%84%ED%81%AC%EC%85%94K-%EB%A1%9C%EC%8A%A4%EC%B9%B4%EC%B8%A0%EA%B9%8C%EC%A7%80), dated 2026-05-08. One personal visit describes the CatchTable waiting flow and a long wait; the wait duration is not generalized or copied as a current estimate.
- [Naori Shokudo visit review](https://jmnya.tistory.com/9), dated 2025-03-07. One personal review of Japanese-style home cooking near PNU. Its 2025 menu and hours are not reused.
- [Tonshou waiting video](https://www.youtube.com/watch?v=r5SX3l9GsKg), published 2026-04-09; 1,458 views and two likes were visible at crawl. Used only as a discovery signal, not as proof of broad demand.
- No directly relevant PNU-specific public discussion surfaced in the indexed DCInside, Theqoo, Clien or Ppomppu results. No login or access-control bypass was attempted; no sentiment is inferred from inaccessible comments.

## Official and competitor cross-check

- [Visit Busan: Youth Plaza in front of Pusan National University](https://www.visitbusan.net/index.do?lang_cd=en&menuCd=DOM_000000301003001000&uc_seq=387), checked 2026-11-20. It identifies Exit 3 of Pusan National University Station on Busan Metro Line 1, describes the slight uphill walk toward the campus, and lists cafés, shops and restaurants. The official overview says closing dates and hours differ by store.
- The existing guide links to the [Geumjeong-gu official English tourist guide PDF](https://www.geumjeong.go.kr/index.geumj?contentsSid=2&file=geumjeong_guide_eng.pdf&path=tour) for Bukmatgol. The PDF was not re-extracted in this run because the public response exceeded the retrieval size limit; no new detail was inferred from it.
- [Busan.net PNU restaurant benchmark](https://busan.net/en/food/rank/busan-univ/), checked 2026-11-20. Its November 2026 page shows how a local list can provide Korean addresses, distances, menu prices, hours and queue context. It explicitly says its first-round list is compiled from Diningcode ranking and recent Korean blog reviews and that editors will add scores after visiting. Its rankings and prices were not copied; they are not a verified live price source.
- The useful structural lesson is to answer the area / access question early, distinguish the station-side student street from the North Gate food alley, and keep volatile restaurant details qualified. Do not add unverified prices or imply firsthand visits.

## Image and localization audit

- The EN page had no in-body PNU photo section, while JA and zh-TW already had a campus image and two illustrative dish images. EN now uses the same licensed visual set for parity.
- The PNU gate image is an archival photo dated **15 December 2008**, 3264×2448, by Hansol Jeong, released into the public domain. All three localized captions / alt descriptions now identify it as an archival 2008 image rather than implying it shows today's entrance.
- Tonkatsu image: Shene81, 5 January 2014, 5184×3456, CC BY 3.0. Chicken image: Real rism, 9 November 2024, 6000×4000, CC BY-SA 4.0. Both remain explicitly labelled as illustrative dish images, not photos of named restaurants.
- The EN OG/Twitter image now uses the PNU campus landmark rather than an unrelated milmyeon dish image. No new image was generated, downloaded into the repository, cropped or converted. The existing remote Wikimedia `Special:FilePath` width parameter is retained.
- Commons file pages and licenses were rechecked on 2026-11-20 for the PNU gate, tonkatsu, chicken and milmyeon files. The shared `assets/data/image-credits.json` was deliberately not changed because open Draft PRs [#588](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/588) and [#586](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/586) also edit that registry; apply these four `checked_on` updates after those branches are reconciled. No WebP/AVIF conversion, responsive srcset, social-platform crop test, image-byte measurement or LCP/CLS measurement was performed.

## Changes in this branch

1. Add a concise answer-first route block to EN / JA / zh-TW: Metro Line 1, Exit 3, the gentle uphill student street, each page's actual list size, and a clear caveat that current restaurant prices / menus / hours / queue methods are not verified live.
2. Link the official Visit Busan area guide in each locale.
3. Align EN title, meta, OG, Twitter and Article JSON-LD to six picks; fix the visible and structured FAQ to say six and include Gaya Park Dwaeji Gukbap.
4. Add a licensed, attributed PNU image section to EN and align its OG/Twitter image with the page subject.
5. Clarify the 2008 archival date and correct the campus photo's intrinsic dimensions in JA / zh-TW.
6. Record image rights and attribution in this research note; defer the shared registry edit to avoid overlap with open PRs #588 and #586.

No prices, opening hours, wait estimates, restaurant branches, URLs, affiliate links, analytics events, SNS schedules or booking claims were changed.

## SEO and user-value hypothesis

The existing zh-TW page already ranks around position 4.6 for the owner-reported query. A clear answer near the top can help visitors understand where the student street starts, what the guide covers and what still needs checking before they leave. Consistent EN title / meta / social copy / FAQ removes a trust-breaking count mismatch. This is a testable hypothesis, not a guaranteed CTR increase.

## Validation and remaining risk

- Source HTML and metadata were checked from the current `main` branch before editing.
- Local build / audit execution was unavailable because the working environment could not resolve GitHub for a repository checkout. The draft PR's exact-head GitHub CI must be used as the automated validation gate.
- No real browser screenshot QA was performed at 360 / 390 / 1280 px. No Lighthouse, LCP / CLS, image transfer, mobile crop, social preview or custom-domain live-version test was performed.
- The public custom domain and `/version.txt` endpoint were not independently fetchable in this run. Render API reports the current production deploy as live on the current main SHA; that does not substitute for a direct custom-domain version fetch.
- `assets/data/image-credits.json`, `STATUS.md` and `HANDOFF.md` are intentionally not changed in this PR because other open Draft PRs overlap those shared files; reconcile those branches before updating them.
- Do not merge or deploy until exact-head CI and responsive visual review pass and the owner gives per-PR approval.
