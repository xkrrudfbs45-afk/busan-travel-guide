# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Addendum — PR #297 count fixes (2026-11-06, Claude)

- Completed: JA title/og/twitter/headline set to 6選; search-index JA/zh-TW entries updated to 6 and Gaya Park pork soup; JA/zh-TW meta descriptions updated.
- Verification: Claude reports `sh scripts/build-static.sh` passed. The 11 audits did not complete; the Technical SEO audit workflow is `action_required`, with no completed result available. 360/390px overflow remains unverified. Deployment not verified.
- Approval needed: owner review and merge decision; native review of JA/zh-TW wording.

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


## Owner-controlled execution — 2026-11-07 (ChatGPT)

- Paused the recurring Go2Busan weekly automation at the owner's request.
- Added an explicit owner-invocation / immediate-stop gate to `CLAUDE.md` on the #297 branch. Do not mention or trigger Claude unless the owner explicitly requests it for a specific task.
- Updated EN/JA/zh-TW social and structured descriptions and all three search-index entries so the six-place guide consistently includes Gaya Park pork soup.
- Latest known build result: `sh scripts/build-static.sh` passed in Claude's report. Technical SEO audit workflow is `action_required`; no successful CI audit result is confirmed. 360/390px remains unverified.
- PR #297 remains open; do not merge or deploy without owner approval.


## Current handoff — 2026-11-07 (ChatGPT, PR #297 mobile navigation)

### Completed in branch `chatgpt/jangjeon-gayapark-gukbap`
- EN/JA/zh-TW intro decks now reflect the six included recommendations, including Gaya Park pork soup.
- JA and zh-TW quick-jump menus now include all six restaurant sections; each fragment target was checked against an existing section ID.
- Added a <=680px horizontal-scroll treatment for article quick-jump links to keep navigation compact on mobile.

### Verification and release boundary
- Technical SEO audit success is confirmed for prior head `8887e94c54f2ae1fc3fbe699a40a17250fc86f89` only.
- Latest head is `d981226a176dacb398ff162f1a58640133e918af`; no CI checks are currently reported for this head. Fresh build and 360px/390px viewport/overflow checks remain unverified.
- PR #297 is open. Do not merge or deploy without explicit owner approval.
