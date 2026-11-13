# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

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
