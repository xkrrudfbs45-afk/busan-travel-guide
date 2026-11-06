# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-06 (Claude, after deploy 3ca1965)

### Completed
- Merged with owner approval and deployed: #274 (Haeundae/Seomyeon hubs), #278 (curated Busan map), #276 (Claude Code action + workspace docs). Production `version.txt` = `3ca1965`.
- Open PR: Nampo-dong and Gwangalli hubs, plus hub ↔ map links (`/guides/busan-map/?area=nampo` etc.).

### Verification
- Build and all 11 audits pass. Mobile overflow at 360/390 on 161 built pages: 0. New hubs at 360/390/1280: no overflow, TOC and cover present. Map deep link `?area=nampo` shows 6 places.

### Approval / setup needed from the owner
1. Review and merge the Nampo/Gwangalli hub PR (merge = production deploy).
2. Claude action: GitHub App, `CLAUDE_CODE_OAUTH_TOKEN` or `ANTHROPIC_API_KEY`, main branch protection (`CLAUDE_AUTOMATION.md`).
3. Live map: Maps Embed API key restricted to go2busan.com → Render `GOOGLE_MAPS_EMBED_KEY` (`MAPS_EMBED.md`).
4. Decide #269, #263, #266 (Codex) and #275, #277.
5. GA4 Viewer access for Claude's browser account.

### Recommended next action
- Claude: request Search Console indexing for the map and four hubs; then JA/TW versions of the hubs and map.

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
