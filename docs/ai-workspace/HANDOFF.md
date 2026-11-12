# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-06 (Claude, after deploy 197b438)

### Completed
- Deployed: #280 (Nampo-dong and Gwangalli hubs, hub ↔ map links) and #281 (JA/TW Haeundae and Seomyeon hubs). Production `version.txt` = `197b438`.
- Open PR: JA/TW Nampo-dong and Gwangalli hubs, reciprocal hreflang on the EN hubs, JA/TW directory and where-to-stay links.

### Verification
- Build and all 11 audits pass. Mobile overflow at 360/390 on 169 built pages: 0. New JA/TW hubs at 360/390/1280: no overflow, TOC present, every internal link returns 200.

### Approval / setup needed from the owner
1. Merge the JA/TW Nampo/Gwangalli hub PR (merge = production deploy).
2. Merge or approve by number #275 and #277 (clean, audits pass; Claude is blocked from merging PRs it did not author).
3. Decide on #263, #266, #269 (conflicting). Claude can rebase their content into fresh PRs if asked.
4. Claude action setup, Maps Embed key, GA4 Viewer access.

### Recommended next action
- Claude: finish Search Console indexing requests (Gwangalli hub, JA/TW hubs) after the daily quota resets; then a JA/TW version of the Busan map.

### zh-TW affiliate CTAs (2026-11-12, Claude)
- CTA copy for zh-TW lives in `content/affiliate/zh-tw-cta.json` (not in page HTML). ChatGPT may edit the copy there; keep `aff_adid`, `dest` and `before` unless coordinated.
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
