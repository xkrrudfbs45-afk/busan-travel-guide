# zh-TW food guide internal-link count consistency — 2026-11-20

## Scope and decision

- Baseline main: `13c1182cb60065673a9ea1bd6ccd4f7fab2888b6`.
- Existing target: [釜山在地美食地圖：28家老店、市場小吃與在地餐廳](https://go2busan.com/zh-tw/guides/busan-newspaper-food-picks/).
- PR #564 was merged on 2026-11-19. It aligned the target page's title, meta, OG, Twitter, Article JSON-LD and visible H1/deck to 28 entries and replaced the unrelated bridge share image with a rights-checked Bupyeong Kkangtong Night Market food-vendor image.
- A repository-wide exact-phrase search on 2026-11-20 found exactly two remaining stale internal-link labels that still said 25: one in the pork-soup awards guide and one in the neighborhood-food guide.
- Changed only those two anchor labels to the current page name: “釜山在地美食地圖：28家老店、市場小吃與在地餐廳”.
- Re-searched the exact stale phrase; no further page-level occurrences were returned. No URL, canonical, hreflang, sitemap, search-index, content count, price, opening-hour, venue recommendation, affiliate CTA, analytics or SNS setting changed.

## Community research — qualitative signals only

### Taiwan
- [Dcard: 人生不會都在深山，有時候會在釜山（4天3夜美食分享）](https://www.dcard.tw/f/food/p/261335661): the visible page describes a four-day / three-night food-focused Busan trip and includes pork soup on arrival. The search excerpt did not expose a reliable publication date; do not use it as a dated trend or a traffic estimate.
- [PTT Korea_Travel: 釜山豬肉湯飯推薦](https://www.ptt.cc/bbs/Korea_Travel/M.1768887262.A.816.html), 2026-01-20: a first-time visitor asks about pork-odor sensitivity. Replies differ on individual shops and preferred broth; comments continue with additional suggestions. This is evidence that taste expectations vary, not a consensus ranking.
- [PTT Korea_Travel: 西面豬肉湯飯一條街／松亭3代](https://www.ptt.cc/bbs/Korea_Travel/M.1745458709.A.E96.html), 2025-04-24: one family travelogue describes rice, chives, salted shrimp and spicy seasoning as optional ways to adjust the soup. This is older firsthand-style reporting and is not used for current prices or opening hours.

### Japan
- [4travel: 2026年4月 韓国・ミシュランを獲得した釜山のソウルフード・デジクッパ店](https://4travel.jp/travelogue/12044109), 2026-04-03 to 2026-04-08: a food-focused trip report describes visiting four pork-soup restaurants. It is one travelogue, not an independent quality ranking.
- [4travel: 食べ歩きぷさんぽ②](https://4travel.jp/travelogue/12075416), 2026-09-18 to 2026-09-20: a three-person Busan trip includes dwaeji-gukbap and Gamcheon. The excerpt gives itinerary context, not a restaurant endorsement.
- No sufficiently relevant recent Yahoo!知恵袋 question surfaced in this pass.

### English-language communities
- [Reddit r/KoreanFood: Can’t leave Busan without having this](https://www.reddit.com/r/KoreanFood/comments/1vul8j5/cant_leave_busan_without_having_this/), 2026-08-21: the post shows Busan pork-and-rice soup and the comments ask what the dish is and how to season it with salted shrimp. The post had 223 votes when surfaced; votes are not a market-size estimate.
- [Reddit r/SouthKoreaTravel: Busan Food](https://www.reddit.com/r/SouthKoreaTravel/comments/1ry2a2k/busan_food/), 2026-03-19 with replies through 2026-03-30: commenters ask whether pork soup is easy to eat and whether it is too heavy; replies describe different personal experiences. Treat this as a practical question signal, not a consensus.

### Korean public sources
- Searches of publicly indexed TheQoo, Clien, Ppomppu and DC Inside discussions did not surface a recent independent first-person thread that justified changing the food guide's recommendations in this pass.
- A [2026-09-29 Wikitree report](https://issuefeed.dcinside.com/content/2336111) summarizes the Busan pork-soup contest. It is local-event/news context, not a community discussion or a source for individual restaurant claims.
- Naver Blog search results were blocked by robots.txt. No login or access-control bypass was attempted.

## Official / editorial verification

- This patch introduces no new operational fact. The only corrected fact is the target guide's already-published count of 28, verified against its 28 H3 entries and current H1 / title / metadata / social metadata / Article JSON-LD on main.
- The target food guide's existing image is the Bupyeong Kkangtong Night Market food-vendor atmosphere photograph by Christophe95, dated 2018-09-27, licensed CC BY-SA 4.0. PR #564 records the Commons file-page recheck on 2026-11-19 and visible attribution. This patch does not alter the image or its credit.
- Restaurant first-hand status, menu, price and opening-hour claims were not changed.

## Competitor and UX observation

- Public competitor pages such as [Busan 101's arrival guide](https://www.busan101.com/en/arrival/) use a scannable task sequence and concrete transfer choices; [Busan.net's winter guide](https://busan.net/en/guide/busan-winter-lights/) uses an event-at-a-glance structure and area-based route context. No wording, image or layout was copied, and no competitor-driven change was justified for this narrow count-label correction.
- Keeping internal link labels consistent with the destination's current 28-item title reduces a small but avoidable trust mismatch for Taiwan-language readers.

## Validation and remaining QA

- Source-level check: the exact stale phrase occurred once in each of the two target files before the edit; both were changed to the current 28-item label.
- A second repository search for the stale phrase returned no additional page-level occurrences.
- No new image, URL, metadata, canonical, hreflang, sitemap, structured data, affiliate, analytics or social change.
- Full static build and the repository's complete Technical SEO audit suite were not executed in this run; rely on the exact-head GitHub Actions result if it runs on the PR. If no run is attached, keep the PR Draft and request the repository audit before review.
- Real-browser QA at 360 / 390 / 1280 px was not performed. The edit changes anchor text only, but this must not be described as visual QA.
- No merge, production deployment or SNS publication was performed.
