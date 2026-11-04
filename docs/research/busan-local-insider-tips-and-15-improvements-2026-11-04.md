# Go2Busan: 15 Product Improvements & Community Research
Date: 2026-11-04
Scope: English, Japanese and Traditional Chinese travel guides for international visitors.

## North-star outcome
Make Go2Busan a practical first stop when an international visitor is planning a Busan trip: help them decide where to go, how to get there, what to eat, what to check before paying, and where to find current official information.

## 15 prioritized improvements

| # | Priority | Improvement | Why it matters | Status / implementation note |
|---|---|---|---|---|
| 1 | P0 | Publish a multilingual “local travel tips” hub | Converts scattered local knowledge into a useful entry page | Implemented in this branch: EN/JA/zh-TW pages |
| 2 | P0 | Link the tips hub from first-time visitor guides | Makes the new content discoverable through internal links | Implemented in this branch |
| 3 | P0 | Add localized hreflang entries to the XML sitemap | Helps crawlers discover the language versions | Implemented in this branch; run the site SEO audit before merge |
| 4 | P0 | Make community sourcing transparent | Prevents anecdotes being mistaken for official rules | Source notes included in the new guide; retain this editorial policy |
| 5 | P1 | Complete the guide directory | Avoid orphan pages and improve crawlable discovery | Already covered by open PR #141; coordinate rather than duplicate |
| 6 | P1 | Improve homepage food discovery by intent | Visitors need local favorites, food by neighborhood, or famous restaurants with queue planning | Already covered by open PR #140 |
| 7 | P1 | Fix social previews on high-value guide pages | Better link previews when guides are shared | Already covered by open PRs #142 and #143; check for overlap before merging |
| 8 | P1 | Finish Pusan National University food-guide choices | Makes local favorites and a queue-heavy famous shop easier to distinguish | Already covered by open PR #139; check latest CI |
| 9 | P1 | Add route-aware trip planning | Group places by neighborhood and include walking, hills, transfers and return route | Next product feature; avoid pretending a static itinerary is live routing |
| 10 | P1 | Add “last checked” timestamps to volatile details | Visitors need to know when fares, hours, pass terms and transport notices were reviewed | Add only where a real verification date is recorded |
| 11 | P1 | Add Korean-name copy helpers for places | Helps visitors paste Korean names into local map apps and show addresses to drivers | Add accessible copy controls with a visible success state |
| 12 | P1 | Expand “before you order” price-transparency guides | Practical market guidance is highly saveable and shareable | Jagalchi guide exists; apply the same editorial pattern only to verified needs |
| 13 | P2 | Build a restaurant queue decision pattern | Explain reservation, on-site waiting, remote queue and nearby alternatives without assuming all shops work alike | Create only with shop-specific, current evidence |
| 14 | P2 | Improve accessibility and last-mile information | Hills, stairs, luggage and stroller routes can change whether a plan is practical | Link verified accessibility sources; never infer elevator access from a map image |
| 15 | P2 | Measure guide discovery and outbound clicks by language | Shows which topics and languages create actual site use, not just impressions | Reuse existing analytics hooks/events; avoid duplicate event names |

## Community research: recurring visitor pain points

### Map apps and Korean place names
Public travel discussions repeatedly mention differences among Google Maps, Naver Map and KakaoMap, including search and transit details. Editorial response: recommend saving a place's Korean name and address, comparing routes when a result looks odd, and keeping a screenshot. Do not claim one app is always best for every task.

Sources:
- Reddit, Busan map app discussion: https://www.reddit.com/r/BusanTravelTips/comments/1vosh7t/
- Reddit, general Korea travel app tips: https://www.reddit.com/r/koreatravel/comments/1lzfvjv/

### Taxi estimates and payment fallback
Community posts recommend checking an estimated fare and route before riding; other posts describe overseas-card registration problems in some taxi apps. Editorial response: explain the meter phrase “미터기로 가주세요”, suggest checking the app's current payment options, and carrying a backup payment method. Do not reproduce unverified fare figures or present a single app workaround as guaranteed.

Sources:
- Reddit, Busan transport and taxi-app experiences: https://www.reddit.com/r/koreatravel/comments/1vw53uq/
- Reddit, reports about taxi fare concerns: https://www.reddit.com/r/koreatravel/comments/1u71un9/

### Local food tips from Korean communities
A DCInside post by a self-described long-term Busan resident mentions dishes and neighborhoods including dwaeji-gukbap, milmyeon, eomuk, Dongnae pajeon, kkomjangeo and nakgopsae. Editorial response: treat it as a lead for further reporting, not a verified ranking or endorsement. Check each restaurant's current existence, location, menu, price, operating hours and image rights before publishing.

Source:
- DCInside community post: https://gall.dcinside.com/mgallery/board/view/?id=gbcry11&no=455237

### Market ordering and queue planning
Visitor-facing content should explain what to ask before committing to a seafood order—species, weight/quantity, price, preparation, table-setting fee and other charges—without implying every merchant uses the same structure. For queues, verify each restaurant's actual waiting or reservation method; never assume a shop uses a particular app.

Relevant existing Go2Busan content:
- https://go2busan.com/guides/jagalchi-market-no-surprise-bill/
- https://go2busan.com/guides/busan-neighborhood-food-guide/
- https://go2busan.com/guides/busan-transit-card/

## Editorial rules for community-sourced “local hacks”
1. Use community posts to discover questions and leads, not as the sole authority for changing facts.
2. Paraphrase insights; do not copy long passages, images, usernames or personal details into Go2Busan.
3. Label the source type and date checked internally.
4. Cross-check prices, schedules, fares, app features, opening hours and rules with official or directly responsible sources.
5. For restaurant recommendations, distinguish firsthand editorial visits, public-vote results, community tips and paid/affiliate placements.
6. Avoid absolute claims such as “locals always use this”, “best in Busan”, “scam-proof” or “guaranteed cheapest”.
7. If a tip cannot be verified, publish it only as a clearly attributed anecdote or omit it.
8. Never reuse community images without a license or permission.

## Validation checklist for this branch
- Confirm each localized page has a unique title, description, canonical URL and correct hreflang links.
- Confirm the sitemap contains all three new canonical URLs and language alternates.
- Confirm first-time guides link to the matching localized tips page.
- Run the repository's existing SEO, link, image-credit and build checks in CI.
- Review the mobile rendering of all three pages.
- Do not claim production deployment until the deployment system confirms it.
