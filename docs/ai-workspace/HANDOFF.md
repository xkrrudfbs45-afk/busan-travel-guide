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
