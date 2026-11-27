# Research — Hwangnyeongsan night-view return links (2026-11-26)

## Decision and scope

- Deepen the existing night-view guide and its three language hubs; do not create a new URL.
- The owner’s new-guide pause in issue #613 remains in force. A full Japanese night-view counterpart is deferred. The Japanese Things-to-Do hub now clearly labels a fallback link to the English detailed guide and also links to the existing Japanese taxi-fare guide.
- The existing EN and zh-TW detailed night-view pages now link to the existing taxi guides. No booking/affiliate, analytics, social, sitemap, canonical, hreflang or URL changes.

## Community signals (small qualitative samples; not demand estimates)

### Taiwan
- Dcard, 「#討論 #請益 #釜山 荒嶺山夜景交通問題」: https://www.dcard.tw/f/korea_travel/p/242445610
- The page showed 3 likes and 12 comments in the retrieved view; publication date was not surfaced. The original question asks about a return taxi, whether a driver might wait, walking downhill after dark and Korean-language communication. Replies independently mention trying a ride-hailing app, uncertainty and dark walking conditions. Treat this as a single thread, not representative demand.

### English
- Reddit r/koreatravel, 2024-10-12: https://www.reddit.com/r/koreatravel/comments/1g1w4bm/difficult_getting_a_cab_up_and_down_hwangnyeongsan/
- Reddit r/KoreaTravelAdvice, 2026-03-25: https://www.reddit.com/r/KoreaTravelAdvice/comments/1s3j9m1/hwangnyeongsan_beacon_busan/
- Reddit r/KoreaTravelAdvice, 2026-07-21: https://www.reddit.com/r/KoreaTravelAdvice/comments/1v2jhcn/hwangnyeongsan/
- These small threads repeat the practical uncertainty around taxi access and the return journey; no broad demand or reliability claim is made.

### Japan and Korea
- Searches of 4travel and Yahoo!知恵袋 did not surface a current, relevant Hwangnyeongsan return-transport discussion in this run.
- PTT surfaced general Busan itinerary and transport-planning threads, but not a specific Hwangnyeongsan return question. Relevant local reporting was found instead; no current Naver blog/cafe, DC Inside, theqoo, Clien or public Instagram/YouTube post was sufficiently verified for this topic in this run.

## Cross-checks

- Visit Busan official Hwangnyeongsan Viewing Lounge page, checked 2026-11-26: https://www.visitbusan.net/kr/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=371
  - Metro Line 2 Geumnyeonsan Station Exit 6 → taxi, about 10–15 minutes.
  - Metro Line 1 City Hall Station Exit 6 → Yeonje-gu 1 village bus → Mulmangol terminus → uphill walk (official estimate about 20 minutes).
  - These are published route estimates, not guarantees. Check current access and return service.
- KNN, 2026-10-19: https://news.knn.co.kr/news/article/193366 — public transport, taxi-return and facility limitations reported.
- KNN, 2026-10-28: https://news.knn.co.kr/news/article/193735 — traffic congestion and proposed responses reported.
- Yonhap, 2026-11-15: https://www.yna.co.kr/view/AKR20261113152900051 — transport/access and visitor-facility limitations; mentions tour/hotel transport initiatives. Do not infer current shuttle availability from the article.

## Competitor structure, not copy

- Hantabi, updated 2026-11-15: https://hantabi.org/en/korea/articles/busan-hwangnyeongsan-night-view — separates access and return, presents alternatives and FAQs.
- Welcome Busan, updated 2026-11-25: https://welcome-busan.com/guide/attractions/hwangnyeongsan-observatory-guide/ — concise route summary and navigation links.
- Breeze Korea: https://breezekorea.com/hwangnyeongsan-night-view/ — answer-first access and return summary.
- Busan-trip: https://www.busan-trip.com/guides/hwangnyeongsan-night-view/ — route and comparison framing.
- Their structure offers useful patterns, but volatile times, fares, shuttle claims and wording were not copied.

## Image audit (no image change)

- EN night-view page: Busan_Gwangalli_Night.jpg — CC BY 2.0, registry checked 2026-11-25; caption/credit retained.
- EN night-view page: Busanhang_Bridge_taken_from_Yeongdo.jpg — CC0 1.0, registry checked 2026-11-04.
- zh-TW OG image: Gwangan_Bridge1.jpg — Public Domain Mark, registry checked 2026-11-04.
- These existing assets remain unchanged. Visual crop, browser rendering, image HTTP/MIME and mobile screenshot checks were not performed.

## Changes in this PR

- EN / JA / zh-TW Things-to-Do hubs: add a contextual link to the detailed night-view/return guide; JA link is explicitly labeled as the English fallback because the Japanese detailed counterpart is deferred.
- EN / zh-TW detailed night-view pages: link to the corresponding existing taxi guide for meter, late-night surcharge and 1330 context.
- No new page, image, affiliate placement, analytics, social posting, title/meta, canonical, hreflang, sitemap or URL change.

## QA limits

- Source-level replacements were checked against the current branch files; no duplicate insertion.
- Local build and full repository audits could not be run because GitHub is not reachable from the container environment.
- Browser QA at 360 / 390 / 1280, custom-domain response, image HTTP/MIME and live `version.txt` SHA were not verified. PR CI is the next check.
- No GA4/GSC query, SNS audit, merge or deployment was performed.
