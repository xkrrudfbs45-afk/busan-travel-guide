# Go2Busan Project Status

_Last updated: 2026-11-10 — live GitHub reconciliation_

## Verified production and repository state

- Repository: `xkrrudfbs45-afk/busan-travel-guide`; production: https://go2busan.com/; default branch: `main`.
- **main HEAD:** `197b43861bf4bdbd07e5c40fee8d28ab3b215486`. Claude's owner-approved deployment report states that `go2busan.com/version.txt` shows `197b438`; the main branch ref independently matches that commit prefix.
- Owner-approved and deployed: #274 (EN Haeundae/Seomyeon hubs), #278 (English curated Busan map, 28 places), #276 (Claude Code GitHub Action + workspace docs), #280 (EN Nampo/Gwangalli hubs and hub-to-map area links), #281 (JA/TW Haeundae/Seomyeon hubs).
- Map currently works in list + Google Maps link fallback mode. Live embedded map requires an owner-created, referrer-restricted Maps Embed API key configured in Render as `GOOGLE_MAPS_EMBED_KEY`.
- Claude reports build + all 11 repository audits passing; 169 built pages have zero horizontal overflow at 360/390px. New hubs were checked at 360/390/1280px; internal links returned 200.
- Remaining QA: native-speaker review of JA/TW copy; live Google Maps embed after key setup; live GA4 event verification after Viewer access.

## Open pull requests and decisions

| PR | Current state | PM decision / next action |
|---|---|---|
| #282 JA/TW Nampo + Gwangalli hubs | Open; CI and 11 audits pass per Claude; owner approval required | Highest-priority owner merge. Completes four neighborhood hubs in EN/JA/TW (G2B-009). Native-speaker review remains desirable. |
| #275 shared AI continuity docs | Open; clean against main and audits pass per report | Owner direct merge only. Its HANDOFF.md change duplicates the old handoff block; clean the duplicate immediately after merge or revise PR before merge. |
| #277 JA/TW navigation | Open; clean against main and audits pass per report | Owner direct merge only. Navigation improvement; preserve About links already restored. |
| #263 local shortlist + Nampo food discovery | Conflicts with current main | Do not merge as-is. Salvage only unique, useful shortlist/route/food-discovery elements after comparing with live map and hubs; reimplement on current main and rerun full QA. |
| #266 neighborhood food + firsthand pork soup guide | Draft; conflicts with current main | Keep editorial value. Rebuild as a focused food-content PR on current main, preserving firsthand labels and user-supplied facts; do not duplicate #263. |
| #269 transit, late arrival, local markets, Yeongdo | Conflicts with current main per latest Claude report | Salvage verified useful sections only. Do not add a second Busan Station late-arrival landing page while the existing KTX guide section targets the same intent. Prefer improving the existing section; separately assess fireworks/transit/Yeongdo/Gupo content and current factual validity. |

## Search Console and discoverability

- Claude reports indexing requests submitted on 2026-11-06 for 7 priority guides, the map, and Haeundae/Seomyeon/Nampo hubs.
- Daily request quota was reached. Gwangalli and the remaining JA/TW hub URLs are queued for the next available quota.
- Most core guides remain "Discovered – currently not indexed". Treat this as an index coverage/authority maturation issue unless URL-level inspection identifies a technical defect. Do not claim indexing until Search Console confirms it.
- Continue a small daily batch of high-value URLs; prioritize canonical URLs and avoid requesting duplicate/redirect URLs.

## Owner-controlled blockers

1. Merge approval: #282. Direct merge decision: #275 and #277.
2. Claude Action activation: install Claude GitHub App, add `CLAUDE_CODE_OAUTH_TOKEN` or `ANTHROPIC_API_KEY`, and protect `main`. The workflow is restricted to owner-invoked `@claude`, `claude/*` branches and PR creation; it must not merge or push to main.
3. Live map: create Maps Embed API key with HTTP referrer restriction for Go2Busan and set Render `GOOGLE_MAPS_EMBED_KEY`.
4. GA4: grant the Claude browser account Viewer access to verify actual event collection.
5. Agoda: partner approval remains pending.

## Backlog status

| Workstream | Status | Owner | Evidence / next action |
|---|---|---|---|
| Production baseline and technical audit | Done | Claude | main `197b438`; build + 11 audits; 169 pages mobile overflow = 0 |
| Four neighborhood hubs, EN | Done | Claude | #274 + #280 deployed |
| Four neighborhood hubs, JA/TW | In progress | Owner / Claude | Haeundae + Seomyeon live (#281); Nampo + Gwangalli await #282 approval |
| Busan map MVP, EN | Done (fallback mode) | Owner | #278 deployed; 28 places; embed key pending |
| Map JA/TW versions | Not started | Claude | Build on existing map data and shared UI; avoid duplicating place records |
| Search Console index requests | In progress | Owner / Claude | First batch submitted; quota-limited URLs queued |
| PR cleanup and content salvage | In progress | Claude | #263/#266/#269 need scoped rebuilds on current main |
| Shared AI workspace docs | Done | ChatGPT / Claude | #271 and #276 deployed; #275 duplicate handoff cleanup remains |
| Claude GitHub automation | Blocked | Owner | #276 deployed; App + secret + branch protection setup pending |
| Affiliate measurement | Blocked | Owner | Klook event code audited; GA4 Viewer access required; Agoda approval pending |

## Operating rules

- Check live GitHub PRs and production version before every work session; this document is a snapshot.
- No merge or deployment without explicit owner approval.
- Do not claim Google indexation, partner bookings, revenue, or live analytics based only on code changes.
- Update this file and HANDOFF.md after meaningful work, recording PRs, commit SHAs, tests and blockers.


## Live reconciliation — 2026-11-10

- Latest verified GitHub `main` HEAD: `5a705ead6f736bf648c583df14f968b76064a3bc` (Taiwan-focused Traditional Chinese guide, merged as #302). The prior production baseline `197b438` is historical; current production version was not independently verified in this session.
- Current open PR inventory: #306, #305, #304, #303, #301, #300, #298, #297, #294, #293, #286, #283, #269, #277, #275, #266, #263.
- **Live-main editorial defect:** EN and JA homepages still show the expired Nov 7, 2026 fireworks campaign. The existing #306 winter branch now replaces EN and JA campaign panels with current winter information; JA copy links explicitly to the English detailed guide. Its homepage social preview image was also changed from fireworks to the existing Busanhang Bridge homepage image. Latest branch commits: `694ff1a` (EN preview) and `8d4b398` (JA seasonal panel + preview). These changes are not deployed; no CI checks were returned for the latest commits at the time of this update.
- #303 also changes the EN homepage seasonal feature while adding EN/zh-TW autumn, Yeongdo, Jeonpo and souvenir guides. Coordinate #303 and #306 before merging so an older autumn feature cannot overwrite the newer EN winter feature; retain the zh-TW localized autumn content.
- #304 and #305 both revise Instagram/Threads calendars and drafts. Reconcile schedule windows, post states and source registers before merging either; do not activate or change publisher workflows, secrets, tokens or LIVE settings.
- Other current content PRs: #301 Busan Station luggage/accessibility; #300 Dongnae pajeon fact-check; #298 Spa Land heading order; #297 PNU Gaya Park recommendation. #294 adds JA/TW map pages. #269/#266/#263 remain older content branches and require conflict/duplication review before any merge.
- **Approval boundary:** no merge, production deploy, live publishing, workflow schedule change, secret/token change, or paid spend without explicit owner approval.


### Additional audit — localized previews and social approval states

- #303 branch now uses the evergreen Busanhang Bridge homepage image for both EN and zh-TW social previews (latest commits `0d9951b`, `5d276ed`); the autumn feature and localized guide content remain intact.
- Static checks on the updated #303/#306 branches confirm the expired fireworks image reference is absent from EN, JA and zh-TW homepages in the relevant branches. This is branch-level verification only; main remains unchanged until owner-approved merge/deploy.
- Social schedule comparison: main currently has 6 approved + 18 draft Instagram posts; 180 approved Threads posts. PR #304 branch has 6 approved + 18 draft Instagram and 138 approved + 42 draft Threads. PR #305 branch has 21 approved + 3 cancelled Instagram and 178 approved + 2 cancelled Threads. Because these PRs touch the same schedule files and #305 contains many approved posts, merging it could make content eligible for existing publisher workflows if LIVE variables are enabled. Treat #305 as a publication approval decision, not a routine content-only merge. No schedule, LIVE variable, workflow cadence, token or secret was changed in this work.
