# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Addendum — PR #297 count fixes (2026-11-06, Claude)

- Completed: JA title/og/twitter/headline set to 6選; search-index JA/zh-TW entries updated to 6 and Gaya Park pork soup; JA/zh-TW meta descriptions updated.
- Verification: Claude reports `sh scripts/build-static.sh` passed. The 11 audits did not complete; the Technical SEO audit workflow is `action_required`, with no completed result available. 360/390px overflow remains unverified. Deployment not verified.
- Approval needed: owner review and merge decision; native review of JA/zh-TW wording.

## Current handoff — 2026-11-12 (ChatGPT growth and image audit)

### Completed
- Confirmed GitHub main at `60146784d5563ed4628afcb8c58eb272028ed536`; PR #383 image quality batch 1 merged and its Technical SEO audit / Growth ops checks passed.
- Reviewed `docs/ai-workspace/IMAGE-AUDIT-2026-11-12.md`: pre-#383 baseline found no body photo on 40/49 zh-TW, 33/67 EN, 39/47 JA guides; generic skyline OG fallback on 18/23/18 pages; and five EN covers lazy-loaded. #383 fixed seven core zh-TW/JA guide covers, all-language Seomyeon share image, and EN cover loading priority.
- Re-read connected GSC and GA4. GSC 2026-10-13–11-09: 353 impressions / 2 clicks; Taiwan 43, USA 28, Japan 20 impressions, with zero clicks in each target market. GA4 2026-10-15–11-11: 40 sessions, 8 users, 1 organic session, 5 affiliate_click events from 3 users, 0 transactions/revenue.
- Completed a 50-page SEO crawl: no missing alt among crawled pages; 127 URLs not crawled. A separate Lighthouse-enabled audit completed 20/20 with 0 failures; available audit endpoints did not expose numeric Lighthouse/Core Web Vitals metrics, so performance remains unverified.
- Updated the global growth, SNS, and operations automations with recurring image-quality checks covering source/license, real-place/menu fit, alt, OG/social imagery, mobile crop, responsive delivery, file weight, LCP/CLS, and approval safeguards.
- Added evidence and rebase/consolidation notes to PR #359, #382, and #320.

### Verification and limitations
- The current main SHA is verified from GitHub. Production `version.txt` was not readable in this run and Render workspace selection was not available; production deployment SHA remains unverified.
- GA4 is opt-in and undercounts; recorded countries show Korea only. Do not infer that no overseas users visited.
- GSC samples are small. Do not overinterpret positions or zero clicks at market level.
- The crawl checks alt and page-level SEO but not image licensing, visual crop, or full image delivery. Lighthouse ran 20/20 with 0 failures, but numeric performance metrics are not exposed by the available audit result endpoints.

### Open conflicts / next actions
- #320 and #311 overlap on JA/TW PNU food-guide HTML files.
- #314 and #315 overlap on EN Haeundae food guide.
- #316 and #321 overlap on 31 files. Consolidate each pair before further edits.
- Re-audit the pre-#383 image gaps after the batch: zh-TW/JA first-trip, Taiwan-travelers-busan, things-to-do; EN dialect/local-culture/Bukangi/things-to-do illustration-vs-photo decisions; Bukmun needs_review; and repeated Gimhae/Haeundae images.
- Rebase stale work onto current main and rerun build, all repository audits, and 360/390/1280 visual checks.
- Review PR #382 after current-main rebase; do not merge or deploy without owner approval.

### Approval needed
- Any PR merge or production deployment.
- Any change to GA4 consent/measurement configuration.
- Any external Instagram/Threads publishing or schedule change.

## Current handoff — 2026-11-12 (Claude, Taiwan plan #359 Phase 0)

### Completed
- Reconciled main/production/open PRs: `docs/ai-workspace/BASELINE-TAIWAN-2026-11-12.md` (45 open PRs triaged into close / clean / conflicting).
- #362: site content from #354–#356 (KTX–SRT integration notice in EN/JA/zh-TW; zh-TW bus luggage, metro-pass exclusions, Taejongdae/Danubi winter caveats, Nampo walking order) without their conflicting social edits. Facts re-checked (see PR).
- #364: zh-TW `・` → `·` on 19 files; nakgopsae/milmyeon headings lead with Chinese names.
- Social: no duplicate live Threads slots; Threads publisher confirmed LIVE; IG drafts await first render.
- Affiliate: `affiliate_click` payload verified locally; analytics is opt-in.

### Verification
- Build + all 11 CI audits exit 0 on #362 and #364 branches; no horizontal overflow at 360/390/1280 on the changed pages.
- PR conflict status from `git merge-tree` against `19e8150`.

### Open issues / blockers
- GA4 data not readable by Claude (owner connected OpenSEO; ChatGPT to re-run #358).
- Search Console country breakdown not reachable from this session's browser (redirected); last Taiwan figure is from 11-11.
- #361 and #364 edit the same file; #352 will need a one-line rebase after #362.

### Recommended next action
- Owner: approve #362 and #364; decide on closing the PRs listed as superseded.
- ChatGPT: re-run #358 GA4 baseline by market.
- Claude: add zh-TW affiliate/next-step links on high-intent Taiwan pages (where-to-stay, airport, three-days, Haeundae/Gwangalli hubs) using existing link formats; review IG renders after the 12:00 UTC run.

### Approval needed
- Merges of #362/#364 (production deploy). Closing superseded PRs. Any change to the analytics consent model.

### zh-TW + JA affiliate CTAs (2026-11-12, Claude)
- CTA copy lives in `content/affiliate/zh-tw-cta.json` and `ja-cta.json` (not in page HTML). ChatGPT may edit the copy there; keep `aff_adid`, `dest` and `before` unless coordinated.
- If a page edit removes the `before` anchor, the build skips that CTA with a warning and CI `inject-affiliate-cta.mjs --check` fails — update the anchor in the JSON.
- Next: where-to-stay / airport pages need a content decision (hotel or transfer product) before a CTA is added.

## Handoff template

### Date and contributor
[YYYY-MM-DD — name/agent]

### Completed
- [Specific changes and links]

### Verification
- [Commands/tests and outcomes]
- [Visual checks and viewport sizes]
- [PR number and commit SHA]

### Open issues / blockers
- [Issue, impact, owner]

### Recommended next action
- [One clear next step]

### Approval needed
- [Any merge, deployment, spend, partner, or policy decision]


## Current handoff — 2026-11-13 (ChatGPT, editorial design Phase 1)

### Completed
- Opened Draft PR #404: https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/404
- Added a shared non-homepage editorial layer in assets/styles.css, reusable design tokens/components in assets/editorial-design-system.css, and the design-system specification in docs/design/GO2BUSAN-EDITORIAL-DESIGN-SYSTEM.md.
- Confirmed EN/JA/zh-TW guide indexes load the shared stylesheet and contain the targeted directory classes.

### Verification
- PR branch compares cleanly with main: 3 commits ahead, 0 behind at last check; GitHub reports mergeable.
- Actions run 43424881559 completed successfully. Public-site build and dependency-free technical SEO audit passed.
- No visual browser QA or production deployment has been performed. PR remains Draft and unmerged.

### Open issues / blockers
- Confirm the editorial CSS at 360/390/768/1280 and inspect representative food, neighborhood, transport and guide detail templates in EN/JA/zh-TW.
- Confirm homepage remains visually unchanged and check keyboard focus, contrast, long translated headings, tables and sticky navigation.
- The standalone token/component stylesheet is a foundation for later explicit template adoption; do not assume its .g2b-* components are already used on live pages.

### Recommended next action
- Complete representative visual/template QA; then create a separate food/place profile module with image-led cards, menu/price/location facts, source/visit-status labels, and related neighborhood/transport links.

### Approval needed
- Owner approval before merging PR #404 or deploying any design changes.


## Current handoff — 2026-11-13 (ChatGPT, full-site editorial redesign)

### Completed
- Created branch `design/full-site-editorial-redesign-20261113` from the Phase 1 editorial branch.
- Applied a shared visual refresh to the common stylesheet `assets/styles.css`, targeting all non-homepage pages while keeping the dedicated EN/JA/zh-TW homepage showcase layer isolated.
- Unified editorial typography, reading widths, hero/deck/meta hierarchy, cover treatment, callouts, sidebars, navigation chips, directory cards, tables, footer, focus visibility and reduced-motion behavior.

### Verification
- Source files inspected: English homepage, Japanese homepage, Traditional Chinese homepage, guide directory, neighborhood food guide, transit-card guide, accommodation guide and Haeundae neighborhood guide.
- This change is CSS-only; no page copy, URLs, SEO metadata, JSON-LD, analytics or affiliate markup intentionally changed.
- Build, CI, screenshots and production deployment have not yet been verified for this branch.

### Open issues / blockers
- Run the full build and technical SEO/image-credit audits.
- Visually inspect 360/390/768/1280 widths across home, directory, food, neighborhood, transport, accommodation and trip-planning templates in EN/JA/zh-TW.
- Check translated long headings, mobile navigation, image credit legibility, sticky navigation, tables, keyboard focus and reduced-motion behavior.
- Existing homepage CSS has overlapping editorial/showcase layers; verify visual consistency without overriding its language-specific design.

### Recommended next action
- Claude performs verification only; no code edits, push, merge or deploy. ChatGPT continues the full-site rollout after the QA report.

### Approval needed
- Owner approval before merge or production deployment.
## Current handoff — 2026-11-13 (ChatGPT, Claude QA corrections and market UX)

### Completed
- Reviewed Claude's browser QA report for #404/#405/#406 and implemented the homepage corrections on `design/full-site-editorial-redesign-20261113`.
- Fixed the verified Dongnae photo/alt/credit mismatch using the registered Bukmun image; corrected Gwangan Bridge photo attribution to Glabb / Public domain across all three locales.
- Removed the nonfunctional "Watch Busan in 1 Min" CTA and linked it to the first-trip guide.
- Corrected Japanese and Traditional Chinese airport-arrival and transit quick links; translated homepage editorial labels and accessibility labels.
- Added high-contrast mobile menu styling, Escape-to-close behavior, CJK heading line-break safeguards and full homepage reduced-motion overrides.

### Verification
- Claude's pre-fix QA: build + 13/13 audits passed on the inspected #406 head; browser review across 360/390/768/1280 and EN/JA/zh-TW. This does not verify the corrective commits.
- Current corrective branch still requires fresh CI and repeat browser QA. Photo crop checks were blocked by Wikimedia image loading in Claude's sandbox; real-device and Lighthouse/CWV checks remain outstanding.
- PR #406 remains Draft, unmerged and undeployed.

### Next implementation batch
- Add localized Facebook/LINE sharing near the end of high-intent guides, with native share fallback and no tracking claims.
- Add Google Maps deep links only where a verified place name/address is present; never fabricate map destinations.
- Add useful taxi/show cards with large Korean destination text on airport, attraction and neighborhood guides.
- Add clear, evidence-based labels (e.g. solo-friendly, fixed-price only when confirmed); do not apply generic trust badges without source evidence.
- Improve long-tail search coverage with intent-led titles, visible concise answers, useful warnings and FAQ content. Do not add FAQ/HowTo schema to chase deprecated Google rich results.
- Preserve owner approval requirement for merge/deploy.
## Latest handoff — full visual design batch (2026-11-13)

### Design batch delivered on the PR branch
- Completed a coordinated homepage visual composition for EN / JA / zh-TW: panoramic Busan hero, six travel shortcuts, asymmetric Editor’s Picks bento grid, conversion cards, photo-spot shortcuts, Facebook/LINE/native share, Korean taxi show-card with copy action, and mobile fixed Busan Map / Busan Pass dock.
- Repositioned the conversion/share modules directly under Editor’s Picks and preserved the existing events, neighborhood planner, editorial content, SEO metadata, analytics and existing route structure.
- Refined responsive design and cache-busting for the homepage stylesheets.
- The shared editorial styles in this PR continue to apply to guide articles, directories, map pages, sidebars, tables and FAQ presentation.

### Important content and asset handling
- Existing Wikimedia hero and image-credit records remain the source of documentary location photography. Generated mockups are design references, not real-location photographs.
- Klook link reuses the existing Visit Busan Pass affiliate destination. Hotel CTA uses the existing Agoda Busan listing.
- Taxi show-card is a visible Korean phrase that can be copied; the sample destination is Cheongsapo Station at Haeundae Blueline Park.
- Map and attraction links should be checked against live page routes before release.

### Verification status
- Static source checks passed for the three localized homepages (balanced main tags; modules placed below Editor’s Picks; share and taxi controls present; invalid pass path removed).
- No latest-head CI/browser run is available yet. Request Claude to run a fresh full verification of PR #406 after these commits. Do not claim final QA or deployment.
- PR #406 remains Draft and awaits owner approval before merge/deploy.


## Multilingual guide directory and shared editorial batch — 2026-11-13

- Extended the shared non-homepage editorial layer for EN, JA and zh-TW guide/article templates: balanced multilingual headings, cover and figure sizing, image captions, article blockquotes/dividers, responsive callouts, directory navigation and reduced-motion behavior.
- Completed a dedicated visual polish pass on all three travel-guide directory pages: editorial card surfaces, accent rail, refined typography, separated link rows, clear hover states and horizontally scrollable mobile category navigation.
- Refreshed the shared stylesheet cache key on EN/JA/zh-TW guide directory pages to `20261113-directory-polish` so all three receive the current design.
- Static internal-link audit of the three guide directories: EN 74, JA 54 and zh-TW 57 unique internal destinations checked; no missing local targets found in the repository tree.
- This is source/static verification only. Latest-head build, 13 audits and browser QA at 360/390/768/1280 remain pending. PR #406 remains Draft, unmerged and undeployed.


## Homepage QA correction batch — 2026-11-13
- Fixed the mobile homepage navigation so all navigation links are available when the menu is opened, while the closed mobile header keeps the navigation out of the crowded header row.
- Added Japanese-specific natural line wrapping to avoid the reported 360/390px and desktop heading overflow.
- Standardized outbound booking-link rel attributes to sponsored nofollow noopener noreferrer across EN / JA / zh-TW.
- Added a concise, localized affiliate disclosure directly beneath the homepage booking cards in all three locales.
- Corrected the Korean taxi destination phrase to “해운대 블루라인파크 청사포정거장으로 가주세요” in the three localized homepages and their copy actions.
- Agoda homepage links still use the generic Busan landing URL without a verified account-specific cid; no tracking parameter was fabricated. Japanese and Traditional Chinese Klook links still point to the existing en-US activity destination and require verified locale-specific destinations before changing.
- Verification status: code updated; fresh build, audit and browser QA are pending on the latest branch head. PR remains Draft; no merge or deployment.


## Responsive and food/transport page batch — 2026-11-14
- Refined homepage header spacing at tablet/mobile widths to separate the search control and language pills; retained all locale links.
- Refined Japanese homepage hero title width and line treatment to keep punctuation away from the viewport edge.
- Added safe-area-aware footer clearance beneath the fixed mobile travel dock on localized homepages.
- Added tablet-specific no-wrap rules for language switchers on non-homepage guide pages, including Traditional Chinese.
- Updated stylesheet cache keys on the homepage, guide directories and selected food/transport pages in EN / JA / zh-TW where the files were successfully updated. A final pass is still needed for the two localized transit-card pages whose cache key was not updated in this batch.
- Reviewed food guide content structure: neighborhood-led choices, dish context, practical cautions, scorecard caveat and image source/license captions are present in sampled EN/JA/zh-TW pages. Reviewed transit-card pages: practical card/transfer guidance and locale-specific Article metadata are present; no speculative fare values or unverified route claims added.
- Verification is pending against the latest head. Claude should retest the prior 360/390/768/1280 findings and verify food/transport page templates. PR remains Draft; no merge/deploy.


## Follow-up batch — 2026-11-14 (ChatGPT)

Applied to the existing #406 Draft branch; no overlapping PR created.

- Tablet header (561–820px): moved non-homepage navigation to a dedicated second row, preserving utility/language controls and preventing nav labels from colliding with search/bookmark/language controls.
- Japanese homepage hero: constrained the heading width and enabled balanced, strict Japanese line breaking so punctuation no longer hugs the viewport edge at desktop widths.
- Mobile travel dock: increased footer bottom clearance on EN/JA/zh-TW homepages, including device safe-area inset, to keep the final footer links tappable and visible above the fixed dock.
- Homepage photography: refined the per-card focal positions for the four editorial picks; source images and verified credits remain unchanged.
- Bumped homepage stylesheet cache keys on all three locale homepages to `20261114-visual-batch2`.

Pending: build, full audit suite, and cross-locale browser QA at 360/390/768/1280. Keep Draft; do not merge or deploy until verified.

- Responsive hero preload: split preload hints by viewport in EN/JA/zh-TW. Desktop/tablet preloads the 1800 request (1920px delivery tier); phones preload the same 1000 request used by the mobile hero CSS, avoiding a desktop-sized LCP preload on small screens.


## Homepage design batch 3 — 2026-11-14 (10 grouped improvements)
- Matched the mobile hero CSS background to the 1000px image preload; retained the desktop 1800 request.
- Normalized remaining oversized homepage neighborhood/editorial image requests (1200/1400) to 960 where those card dimensions are used.
- Improved editorial photo-credit chips, bento card crop/focus treatment and locale-safe title wrapping.
- Reworked the narrow-phone discovery shortcut bar into a thumb-friendly horizontal snap rail.
- Refined mobile bento hierarchy and neighborhood photo-card hover/focus behavior.
- Standardized seasonal-event card image framing, spacing and interaction states.
- Added a dedicated responsive editorial treatment to the Traditional Chinese Taiwan-traveler feature panel.
- Updated all three homepage stylesheet cache keys to `20261114-visual-batch3`.
- Preserved photo subjects, attribution text/links, routes, article copy, canonical/hreflang, metadata, JSON-LD, analytics and affiliate destinations.
- Verification is pending on this exact head: build, technical audits and Playwright screenshots at 360/390/768/1280. PR #406 remains Draft; no merge or deployment.


## Homepage design batch 4 — 2026-11-14 (10 coordinated refinements)
- Unified hero composition, copy width and headline wrapping across EN / JA / Traditional Chinese.
- Clarified hero primary/secondary actions and improved touch/keyboard states.
- Improved search field affordance, focus visibility and minimum touch target.
- Aligned desktop header logo, navigation and utility controls.
- Refined discovery shortcut icon/label alignment and focus states.
- Improved editorial bento card layering, title and photo-credit placement.
- Strengthened booking/planning card hierarchy, hover and focus treatment.
- Standardized destination photo caption behavior and image container sizing.
- Refined seasonal event and FAQ card typography, rhythm and interaction.
- Added responsive adjustments for narrow phones and CJK line wrapping; bumped all three homepage stylesheet cache keys to `20261114-visual-batch4`.

Preserved existing images, attribution records, page copy, routes, canonical/hreflang, metadata, JSON-LD, analytics and affiliate destinations. Verification on this exact head is pending; keep PR #406 Draft and do not merge/deploy before CI and visual QA.


## Busan Now winter refresh — 2026-11-14
- Replaced the English homepage's Bukangi-first Busan Now feature with a seasonal visitor-interest feature covering Millak Luce Festa, Busan Christmas Village and Haeundae Light Festival; added equivalent native Japanese and Traditional Chinese sections.
- Expanded the existing Things to Do in Busan guide in EN / JA / zh-TW with five useful experiences: three official winter events, ARTE MUSEUM Busan and Haewol Observatory.
- Added verified date windows, admission status, official information links and map links; avoided presenting generic Gwangalli photography as festival imagery.
- Added adjacent attribution for the Gwangalli Beach and Gwangan Bridge photo (Masterhatch, CC BY-SA 4.0), and refined the responsive Busan Now feature layout.
- Updated the shared search index tags and November acquisition playbook with verified facts and editorial guardrails.
- Previous homepage design batch 4 exact-head Technical SEO workflow `43525561647` passed. The Busan Now refresh is a later change and still requires its own CI and visual QA.
- These new commits are additional to merged PR #406 and need a separate PR against main; do not treat them as deployed.


## Evergreen Busan experiences — 2026-11-14
- Added a three-card editorial discovery row to EN / JA / Traditional Chinese homepages: Yeongdo coast, Busan night views and BTS public fan route.
- Expanded all three Things to Do in Busan guides with dedicated Yeongdo coastal walk, night-view and BTS route sections, localized for Japanese and Traditional Chinese readers.
- Added official tourism references, map links, residential-neighborhood etiquette, and explicit seasonal Saturday schedule for the Gwangalli M Drone Light Show.
- Added three verified Wikimedia Commons photos with visible author/license credits; responsive desktop grid becomes a swipeable snap rail on mobile.
- Expanded search-index keywords for Yeongdo, Hwangnyeongsan, Cheonghak Reservoir, Gwangalli drone show and BTS fan searches.
- This is a stacked follow-up to Draft PR #407; its base is the #407 branch so the two batches can merge in order without conflicting homepage edits. No merge or production deployment.
- Exact-head CI and screenshot QA pending.

- Added the Gwangalli M Drone Light Show to Busan Now in all three locales with the 2026 winter Saturday times (19:00 / 21:00), free admission note, official schedule link and weather-change caveat.
- Registered the Huinnyeoul (Choi2451 / CC0 1.0) and Gwangalli night (Carey Ciuro / CC BY 2.0) images in `assets/data/image-credits.json` after license verification; social metadata for the expanded guide now matches its new subject coverage.
- Initial exact-head build passed; strict audit identified two missing image registry records. Registry entries and Busan Now callouts have now been corrected; rerun CI before considering this batch verified.


## Visitor-question content batch — 2026-11-14 (ChatGPT)

### Completed
- Updated existing transit-card pages in English, Japanese and Traditional Chinese with the 2026 Busan city-bus ZeroPay QR payment distinction, fare and transfer limitations, practical physical-card advice and official links.
- Added a localized Jagalchi chojangjib explainer to all three language versions, including the first-floor purchase / second-floor dining sequence and a clear warning that table and preparation fees vary by venue.
- Added a localized rainy-day indoor shortlist to all three versions, linking ARTE MUSEUM Busan, F1963 and Spa Land official sites and prompting visitors to confirm current hours and admission conditions.
- Updated the November acquisition playbook with a verified follow-up queue for Geumjeongsanseong, Mipo Station, Songdo cable car, milmyeon and BIFF Square.

### Verification and source notes
- Official Busan City notice confirms ZeroPay QR payment on city buses from September 21, 2026; KRW 1,700 per passenger; no transit-card transfer discount. This is not a metro-gate payment method: https://www.busan.go.kr/eng/bsnews01/1758410
- Visit Busan describes transit passes and top-up options: https://www.visitbusan.net/en/index.do?menuCd=DOM_000000303012002000
- Busan Metro publishes transfer conditions: https://data.humetro.busan.kr/homepage/english/page/subLocation.do?menu_no=100601040202
- Busan City describes Jagalchi's first-floor seafood and second-floor chojangjib arrangement: https://www.busan.go.kr/bige/food/view?bbsNo=10&dataNo=70537&srchCl=Food
- Code updated; exact-head CI and page-level browser QA still required. PR #408 remains Draft, stacked on #407; no merge or deployment.
# Go2Busan Contributor Handoff

Use this file as the shared continuity point for the project owner, ChatGPT, and Claude. Keep the active task and blockers current; preserve long-term decisions in DECISIONS.md.

## Working agreement

- ChatGPT leads product/marketing, prioritization, SEO, content strategy, research, review, and continuity. It should directly perform useful supported work, including GitHub issues, documentation, editorial work, and safe repository changes/PRs.
- Claude handles code-heavy implementation, local builds, automated audits, visual QA, and deployment preparation when available.
- Claude usage exhaustion must not stop the project: ChatGPT continues tasks it can perform and leaves engineering-only work queued here and in GitHub.
- Owner's short continuation command: “읽고 진행해”. Recover priorities from this workspace and GitHub; do not ask the owner to repeat context or paste long prompts.
- Be precise about execution: an issue is assigned work, a PR is proposed work, a merged commit is repository work, and a verified production SHA is deployed work. Never conflate them.
- No merge, deployment, secret change, paid activation, or irreversible action without explicit owner approval.

## Current handoff — 2026-11-06

### Active priorities
1. Claude: inspect and report on issue #272, including whether a safe Claude Code GitHub workflow can be configured with the available repository permissions/secrets. Do not imply an autonomous Claude runner exists until verified.
2. Claude: inspect PR #269, current checks, mergeability, and documented SEO/mobile audits. Do not merge.
3. Claude: implement the free Google Maps Embed MVP described in issue #273. The map must show only Go2Busan-curated, verified/review-status-labelled places—not every Busan venue. Provide place cards, area/category discovery where supported, and Google Maps directions links. Avoid paid Maps JavaScript/Places/Directions APIs.
4. ChatGPT: continue product decisions, curated-place data review, content/SEO improvements, and safe GitHub work without waiting for Claude.

### Constraints
- Read AGENTS.md, CONTENT_GUIDELINES.md, and the shared workspace before repository changes.
- Do not invent addresses, coordinates, hours, prices, visits, map markers, or deployment status.
- Keep mobile UX first and preserve existing URLs and multilingual SEO.
- Use focused branches and PRs; run documented build and audits before review.
- Do not merge or deploy without explicit project-owner approval.

## Handoff template

### Date and contributor
[YYYY-MM-DD — name/agent]

### Completed
- [Specific changes and links]

### Verification
- [Commands/tests and outcomes]
- [Visual checks and viewport sizes]
- [PR number and commit SHA]

### Open issues / blockers
- [Issue, impact, owner]

### Recommended next action
- [One clear next step]

### Approval needed
- [Any merge, deployment, spend, partner, or policy decision]


## Owner-controlled execution — 2026-11-07 (ChatGPT)

- Paused the recurring Go2Busan weekly automation at the owner's request.
- Added an explicit owner-invocation / immediate-stop gate to `CLAUDE.md` on the #297 branch. Do not mention or trigger Claude unless the owner explicitly requests it for a specific task.
- Updated EN/JA/zh-TW social and structured descriptions and all three search-index entries so the six-place guide consistently includes Gaya Park pork soup.
- Latest known build result: `sh scripts/build-static.sh` passed in Claude's report. Technical SEO audit workflow is `action_required`; no successful CI audit result is confirmed. 360/390px remains unverified.
- PR #297 remains open; do not merge or deploy without owner approval.


## Current handoff — 2026-11-07 (ChatGPT, PR #297 mobile navigation)

### Completed in branch `chatgpt/jangjeon-gayapark-gukbap`
- EN/JA/zh-TW intro decks now reflect the six included recommendations, including Gaya Park pork soup.
- JA and zh-TW quick-jump menus now include all six restaurant sections; each fragment target was checked against an existing section ID.
- Added a <=680px horizontal-scroll treatment for article quick-jump links to keep navigation compact on mobile.

### Verification and release boundary
- Technical SEO audit success is confirmed for prior head `8887e94c54f2ae1fc3fbe699a40a17250fc86f89` only.
- Latest head is `d981226a176dacb398ff162f1a58640133e918af`; no CI checks are currently reported for this head. Fresh build and 360px/390px viewport/overflow checks remain unverified.
- PR #297 is open. Do not merge or deploy without explicit owner approval.


## Handoff update — 2026-11-07: search visibility + Nampo food

- Do not report that search impressions are increasing. The owner's latest shared Search Console report (Nov 3) had 0 clicks/0 impressions for 28 days and still showed data processing. No newer GSC data is available in the current session.
- Render HTTP request metrics for the last 30 days returned an empty series. Public `site:go2busan.com` search spot-check did not return a clear domain result; this does not prove deindexing.
- Sitemap audit: 167 URLs, zero hreflang links pointing to a URL absent from the sitemap; 26 entries lack alternates and should be reviewed based on whether translations exist.
- PR #297 branch adds Nampo Jjukkumi, 18beon Wandangjip (BIFF Square branch) and Kkangtong Golmok Halmae Yubu Jeongol Main Store to EN/JA/zh-TW Nampo neighborhood guides; Google Maps links and translated search-index tags added. No hours/prices asserted.
- Basic validation passed for language attributes, restaurant name presence, in-page anchors and JSON syntax. Fresh build/mobile/CI verification still pending.
- Latest known PR head `52969674e03a053c9c6fc6dfcdd898d0b4443104`; PR open, unmerged. Do not merge/deploy without explicit owner approval.


## Current handoff — practical local-experience batch (2026-11-14, ChatGPT)

### Completed in branch content/busan-practical-guides-20261114
- Milmyeon guide (EN / JA / zh-TW): added first-time order and seasoning tips, Korean phrases and dietary notes; updated SEO titles/descriptions.
- Geumjeongsanseong village food guide (EN / JA / zh-TW): attributed black-goat charcoal grill, duck bulgogi, native chicken, acorn jelly and seasonal mountain greens to the specific Sanseongjip listing on Visit Busan; linked the Busan City makgeolli page separately. Added the official-source discrepancy for bus 203 / 90 stop names and a same-day confirmation caveat.
- Things to Do in Busan (EN / JA / zh-TW): added Mipo Station transit-first access and a 15–20 minute walking buffer, grounded in operator and Visit Busan descriptions.
- Songdo Beach guide (EN): added live operating-status and seasonal-hours checks for the marine cable car, including bad-weather suspension caveat.
- Search-index title/summary alignment for the revised Geumjeongsanseong food copy remains pending with Claude; existing route and locale URLs are unchanged.
- Social copy pack created at content/social/2026-11-14-practical-local-experience-drafts.md. It is not scheduled or approved.

### Required before merge
1. Run exact-head technical SEO / build workflow and inspect every job.
2. Verify the nine localized guide pages and Songdo guide return correct content and canonical/hreflang tags.
3. Validate all outbound official links.
4. Review mobile typography and heading wrapping at 360 / 390 px; no screenshot QA has yet been performed.
5. Confirm all external photo assets are licensed and credited before producing the Instagram cards.
6. Keep PR Draft; do not merge or deploy without owner approval.


## Active focused fix — Busan Now winter block (2026-11-14)
- Branch: `fix/busan-now-contrast-event-images-20261114`
- Contrast updated to warm light panel / dark text and clear event date rows; mobile poster sizing is constrained to avoid cropping.
- Official Christmas Village Busan 2026 poster located on Market Chango's event page and referenced in homepage feature.
- Rights blocker: organizer page does not publish image reuse/commercial license terms. Registry status is `needs_review`; do not merge/deploy until permission is documented or replace with a commercially licensed image.
- Current event dates cross-checked against Busan City event calendar and the Christmas Village organizer page.
- Remaining QA: exact-head CI and screenshot review at 360/390/768/1280.


## Winter event image licensing review (2026-11-14)
- Candidate set: 2026 Millak Luce Festa Suyeong District illustration (via Haps, Nov 12); 2026 Haeundae Light Festival official Busan City poster; Christmas Village Busan 2026 organizer poster.
- No candidate is cleared for reuse based only on public visibility. Confirm explicit rights before local hosting / commercial use.
- Millak 2025 official gallery photos are KOGL Type 2 (non-commercial use prohibition), not appropriate for commercial reuse.
- Current homepage draft retains the Christmas Village 2026 poster as `needs_review`, with visible source attribution. Do not merge/deploy without permission or a verified alternative.
- Corrected the image credit's nested-anchor HTML. SEO audit for the prior exact head passed; rerun after this commit. Responsive screenshot QA remains outstanding.


### Current task handoff — Busan Now contrast
- Work branch: `fix/busan-now-contrast-current-main-20261114`.
- Contrast-only CSS refresh is based on current `main`; current Wikimedia Gwangalli night image and attribution are retained.
- Earlier PR #413 is stale/conflicted after intervening main integrations. Do not merge #413; it also contains a poster whose commercial reuse rights are unconfirmed.
- Before merge: inspect exact diff, run CI on the latest head, and complete responsive visual QA at 360 / 390 / 768 / 1280. Do not deploy until those checks pass.


## Current handoff — growth, measurement and mobile performance (2026-11-14, ChatGPT run 8)

### Completed / verified
- GSC baseline (final, 2026-10-15–11-11 PT): 453 impressions / 3 clicks overall; Taiwan 50 / 0 / pos 19.4, US 39 / 0 / 29.7, Japan 26 / 0 / 8.0. Mobile accounts for 319 impressions and all three clicks. Market samples remain small.
- GA4 baseline (2026-10-17–11-13 KST): 47 sessions / 8 active users / 68.1% engagement; 5 `affiliate_click` events / 3 users; transactions and purchase revenue 0. Analytics stream created Nov 2, opt-in measurement; country report only returned South Korea. `(not set)` is 4 sessions (8.5%); custom dimensions 0.
- Current site crawl `d1645faf-a25e-4510-b8ea-f27dabf72f31`: 50/50 pages crawled, 186 URLs not reached because of the page budget, 0 HTTP errors and 0 missing-alt findings. Ten non-critical SEO/heading findings.
- Lighthouse on that audit: 7/20 checks completed; 13 returned `INSUFFICIENT_CREDITS`. EN homepage mobile LCP 5.35 s / performance 79 / CLS 0.0155; desktop LCP 1.68 s / performance 92. Mobile lab trace estimates 9.87 MB total payload and 1.66 MB image-delivery savings; render-blocking resources estimate 630 ms. Accessibility findings include color contrast, touch-target size and accessible-name mismatch.
- GitHub main and Render latest live deploy commit: `840c332d79edac1c55ccbd763d1087945011c167`; deploy `dep-dbru5t6i0phs73bihth0` finished live at 04:26:39 UTC. Render auto-deploy is off. Direct public `/version.txt` and homepage fetch could not be independently read in this run.
- PR #414 reports 14 CI audits passed and 576 Playwright checks across 144 changed pages at 360/390/768/1280 with zero reported issues. #416 and #418 are merged integrations. No open PRs were returned by PR search.

### Remaining limitations / blockers
- GSC country samples are small; page/query row coverage is incomplete. Do not infer a market-level CTR problem from a handful of impressions.
- GA4 is consent-gated and only one organic session is visible in the 28-day window; GSC–GA4 join matched 1 of 43 candidates. Affiliate clicks are not partner bookings or revenue.
- Lighthouse credit exhaustion prevented JA homepage and 13 other device/page results. No 360/390/1280 browser screenshots were captured in this run.
- Public site HTTP access was unavailable to the direct web/container clients; Render's deploy record is the production commit evidence.

### Recommended next action (Claude technical lane)
1. Reproduce the EN homepage mobile LCP with a credit-backed Lighthouse run and inspect the LCP element and network waterfall; current lab estimate is 5.35 s.
2. Reduce the homepage's 9.87 MB mobile payload, especially the image candidates with estimated 1.66 MB savings; preserve source/license credits and use correctly sized responsive assets.
3. Inspect render-blocking homepage CSS and the Google Fonts request (estimated 630 ms savings); avoid regressions to the current hero preload and layout.
4. Resolve homepage contrast, touch-target and accessible-name findings, plus the generic “Learn more” disclosure link; validate keyboard and screen-reader names.
5. Re-run representative EN / JA / zh-TW mobile and desktop Lighthouse checks and visual QA at 360 / 390 / 1280. Keep all work in an independent Draft PR; no merge or deploy without owner approval.

### Approval boundary
- No merge, production deploy, external SNS publication/schedule change, GA4 consent or measurement-ID change, secret/token change, partner contract, paid activation, or personal-data collection was performed.
