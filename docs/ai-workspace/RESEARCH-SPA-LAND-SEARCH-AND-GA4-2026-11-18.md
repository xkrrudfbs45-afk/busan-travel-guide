# Spa Land Search Intent and Measurement Review

Date: 2026-11-18
Branch: `seo/spa-land-ticket-intent-20261118`
Base: `77e0ce0f7120b9ca0941f3a24db80bb0d85cd4fd`

## Search Console evidence

Property: `sc-domain:go2busan.com`
Window: 2026-10-20 to 2026-11-16 (Pacific Time; recent days may be incomplete).

The English Spa Land guide recorded 152 impressions, 1 click, 0.66% CTR and average position 18.66 in the 28-day joined opportunity report. A separate three-month query report for this page surfaced:
- `busan spa land ticket`: 1 impression, average position 5.
- `spa land busan opening hours`: 1 impression, average position 12.
- `spa land centum city opening hours`: 1 impression, average position 17.
- `spa land busan`: 5 impressions, average position 67.8.

These are low-volume query signals. The title update is a measured relevance test, not a claim of stable demand or guaranteed ranking improvement.

## Changes in this PR

Only the English Spa Land guide's title, meta description, Open Graph/Twitter text, Article JSON-LD headline/description, H1, introductory deck and source-check date were updated:
- Put the ticket intent before price and hours in the title.
- State ticket prices, opening hours, last admission, four-hour limit and luggage storage in the description.
- Align the H1 and social metadata with the actual guide content.
- Correct the end-of-article source-check date from 3 November to 16 November 2026, matching the hero metadata and official check date.
- No URL, ticket destination, affiliate parameters, ticket prices, hours, photos, analytics scripts or event definitions were changed.

## Source verification

- Shinsegae official Spa Land page confirms 09:00–22:00, last admission 21:00, adult KRW 26,000, student KRW 21,000, four-hour standard stay, KRW 5,000 per extra hour, eligible in-facility spend extension to six hours, and luggage storage fees/rules.
  https://deptmapp.shinsegae.com/store/entertainment/centum-spaland.do
- Visit Busan official Spa Land article provides current visitor context and notes about luggage lockers.
  https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302008001000&uc_seq=1753

The current English page's facility facts were not changed in this PR; only the stale source-check date was aligned with the already published hero metadata.

## GA4 measurement review

Connected GA4 property: `properties/561839877`, web stream `G-JCYV49BXQZ`, stream created 2026-11-02.
- Measurement health reports one web stream, two key events (`purchase`, `affiliate_click`) and no configuration issues.
- 2026-11-02 to 2026-11-16: 67 sessions / 8 active users across all channels; 46 Direct, 15 ChatGPT AI Assistant, 4 Unassigned, 1 Organic Search and 1 Organic Social.
- Country report returned South Korea only (8 active users); device report: 58 desktop sessions and 9 mobile sessions.
- `affiliate_click` recorded 5 key events by 2 users, all attributed to the homepage in the event/landing-page report. No purchase transactions or purchase revenue were reported.
- The period is too small and likely includes project-owner/testing visits; do not treat it as international visitor demand or conversion baseline. The stream was created on Nov 2, so data before that date should not be interpreted as complete coverage.
- Source/medium report flagged 4 sessions (6.0%) as `(not set)`; this is a small attribution hygiene item to monitor, not evidence of a broken GA4 installation.

No analytics configuration or key-event settings were changed in this PR. Next measurement step is to accumulate a clean post-Nov-2 baseline and verify affiliate clicks from real visitors before drawing market conclusions.

## QA / release

- Run static build and technical SEO workflow on exact PR head before merge consideration.
- No responsive browser QA screenshots were available in this pass; visual checks at 360 / 390 / tablet / desktop remain outstanding.
- Draft PR only. No merge or production deployment.


## CTR follow-up — 2026-11-20

### Why this second snippet pass

Owner-priority issue [#589](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/589) reports the English Spa Land page at 170 impressions, 1 click and average position 18.7 in the 28-day GSC window ending 2026-11-17. The earlier [PR #546](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/546) already improved the English title and description, but the current title still does not expose the exact adult price or four-hour allowance. This pass makes those concrete answers visible across EN / JA / Taiwan Traditional Chinese. The sample remains small; this is a snippet relevance test, not a ranking or CTR guarantee. No new GSC or GA4 query was run in this recurring pass.

### Community signals checked

- **Taiwan / Dcard:** [2026 six-day, five-night Busan trip report](https://www.dcard.tw/f/travel/p/262207137) has 20K+ views in the public crawl. Its day-one plan arrives at Gimhae at 06:05, reaches Spa Land before its 09:00 opening, uses a four-hour ticket, stores luggage at the counter and combines the visit with Shinsegae shopping. The crawl did not expose the post's exact publication date; views are a discovery signal, not a population-level demand measure.
- **Taiwan / Dcard:** [Spa Land first-person guide](https://www.dcard.tw/f/travel/p/260663096) shows 10K+ views. It covers Line 2 access, the four-hour rule, luggage limits and the electronic wristband. Its displayed ticket and overtime prices are outdated versus the operator's current page and were not reused.
- **Taiwan / PTT:** [2020-07-06 Spa Land trip report](https://www.ptt.cc/bbs/Korea_Travel/M.1594044454.A.856.html) and [2020-02-09 report](https://www.ptt.cc/bbs/Korea_Travel/M.1581228684.A.891.html) describe the four-hour format, wristband settlement and luggage handling. Historical context only; old hours and prices were excluded.
- **Japan / 4travel:** [2026-07-10 to 13 first-Busan trip](https://4travel.jp/travelogue/12062645) includes Spa Land on July 12 and shows a current leisure/shopping itinerary context (34 likes visible at crawl). [2026-09-26 to 30 itinerary](https://4travel.jp/travelogue/12077145) also includes Spa Land on September 29. No direct, recent Spa Land-specific Yahoo!知恵袋 question surfaced in indexed public results.
- **English / Reddit:** [2025-02-20 question](https://www.reddit.com/r/koreatravel/comments/1iu85dc) asks what the admission includes and whether four hours is the limit; replies distinguish included bath/sauna access from separately charged food and treatments. The thread had one vote at crawl and is a question signal, not a representative sample. [2025-06-25 luggage question](https://www.reddit.com/r/koreatravel/comments/1lkg46c) asks about visiting before check-in with a 28-inch suitcase; replies discuss luggage storage and an alternative at Busan Station, including one anecdote that suitable lockers were full.
- **Korea / public customer reviews:** NOL's [September listing](https://leisure-web.yanolja.com/leisure/10361844) showed 14 reviews; its [October listing](https://leisure-web.yanolja.com/leisure/10369919) showed 22 reviews, with visible review dates including 2026-10-08, 2026-09-24 and 2026-09-15. Repeated themes in the platform summary include cleanliness, indoor rest and facilities. These are OTA customer reviews, not independent community samples. Naver Blog retrieval was blocked by robots policy; no bypass was attempted. No relevant recent public Theqoo / Clien / Ppomppu post or YouTube comment thread surfaced in indexed results.
- **Yahoo!知恵袋:** searches returned general Busan itinerary and sauna questions, but no direct Spa Land-specific question in this pass.

The cross-market practical question is consistent: can a visitor use Spa Land before hotel check-in, how long is included, and where can a large suitcase go? The existing guide already answers these; no duplicate page or new body section is warranted.

### Official facts and source conflict

- [Shinsegae Spa Land official page](https://www.shinsegae.com/store/entertainment/centum-spaland.do), checked 2026-11-20, lists 09:00–22:00, last admission 21:00, adult KRW 26,000, student KRW 21,000 (birth years 2008–2019), up to four hours, KRW 5,000 per extra hour, and up to six hours when qualifying in-facility spend reaches KRW 10,000 excluding admission. It also says large suitcases cannot enter the internal locker room; separate luggage storage is KRW 3,000 for the first five hours and KRW 1,000 per additional hour.
- [Visit Busan's official Spa Land feature](https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302008001000&uc_seq=1753) mentions luggage lockers and the four-hour / spend-extension rules, but its page currently displays 08:00–23:00. This conflicts with the operator's current 09:00–22:00 / 21:00 last-entry information. The operator page is used for the snippet; the Visit Busan hours are not repeated.
- [Klook's US-market ticket listing](https://www.klook.com/en-US/activity/33180-spa-land-centum-city-ticket-busan/) is a structural benchmark only: it foregrounds the four-hour ticket, suggested 3–5-hour visit, validity and conditions. Its current page also displays 08:00–23:00 / last entry 22:00, conflicting with the operator's current 09:00–22:00 / last entry 21:00; those Klook hours were not copied. A public review dated 2026-11-18 describes arriving after a red-eye before hotel check-in, paid luggage storage at the registration area and extra charges for in-facility services. This is one customer account, not a general rule. No Klook price, rating, review count or booking count was copied into Go2Busan copy.

### Snippet before / after

- **EN title:** `Busan Spa Land Tickets, Price & Hours | Go2Busan` → `Busan Spa Land: ₩26,000, 4-Hour Limit & Hours | Go2Busan`
- **EN description:** generic ticket / hours / luggage summary → explicit adult price, four-hour allowance, overtime rate, 09:00–22:00 hours and 21:00 last entry.
- **JA title:** `釜山スパランドの料金・営業時間・行き方｜チムジルバン入門 | Go2Busan` → `釜山チムジルバン「スパランド」｜大人26,000ウォン・4時間制 | Go2Busan`
- **JA description:** general first-visit explanation → adult price, standard four hours, overtime, opening hours and final entry.
- **zh-TW title:** `釜山汗蒸幕推薦｜Spa Land 門票、交通與行李寄放攻略 | Go2Busan` → `釜山汗蒸幕推薦：Spa Land 門票26,000韓元、4小時限制 | Go2Busan`
- **zh-TW description:** general itinerary / luggage overview → adult price, four-hour limit, overtime, opening hours, last entry, luggage storage and metro access.

### Image / technical review

- The current hero is a photo of the Shinsegae Centum City building that houses Spa Land, not an interior Spa Land photograph. The visible caption and alt text accurately describe the building. The page credits Modamoda / Wikimedia Commons under CC BY-SA 3.0; no image was replaced.
- Source HTML declares 1200×900 intrinsic dimensions and `loading="lazy"`. It uses a Wikimedia Special:FilePath JPEG URL; WebP/AVIF transfer size, responsive crop, mobile crop at 360 / 390 / 1280, social-preview crop and LCP / CLS were not measured in this pass. Because the image appears near the top of the article, lazy-load priority deserves a separate image-performance check under existing issue [#384](https://github.com/xkrrudfbs45-afk/busan-travel-guide).
- No body copy, H1, OG/Twitter tags, JSON-LD, canonical, hreflang, sitemap, URL, image, image credit, affiliate destination / ID, CTA, analytics, GA4 setting or SNS schedule was changed. OG/Twitter and Article metadata remain a separate technical follow-up after this snippet is approved.

### Validation / release boundary

- Exact-head Technical SEO workflow must pass on this branch before review.
- Real browser QA at 360 / 390 / 1280 and Lighthouse / image-byte measurement were not performed; do not mark those checks complete.
- Draft PR only. No merge, production deploy, Search Console re-index request, affiliate change or SNS post / schedule change.
