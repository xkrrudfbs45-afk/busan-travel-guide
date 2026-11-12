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
