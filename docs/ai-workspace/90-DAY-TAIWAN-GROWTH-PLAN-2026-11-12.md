# Go2Busan 90-Day Taiwan-First Growth Plan
_Last updated: 2026-11-12_

## 1. Strategic objective
Build Go2Busan into a trusted, practical Busan trip-planning resource for Taiwan-based independent travelers. Taiwan (Traditional Chinese, zh-TW) is the primary acquisition market; Japanese and English remain supported secondary markets.

The objective is to turn relevant search visibility into qualified visits, useful trip-planning actions, repeat discovery and measurable affiliate revenue—not simply to maximize page count.

Ambition: work toward 10,000 monthly Taiwan-market users. This is a stretch ambition, not a forecast or guarantee. Establish a verified baseline before setting 30/60/90-day numeric commitments.

## 2. Current repository context to re-verify
- The site is a multilingual static Busan travel guide with EN, JA and Traditional Chinese content.
- PR #312 reported 67 Traditional Chinese guide pages and 68 zh-TW search-index URLs including the directory. Recount current main before treating these as live totals.
- Recent Taiwan work: #354 KTX integration and social QA; #355 airport-bus luggage limits and transit-pass exclusions; #356 winter, Taejongdae and Nampo improvements.
- KTX/SRT: since the September 1, 2026 integration, former SRT routes are booked as KTX through Korail/Korail+. Do not describe SRT as a separate current booking channel. Preserve accurate legacy-app transition caveats.
- The Nov 12–26 social campaign contains 45 Instagram and 90 Threads drafts. PR #354 says they remain draft/needs_check, not published. Factual review, Instagram asset rendering/inspection, overlap resolution with the legacy 30-day schedule and an approved dry run remain prerequisites.
- Affiliate event code exists, but live GA4 event verification was previously blocked by missing Viewer access. A click is not a booking; do not report bookings or revenue without partner confirmation.
- Earlier STATUS.md may lag live GitHub state. Re-query open PRs, CI and production version before acting.

## 3. Operating principles
1. Taiwan-first: natural Taiwan Traditional Chinese, local search phrasing and Taiwan traveler needs.
2. Improve before expanding: inspect existing pages and avoid duplicate URLs or competing pages for the same intent.
3. Search intent first: each page answers one clear traveler question with a concise, useful opening.
4. Evidence-led: use official/primary sources for schedules, fares, closures and restrictions; record source and checked date.
5. Honest imagery: distinguish original on-site photos from illustrative images. Never imply an illustrative image depicts a named restaurant.
6. Useful conversion: provide relevant next steps—map, directions, itinerary or booking link—without intrusive or unsupported claims.
7. Draft safety: do not publish, activate schedules, alter secrets/tokens, change LIVE flags or deploy production without owner approval.
8. Maintain EN/JA quality while prioritizing zh-TW.

## 4. Priority content clusters
### Trip planning and transport
- 釜山三天兩夜自由行 / 釜山四天三夜自由行
- 釜山機場到市區交通, luggage and late-arrival options
- KTX booking, sold-out recovery, station navigation and current booking-channel rules
- Metro pass coverage and exclusions; distinguish Metro from Donghae Line and Busan-Gimhae Light Rail
- Where to stay: Seomyeon vs Haeundae vs Nampo vs Gwangalli
- Visit Busan Pass: current eligibility, prices and attraction coverage

### Neighborhood planning
- Nampo/Jagalchi/Kkangtong Market walking route
- Gwangalli night views and drone-show cancellation caveats
- Haeundae/Blue Line Park booking and weather caveats
- Seomyeon shopping, food and transport
- Taejongdae access, Danubi train schedule, closures and weather suspensions

### Food and local experience
- Cover local favorites and famous restaurants; label verified facts and editorial recommendations clearly.
- Cover Busan specialties such as dwaeji-gukbap, milmyeon, suyuk baekban, eomuk, seafood and other regionally grounded dishes.
- Restaurant pages should include address, verifiable operating information, menu/price caveats, map link, ordering tips and nearby itinerary links.
- Never invent firsthand visits, review quotes, opening hours, prices or restaurant-specific photo provenance.

### Seasonal and practical guides
- Winter coastal visits, rainy-day alternatives and seasonal events.
- Korean bathhouse/jjimjilbang etiquette and shopping.
- Luggage, payment, SIM/eSIM, power adapters, tax refund and accessibility where useful.

## 5. 90-day execution plan
### Phase 0 — Baseline and backlog control (days 1–7)
- Fetch current main SHA, production version.txt, open PRs, CI state and recent deployment status.
- Reconcile STATUS.md and HANDOFF.md with live GitHub state.
- Classify PRs as merge-ready, overlapping/conflicting, needs factual review or stale/deferred.
- Recheck #312, #354, #355, #356 and related Taiwan PRs; do not assume any PR is still open or mergeable.
- Verify KTX/SRT wording across EN/JA/zh-TW.
- Establish GA4 and Search Console baseline by market and landing page: users/sessions, organic clicks, impressions, CTR, average position, engaged sessions, top landing pages and countries.
- Document access blockers; never imply unavailable data was inspected.
Deliverable: dated baseline report, deduplicated PR action list and updated STATUS/HANDOFF.

### Phase 1 — Measurement and conversion foundation (days 8–21)
- Verify GA4 and Search Console access; request minimum necessary Viewer access from owner if blocked.
- Validate existing GA4 events in a real-time/debug session: affiliate_cta_view, affiliate_click, map/directions clicks and other implemented events. Reuse existing names; avoid duplicate taxonomies.
- Break down results by locale/market and page path where technically appropriate.
- Verify UTM values and destination URLs in social drafts.
- Ensure priority pages link clearly to relevant maps, itineraries, transport guides and booking resources.
- Check mobile usability and performance on highest-intent pages.
- Keep affiliate disclosures clear and links functional.
Acceptance: events demonstrably arrive in GA4; clicks are not reported as bookings; priority pages have clear next steps; mobile checks pass.

### Phase 2 — Taiwan SEO and content quality (days 22–45)
- Audit existing zh-TW pages for intent, quality, freshness, internal links, metadata, canonical/hreflang and source quality.
- Prioritize pages already receiving impressions but with low CTR or ranking positions 8–30.
- Rewrite titles/descriptions in natural Taiwan Traditional Chinese; avoid keyword stuffing.
- Ensure one clear H1, descriptive H2s and an answer-first opening.
- Link neighborhood hubs, itinerary pages, transport guides, food guides and map contextually.
- Update sitemap/search index/hreflang only when URLs or language relationships genuinely change.
- Fix broken links, stale facts and unsupported claims before creating new pages.
- Create new pages only for validated uncovered intent; preserve canonical URLs and avoid near-duplicates.
Acceptance: each changed page has source notes, checked dates, locale QA and passing build/SEO/link checks.

### Phase 3 — Social distribution and original media (days 30–60)
- Compare the 135-post Nov 12–26 draft inventory with active schedules and publish logs.
- Resolve overlap and missed/expired posts before activation; never reset historical publish logs.
- Fact-check every post and verify locale, UTM and destination-page intent.
- Render and inspect all Instagram 1080x1350 assets for legibility, relevance, attribution and mobile crop.
- Adapt Threads copy to Taiwan usage; avoid literal translations and repetitive captions.
- Run an owner-approved dry run and verify LIVE variables/tokens without exposing secrets.
- Obtain owner approval before activating schedules or publishing.
- Establish an original-photo workflow recording date, place, photographer/provenance and usage permission; replace generic illustrations where suitable originals exist.
Acceptance: no unreviewed claims, broken locale links, schedule overlap or uninspected assets; explicit approval before live publishing.

### Phase 4 — Optimization and revenue validation (days 61–90)
- Compare 30/60/90-day results by Taiwan market, page cluster and acquisition channel.
- Identify top landing pages, high-impression/low-CTR queries and pages with visits but weak engagement.
- Refresh winners; consolidate or de-emphasize weak/duplicative pages.
- Test useful CTA wording/placement without weakening editorial trust.
- Track affiliate outbound clicks separately from confirmed bookings and commission/revenue.
- Review partner coverage and booking friction for Taiwan visitors.
- Publish a monthly growth review with evidence, decisions and next experiments.
Acceptance: growth claims use comparable GA4/Search Console periods; revenue is reported only when confirmed by partner reporting.

## 6. KPI framework
Record a baseline before numeric commitments.

### Acquisition
- Taiwan organic clicks and impressions (Search Console, by query and page).
- Taiwan users/sessions and organic landing pages (GA4, by country and locale/page).
- CTR and average position for priority query clusters.
- New vs returning users.

### Usefulness
- Engaged sessions and engagement rate.
- Navigation from priority guides to related pages.
- Map/directions click rate.
- Other interactions only when reliably instrumented.

### Conversion
- Affiliate CTA views.
- Affiliate outbound clicks.
- Confirmed bookings and commission/revenue from partner reports.
- Conversion rate with a clearly defined denominator.

### Distribution
- Instagram reach, saves, shares, profile visits and link traffic.
- Threads impressions, replies, reposts and link traffic.
- Published vs scheduled vs draft vs missed/failed counts.

Never mix date windows or confuse impressions with users, clicks with sessions, or outbound clicks with bookings.

## 7. Immediate work queue
### P0 — first
1. Reconcile live GitHub PR/CI/production state and update STATUS.md/HANDOFF.md.
2. Establish Taiwan GA4 + Search Console baseline; document any access blocker.
3. Audit active social schedule overlap and draft state; do not publish without approval.
4. Verify KTX integration wording across locales; do not describe SRT as a separate current booking channel.
5. Review priority Taiwan pages for factual accuracy, mobile usability, broken links and conversion paths.

### P1 — next
6. Improve existing high-impression Taiwan pages using query/page data.
7. Complete Nampo, Gwangalli, Haeundae and Seomyeon journey links.
8. Verify restaurant map links, menu/price caveats, hours and image provenance.
9. Render and inspect social creative; prepare a safe activation proposal.
10. Verify affiliate event telemetry and destination integrity.

### P2 — after evidence
11. Fill validated content gaps, not speculative page-count targets.
12. Conduct Taiwan-native language review on highest-value pages.
13. Test conversion CTA placement and report results.
14. Explore Taiwan travel-community distribution/partnerships only where value is clear.

## 8. Required workflow for Claude
1. Read this plan, STATUS.md, HANDOFF.md, DECISIONS.md and relevant audit reports before editing.
2. Inspect current main and open PRs; do not duplicate existing work.
3. Use a focused branch and PR; do not push directly to main.
4. Include changed paths, rationale, source URLs, checked dates, tests, mobile viewport results and caveats in each PR.
5. Run required build, SEO, sitemap/hreflang, broken-link, language-switch, image-credit, social validation and relevant tests.
6. Keep content drafts separate from live publisher schedules.
7. Never change secrets, tokens, LIVE flags, external account state, active schedules or production deployment without owner approval.
8. Update STATUS.md and HANDOFF.md with evidence, PR numbers, CI run IDs, commit SHAs and blockers.
9. If a fact cannot be verified, mark it needs_check and do not assert it publicly.
10. Distinguish code merged, deployed and externally published in completion reports.

## 9. Owner access and decisions
- Provide GA4 Viewer access to the authorized implementation account if live event verification remains blocked.
- Confirm Search Console access if unavailable.
- Review and approve any social schedule transition and live publishing dry run.
- Supply original photos and provenance/usage permission when available.
- Approve production merges/deployments and external partner/account changes.

## 10. Day-90 definition of success
- Reliable Taiwan-market baseline and weekly reporting exist.
- Priority Taiwan pages satisfy search intent, factual accuracy, localization and mobile QA.
- KTX/SRT information is consistent and current across locales.
- Social operations distinguish drafts, scheduled, published, missed and failed posts with safe approvals.
- GA4 captures validated useful actions; affiliate clicks are separate from confirmed bookings/revenue.
- Search and engagement improvements are demonstrated against comparable baseline periods.
- The next-quarter roadmap is based on actual query, visitor and conversion evidence.

The 10,000 monthly Taiwan-user ambition remains a stretch target. Do not claim it has been achieved or is on track without measured evidence.