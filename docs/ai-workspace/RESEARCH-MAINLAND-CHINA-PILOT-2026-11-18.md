# Mainland China market pilot — Go2Busan

Checked: 2026-11-18
Status: discovery and planning; no production changes

## 1. Market decision

Mainland China is an active expansion pilot for Go2Busan, separate from the existing Taiwan Traditional Chinese market. The proposed language path is /zh-cn/ with HTML language zh-CN. Taiwan remains /zh-tw/ and zh-Hant-TW.

The existing zh-TW homepage is explicitly Taiwan-facing: it includes a Taiwan traveler feature, Taiwan-specific copy and Traditional Chinese navigation. Reusing it without a full localization pass would create an inaccurate experience.

## 2. Search and discovery

### Baidu

Baidu Search Resource Platform is the primary operational search target for mainland discovery. Its official documentation describes site ownership verification by file, HTML tag or DNS/CNAME; ordinary inclusion through API, sitemap or manual URL submission; crawl diagnostics, robots tools, index and keyword reporting.

Important limits:
- URL submission is not a guarantee of indexing or ranking.
- Sitemap and rapid-crawl capabilities may depend on site/account eligibility and quota.
- The platform owner must verify the domain and authorize any external submission.

Official references:
- Platform tool manual and site verification: https://ziyuan.baidu.com/college/courseinfo?id=267
- Resource submission tool guide: https://ziyuan.baidu.com/college/articleinfo?id=3329
- Search Resource Platform: https://ziyuan.baidu.com/site/index
- Search guidance and quality documentation: https://ziyuan.baidu.com/doc

### Bing and Google

Bing can be treated as a secondary channel and measured independently. Google should not be treated as the default search route for ordinary mainland-network users. Do not assume one search-engine share estimate is definitive: third-party panels vary by device, month and methodology. Any market-share figure used publicly must be dated and sourced.

Directional external references reviewed:
- StatCounter China search-engine host chart: https://gs.statcounter.com/search-engine-host-market-share/all/china/2025
- October 2026 market-share compilation using StatCounter: https://indexinchina.com/search-engines/market-share/

These third-party estimates are not official government statistics and are not a substitute for Go2Busan referral data.

## 3. Social discovery

Initial channel priority:
1. Xiaohongshu (小红书): photo-led discovery, saves, neighborhood guides, food and itinerary notes.
2. Douyin (抖音): short-form visual storytelling for beaches, night views, cafes and route highlights.
3. WeChat (微信): sharing and follow-up distribution after a useful content base exists.

Start with a 15-day draft calendar and a consistent visual system. No automatic publishing, account creation, paid placement or platform integration until the owner explicitly approves access and publishing.

## 4. Content pilot

Proposed first 5–8 pages:
1. Mainland visitor first-trip guide to Busan.
2. Gimhae Airport to Seomyeon / Haeundae: route choice and arrival basics.
3. Busan transport cards, transit and payment options.
4. Where to stay: Seomyeon vs Haeundae vs Nampo vs Gwangalli.
5. Busan local food by neighborhood, including ordering and payment tips.
6. Three days in Busan with realistic area grouping.
7. Busan map and essential navigation tools.
8. A seasonal guide only when dates and programme details are officially confirmed.

Do not bulk-translate the full catalogue. First-party details, local venue identity, Korean place names for map lookup, current dates and reader intent must be reviewed page by page.

## 5. Mainland-specific visitor utility checks

Before publishing, verify with primary sources:
- Alipay and WeChat Pay setup, foreign-card eligibility and practical limitations;
- map and navigation choices (Amap / Gaode, Baidu Maps, Korean map alternatives);
- mobile data, eSIM, roaming and access to overseas services;
- transport card purchase/reload and accepted payment methods;
- booking and customer-service access for international visitors;
- whether Go2Busan pages, images, fonts, analytics, embedded maps and third-party scripts load reliably from mainland networks.

Never assume Taiwan payment, app, map or travel conventions apply to mainland visitors.

## 6. Technical rollout

- Keep the existing domain and begin with /zh-cn/; do not change hosting or DNS during the pilot.
- Add reciprocal hreflang="zh-CN" only when a real, complete zh-CN counterpart exists.
- Ensure canonical URLs point to each zh-CN page itself.
- Update sitemap, internal language switch, directory, search index and JSON-LD together.
- Test Baiduspider access, robots rules, TLS, page rendering and performance. Keep essential content in server-rendered/static HTML; do not rely on client-only rendering.
- Check whether externally hosted fonts, analytics, map embeds and image CDNs are reachable. Prefer graceful fallbacks and avoid blocking core content.
- Do not create a separate China-hosted domain, ICP filing or CDN contract without a separate legal, technical and cost review and explicit approval.

## 7. Measurement and gates

Baseline before launch:
- mainland network availability and page-load reliability;
- Baidu site verification and crawl diagnostics;
- eligible submitted URLs and actual indexed URLs;
- visits/referrers by source and geography;
- engaged sessions, guide progression and affiliate CTA clicks;
- partner bookings/revenue separately from click events.

Expansion gate:
- no mass translation until the pilot demonstrates stable access, editorial quality and measurable audience signals;
- review after the first 30–60 days of live data;
- preserve Taiwan's existing editorial and SEO investment.

## 8. Current gaps

- No /zh-cn/ directory exists on the inspected main branch.
- No Baidu ownership verification or search submission was performed.
- No mainland-network browser test was run.
- No Xiaohongshu / Douyin / WeChat account access or posting was performed.
- No current mainland visitor analytics were queried.
- No production page or hosting configuration was changed.