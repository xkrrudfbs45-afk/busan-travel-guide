# Go2Busan: 90-Day Organic Growth Plan
Last updated: 2026-11-02
Owner: Product / SEO / Organic Marketing
Budget: KRW 0 paid media

## Objective
Reach the first 1,000 cumulative human visitors to https://go2busan.com/ without paid advertising. Treat 1,000 as a goal, not a forecast or guarantee. Use a 90-day window because organic search usually compounds more slowly than paid traffic.

## Baseline and known constraints
- The site has practical English-language guides covering airport arrival, where to stay, public transport, a three-day itinerary, luggage storage, KTX, Visit Busan Pass, local food, Jagalchi Market, Zimcarry, and a timely North Port shark story.
- Sitemap and robots.txt exist; canonical URLs and internal links are used.
- Pinterest save/share links exist, but this is not evidence that pins have been published to an account.
- Repository search did not find a Google Analytics tag or Search Console verification token. Search Console was reportedly verified and submitted by the owner, but the live property data has not been retrieved in this workflow. GA4 reporting cannot be configured until the owner supplies a measurement ID or grants access.
- Render HTTP request metrics returned no data, so do not treat Render as an analytics source.
- No paid advertising.

## Target channel mix (planning allocation, not a forecast)
- Organic search: 450 visitors
- Pinterest: 150 visitors
- Relevant communities / helpful referrals: 200 visitors
- Direct, partner, and other referrals: 200 visitors
These are directional allocations only. Reallocate effort based on measured results after the first 30 days.

## Weeks 1–2: Remove friction and create a measurement baseline
1. Check Search Console for indexing, impressions, clicks, queries, CTR, and pages. Export the last 28 days and keep a dated baseline.
2. Ensure the sitemap contains every indexable guide and submit it only if not already submitted.
3. Configure GA4 or another privacy-appropriate analytics tool once a valid property/measurement ID is available. Track page views and outbound affiliate clicks; do not fabricate an ID.
4. Check every existing page for unique title/description, canonical, one clear H1, relevant internal links, functioning external links, mobile layout, and image alt text.
5. Prioritize existing pages already receiving impressions; improve the title/snippet and answer the query earlier in the article.

## Weeks 3–4: Publish and connect high-intent content
1. Publish the dedicated Gimhae Airport-to-Haeundae route guide.
2. Add contextual internal links between airport, accommodation, transport-card, three-day itinerary, and luggage pages.
3. Build one useful Pinterest creative per strong visual angle: airport route decision, Seomyeon vs. Haeundae, three-day itinerary, local food, and luggage planning. Each pin must point to the matching canonical guide.
4. Publish 2–3 original pins per week. Use a clear promise and legible text; do not create repetitive near-duplicate pins.
5. Share only where relevant and permitted. Answer questions first; include a link only when it directly helps. No mass posting, scraping, or unsolicited spam.

## Weeks 5–8: Learn from query and referral data
1. Review Search Console weekly. For pages with impressions but low CTR, test clearer titles and descriptions.
2. For queries with impressions but no matching page, add a section to an existing article or create a new guide only when the intent is distinct.
3. For pages with clicks but weak engagement, improve the opening answer, table of options, related links, and mobile readability.
4. Publish two additional guides selected from actual Search Console query gaps, not guesswork. Candidate themes: Busan Station to Haeundae; Busan luggage storage by arrival/departure situation.
5. Continue Pinterest at a sustainable pace; judge it by outbound clicks, not impressions alone.

## Weeks 9–12: Concentrate on winners
1. Identify the top three pages by organic clicks and the top three by affiliate outbound clicks.
2. Expand successful pages with original details, clear comparisons, official source links, and relevant FAQs.
3. Add internal links from high-traffic pages to useful next-step guides; avoid inserting irrelevant affiliate CTAs.
4. Review which referral sources send engaged visitors and repeat only the approaches that produced genuine visits.
5. Set the next 90-day plan using actual performance.

## Weekly scorecard
- Search Console: total clicks, impressions, CTR, indexed pages, top queries, top landing pages.
- Analytics (once configured): users, sessions, engaged sessions, landing pages, referral source.
- Affiliate: outbound clicks by page and provider, conversions/commission if available.
- Pinterest: outbound clicks and saves by pin.
- Content: pages updated, new guides published, broken links fixed.

## Decision rules
- Impressions rising, clicks flat: improve titles/descriptions and match search intent more precisely.
- No impressions after a reasonable indexing period: inspect indexing/canonical/internal-link issues before publishing more.
- Visitors arrive but leave quickly: improve the answer, usefulness, page speed, and internal next step.
- Affiliate clicks but no commissions: review product relevance, destination, booking conditions, and affiliate reporting; do not add more buttons blindly.
- Pinterest impressions without outbound clicks: revise the creative promise and destination relevance; stop formats that repeatedly underperform.

## First actions completed in this iteration
- Added a focused airport-to-Haeundae route guide with a unique canonical URL, metadata, breadcrumb structured data, official transport reference, Pinterest share link, and contextual internal links.
- Added the new guide to the sitemap and homepage and cross-linked it from the broader airport-arrival guide.
- Updated the homepage Twitter card to use a large-image preview.
- The latest GitHub commit was deployed to Render and reported live.
- Actual Pinterest account publishing and analytics configuration remain dependent on account access / valid tracking configuration.


## Implementation log — November 2, 2026
The following changes were committed to the site repository. They are implementation records, not claims of traffic gains; traffic impact must be measured after deployment and indexing.

1. Published a new evergreen first-time visitor guide with links to accommodation, transit, airport, itinerary, food and pass guides.
2. Published a rainy-day Busan guide built around flexible indoor planning and safe weather decisions.
3. Added both new guide URLs to the XML sitemap with last-modified dates.
4. Added a first-time visitor guide card to the homepage's main guide grid.
5. Added a rainy-day guide card to the homepage's main guide grid.
6. Changed the homepage topic tile to lead directly to the first-time visitor guide.
7. Added visible homepage quick answers for trip length, accommodation area and airport transfer planning.
8. Added FAQ structured data matching the visible homepage quick answers.
9. Refined the homepage meta description around actual guide topics and planning intent.
10. Aligned the homepage Open Graph title with the visible page title instead of using an overbroad “Ultimate” claim.
11. Aligned homepage Open Graph and Twitter descriptions with the meta description.
12. Added responsive styles for the homepage quick-answer section, including a one-column mobile layout.
13. Changed the 3-day itinerary Twitter card to large-image format.
14. Changed the accommodation guide Twitter card to large-image format.
15. Changed the public transport guide Twitter card to large-image format.
16. Changed the late-arrival airport guide Twitter card to large-image format.
17. Changed the Visit Busan Pass guide Twitter card to large-image format.
18. Changed the luggage storage guide Twitter card to large-image format.
19. Changed the KTX booking guide Twitter card to large-image format.
20. Changed the Zimcarry luggage guide Twitter card to large-image format.
21. Changed the local food guide Twitter card to large-image format.
22. Changed the Jagalchi Market guide Twitter card to large-image format.

### Next actions to maximize organic traffic
- Confirm the latest commit is deployed, then verify both new URLs return HTTP 200 and have self-referencing canonical URLs.
- In Search Console, inspect both new URLs and request indexing; check sitemap processing and coverage after Google recrawls.
- Publish the seven Pinterest drafts first, then add the two new guides as separate pins. These remain drafts until manually published.
- After 2–4 weeks of impressions, prioritize pages with high impressions but low CTR for title/description tests; prioritize pages with impressions but low average position for content depth and internal links.
- Do not claim any visitor target has been reached without analytics data. GA4 remains disabled until a real Measurement ID is configured.


## Local-positioning and content-cluster update — 2026-11-02

### Implemented
- Added `/guides/busan-neighborhood-food-guide/` as a neighborhood-led entry point for food searches.
- Added a homepage card and a visible local-food FAQ with matching FAQPage structured data.
- Added the new URL to the XML sitemap.
- Linked the new guide from the local food, Jagalchi, accommodation, first-time visitor, rainy-day and three-day itinerary pages.
- Updated relevant guide footers to reinforce the site's Busan-based local-food and neighborhood focus.

### Why this cluster matters
The aim is to connect informational searches (what to eat, where to eat, market pricing) with planning searches (where to stay, how to group sights, how to move around). This may improve discovery and onward navigation, but it is a hypothesis until Search Console and analytics data show results.

### Measurement checklist
1. After deployment, check the new URL with Search Console URL Inspection and request indexing.
2. After 14 days, compare impressions, clicks, CTR and average position for the new page and the existing local-food/Jagalchi pages.
3. After 28 days, identify queries with impressions but low CTR and revise titles/descriptions only where the page genuinely answers that intent.
4. Track internal-link clicks and affiliate clicks separately; do not treat outbound clicks as visits or revenue.
5. Do not claim visitor growth until reliable analytics data is available. GA4 remains inactive while the measurement ID is blank.
