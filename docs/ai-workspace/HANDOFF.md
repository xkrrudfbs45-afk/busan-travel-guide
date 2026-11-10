# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-10 (ChatGPT, content and SNS safety review)

### Completed
- Opened consolidated Nampo food guide PR #309; superseded draft PRs #307/#308 were closed. Source links now distinguish local tip, current directory listings and official Visit Busan data.
- Updated PR #305 branch: expired Threads slots with no publisher-log match are cancelled; four posts remain drafts per the owner’s prior instruction; eight JP/US Day 8–9 posts were rewritten and returned to draft; Taiwan transit and Sky Capsule copy is checked against official sources. Current Threads counts: 148 approved, 20 cancelled, 12 draft. The 21 Instagram carousels remain approved.
- PR #305 is intentionally draft because merging may activate scheduled posting if LIVE variables are enabled. No account post, token, secret, workflow cadence, LIVE setting, merge or deployment was changed.

### Verification
- PR #305 preceding revision: Instagram content tests and Technical SEO audit passed. The latest schedule, localized link-reply and copy changes need a fresh CI run.
- PR #309 initial revision: Technical SEO audit/build passed. A subsequent HTML paragraph closure fix still needs a fresh check.
- PR #311: six EN/JA/Traditional Chinese food pages pass local structural checks (unique IDs, no broken in-page anchors, balanced paragraph tags and valid JSON-LD); build, SEO and mobile viewport CI pending.
- Threads reconciliation on PR #305 branch: 148 approved, 20 cancelled, 12 draft; zero expired approved slots without a matching publisher-log entry; zero future approved posts with `needs_check` status.

### Approval / setup needed from the owner
1. Review and decide whether to merge #305; merge may enable the already-configured scheduled publishers if LIVE variables are true.
2. Review #309 for the Nampo food guide; merge will deploy the content.
3. Review #311 for Seomyeon, Gaya Park and PNU food guides; merge will deploy the content.
4. Before reusing any cancelled Threads post without a publisher-log record, manually compare the live account history.
5. Reapprove the eight refreshed JP/US Threads posts only after reviewing the revised copy.
6. No request to change LIVE variables, secrets, tokens or workflow schedules is included.

### Recommended next action
- Re-run CI on the latest heads of #305, #309 and #311, then review mobile rendering and source/image rights for the food pages.

## Historical handoff — 2026-11-06 (Claude, after deploy 197b438)

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
