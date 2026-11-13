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
