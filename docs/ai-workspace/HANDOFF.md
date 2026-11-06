# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-06

### Next action
Claude: inspect the current repository and all open PRs, beginning with PR #269. Verify its current head, checks, mergeability, and whether it has already been merged or deployed. Do not assume historical status is current.

### First engineering batch
1. Validate the latest PR #269 changes.
2. Run the documented build and quality/SEO audits.
3. Visually inspect 360px, 390px, and desktop layouts.
4. Audit sitemap URLs, canonical, hreflang, robots/noindex, redirects, broken links, and orphan pages.
5. Inventory Agoda/Klook affiliate URLs and verify click tracking without claiming completed bookings.
6. Report existing implementation before proposing duplicate pages or features.

### Constraints
- Do not merge or deploy without explicit project-owner approval.
- Do not modify production secrets or publish private commercial data.
- Avoid broad refactors unrelated to the active task.
- Preserve existing URLs and multilingual SEO.
- Use a dedicated implementation branch and a focused PR.
- Update `STATUS.md` and this handoff after work is complete.

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
