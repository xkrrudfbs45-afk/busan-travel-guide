# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-06 (Claude, main `197b438`)

### Completed
- Live (owner approved): #274, #276, #278, #280, #281 — EN hubs, curated map (link fallback), Claude Code action, JA/TW Haeundae/Seomyeon hubs.
- Open, CI green, awaiting owner: #282 (JA/TW Nampo/Gwangalli hubs), #286 (Claude action tool limits), #290 (homepage links to hubs/map), #291 (Klook CTAs on the four hubs).
- `@claude` first run (issue #285) created a branch but no PR because build and audit commands were blocked; #286 fixes this.

### Verification
- Build and all audits pass on each open PR; 360/390/1280 checks done for new pages. Live production checked for #274–#281 content. GA4 events are still unverified live.

### Approval / setup needed from the owner
1. Merge #282, #286, #290, #291 (merge = production deploy).
2. Maps Embed API key → Render `GOOGLE_MAPS_EMBED_KEY` (`MAPS_EMBED.md`).
3. Decide #269, #263, #266 (Codex), #275, #277, #283.
4. GA4 Viewer access for Claude's browser account.

### Recommended next action
- Claude: after #282 merges, link JA/TW Nampo/Gwangalli hubs from the JA/TW homepages; request Search Console indexing (quota resumes 11/7); then JA/TW map and re-based versions of #263/#266/#269 on current main.

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
