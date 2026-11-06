# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-06 (Claude)

### Completed
- PR #269 analysed: mergeable, checks pass, trial merge passes all audits. See STATUS for the two items to fix before merging.
- PR #274: Haeundae and Seomyeon neighborhood hubs (EN), wired into `/guides/`, sitemap, search index and three related guides.
- Claude Code GitHub Action PR: owner-only `@claude` trigger; works on `claude/` branches and opens PRs; merge, push to main, force-push and `gh api` are blocked in the workflow.

### Verification
- `sh scripts/build-static.sh` and all 11 audits in `seo-audit.yml`: pass.
- Mobile overflow on 158 built pages at 360 and 390: 0. Hub screenshots at 360, 390 and 1280: OK.
- Neither PR is merged. Nothing was deployed.

### Approval / setup needed from the owner
1. Review and merge (or close) #274 and the Claude action PR. Merging = production deploy.
2. Decide #269 (update branch; drop or link the duplicate late-arrival directory entry), #263 and #266.
3. To enable the Claude action: install https://github.com/apps/claude on this repo; add repo secret `CLAUDE_CODE_OAUTH_TOKEN` (run `claude setup-token` with a Pro/Max account) or `ANTHROPIC_API_KEY` (and switch the input line in `claude.yml`); protect `main` (require PR + "Technical SEO audit", block force-push). Details: `CLAUDE_AUTOMATION.md`.
4. Add Claude's browser account as GA4 Viewer to verify live events.

### Recommended next action
- Claude: Nampo and Gwangalli hubs after #274 review; then JA/TW versions of the hubs. Continue daily Search Console indexing requests for core URLs.

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
