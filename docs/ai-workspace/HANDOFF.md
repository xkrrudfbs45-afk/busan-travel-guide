# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-12 (ChatGPT growth and image audit)

### Completed
- Confirmed GitHub main at `60146784d5563ed4628afcb8c58eb272028ed536`; PR #383 image quality batch 1 merged and its Technical SEO audit / Growth ops checks passed.
- Re-read connected GSC and GA4. GSC 2026-10-13–11-09: 353 impressions / 2 clicks; Taiwan 43, USA 28, Japan 20 impressions, with zero clicks in each target market. GA4 2026-10-15–11-11: 40 sessions, 8 users, 1 organic session, 5 affiliate_click events from 3 users, 0 transactions/revenue.
- Completed a 50-page SEO crawl: no missing alt among crawled pages; 127 URLs not crawled. A separate Lighthouse-enabled audit is running; results must be checked before reporting performance.
- Updated the global growth, SNS, and operations automations with recurring image-quality checks covering source/license, real-place/menu fit, alt, OG/social imagery, mobile crop, responsive delivery, file weight, LCP/CLS, and approval safeguards.
- Added evidence and rebase/consolidation notes to PR #359, #382, and #320.

### Verification and limitations
- The current main SHA is verified from GitHub. Production `version.txt` was not readable in this run and Render workspace selection was not available; production deployment SHA remains unverified.
- GA4 is opt-in and undercounts; recorded countries show Korea only. Do not infer that no overseas users visited.
- GSC samples are small. Do not overinterpret positions or zero clicks at market level.
- The crawl checks alt and page-level SEO but not image licensing, visual crop, or full image delivery. Lighthouse results are pending.

### Open conflicts / next actions
- #320 and #311 overlap on JA/TW PNU food-guide HTML files.
- #314 and #315 overlap on EN Haeundae food guide.
- #316 and #321 overlap on 31 files. Consolidate each pair before further edits.
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
