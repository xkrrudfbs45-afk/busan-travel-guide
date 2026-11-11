# Go2Busan Contributor Handoff

Use this file to hand work between the project owner, ChatGPT, and Claude. Keep the current handoff concise and replace the previous handoff when a new task becomes active. Preserve longer-term decisions in `DECISIONS.md`.

## Current handoff — 2026-11-11 (ChatGPT, Taiwan localization remediation)

### Completed
- Audited all 50 Traditional Chinese sitemap pages on main and compared the 69 English/root URLs, sitemap hreflang pairs and localized search index. Added `docs/ai-workspace/TAIWAN-LOCALIZATION-AUDIT.md` with exact gaps and a Taiwan-first remediation order.\n- Opened draft PR #312 with three new Taiwan guides (Sky Capsule booking, Kkangtong Market food, Kkangtong bath-shopping), all six search-index fixes, five language-tag normalizations, localized Dongnae/Nampo footers and reciprocal hreflang for four guide pairs.
- Opened consolidated Nampo food guide PR #309; superseded draft PRs #307/#308 were closed. Source links now distinguish local tip, current directory listings and official Visit Busan data.
- Updated PR #305 branch: expired Threads slots with no publisher-log match are cancelled; four posts remain drafts per the owner’s prior instruction; eight JP/US Day 8–9 posts were rewritten and returned to draft; Taiwan transit and Sky Capsule copy is checked against official sources. Current Threads counts: 148 approved, 20 cancelled, 12 draft. The 21 Instagram carousels remain approved.
- PR #305 is intentionally draft because merging may activate scheduled posting if LIVE variables are enabled. No account post, token, secret, workflow cadence, LIVE setting, merge or deployment was changed.
- Created `docs/ai-workspace/FOOD-PHOTO-SHOTLIST.md` with restaurant-by-restaurant capture priorities, original-image rights, privacy checks, filename rules and mobile framing guidance.

### Verification
- Main baseline `5a705ead6f736bf648c583df14f968b76064a3bc`: 50 zh-TW URLs, 69 English/root URLs, 22 English/root URLs without zh-TW hreflang, and six existing Taiwan guides missing from search. PR #312 fixes the six search omissions and adds three Taiwan guides; branch search index has 49 Taiwan URLs (48 guides + directory). Four hreflang pairs were added/restored, leaving 18 English/root guide URLs without zh-TW alternates. Five page language tags and Dongnae/Nampo footer links were corrected.\n- PR #312 CI passed: 172 HTML pages, 4,886 local links, zero broken local links, zero missing descriptions and zero missing canonicals; 76 non-blocking legacy social-image warnings remain. Production version/deployment was not verified.
- PR #305 preceding revision: Instagram content tests and Technical SEO audit passed. Latest CI on the current PR #305 head passes Instagram content tests and Technical SEO. All 180 schedule entries match the source calendars; eight refreshed JP/US posts remain draft.
- PR #309 initial revision: Technical SEO audit/build passed. A subsequent HTML paragraph closure fix still needs a fresh check.
- PR #311: six EN/JA/Traditional Chinese food pages plus five homepage/directory files pass local structural checks (unique IDs, no broken in-page anchors, balanced paragraph tags and valid JSON-LD); latest Technical SEO build/audit passes.
- Threads reconciliation on PR #305 branch: 148 approved, 20 cancelled, 12 draft; zero expired approved slots without a matching publisher-log entry; zero future approved posts with `needs_check` status.

### Approval / setup needed from the owner
1. Review and decide whether to merge #305; merge may enable the already-configured scheduled publishers if LIVE variables are true.
2. Review #309 for the Nampo food guide; merge will deploy the content.
3. Review #311 for Seomyeon, Gaya Park and PNU food guides; merge will deploy the content.
4. Before reusing any cancelled Threads post without a publisher-log record, manually compare the live account history.
5. Reapprove the eight refreshed JP/US Threads posts only after reviewing the revised copy.
6. No request to change LIVE variables, secrets, tokens or workflow schedules is included.

### Recommended next action
- Check the remaining 18 English/root guides without zh-TW hreflang for translated equivalents under different slugs; prioritize high-intent gaps (Busan map, Visit Busan Pass, local food picks, coffee, Haeundae food and family travel). Reconcile stale localization PRs #269, #294 and #303 against current main before creating duplicate work.\n- Keep PR #312 draft until owner review; no merge/deploy without approval. Review #305's social publishing safety gate separately; do not change LIVE settings or schedules.
- Keep #305 draft until the owner reviews the scheduled-publishing safety gate; do not merge or deploy without explicit approval.

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
