# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-06 (Claude, main `884c559`)

### Completed
- On main (owner approved): #274, #276, #278, #280, #281, #282, #290. `884c559` is the #290 merge (homepages link to hubs and map); Render deploy of `884c559` reported by the owner, not re-verified this session.
- Open: #286 and #291 (CI green, mergeable), #293 (this docs PR), #294 (JA/TW map, CI green but conflicting), plus #283, #277, #275, #269, #263, #266 (mergeability unknown when checked). #296 closed.

### Verification
- Docs-only PR. This run could not fetch or update the branch to `origin/main` (git fetch/checkout were not permitted), so the branch base is behind main; its docs replace main's older STATUS/HANDOFF. See the PR comment for build and audit results.

### Open issues / blockers
- #294 conflicts with main; needs rebase.
- GA4 events unverified live; Maps key not set.

### Approval / setup needed from the owner
1. Merge decisions for #286, #291 (merge = production deploy).
2. Maps Embed API key → Render `GOOGLE_MAPS_EMBED_KEY` (`MAPS_EMBED.md`).
3. Decide #294, #269, #263, #266, #275, #277, #283.
4. GA4 Viewer access for Claude's browser account.

### Recommended next action
- Claude: confirm live `version.txt` = `884c559`; rebase #294 if asked; request Search Console indexing for JA/TW hubs (quota ~10/day).

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
