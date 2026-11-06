# Go2Busan Project Status

_Last updated: 2026-11-06 — reconciled with Claude report and GitHub main_

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
