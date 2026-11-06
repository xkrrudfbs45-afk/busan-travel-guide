# Go2Busan Project Status

_Last updated: 2026-11-06 — Claude (after #271)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-06, Claude)

- **main:** `a5fd4da` (#271 workspace docs). Earlier this week #264, #265, #267, #268 and #270 were merged and live-verified on go2busan.com.
- **PR #269 (Codex):** GitHub reports no conflicts and all checks passing; a trial merge onto current main also passes all 11 audits. The earlier "unmergeable" note is stale. Before merging: update the branch (its base `cbc813d` is behind main), and resolve one duplicate-intent risk — the new `/guides/busan-station-late-arrival/` overlaps the existing directory entry "Late-Night Arrival at Busan Station" (`ktx-booking-guide/#late-night-arrival`). Owner decision.
- **Other Codex PRs:** #263 conflicts with #266; #266 is a draft. Owner decision.
- **Technical SEO:** sitemap has lastmod for every URL; robots.txt OK; every guide is within 2 clicks of home; built-page mobile overflow at 360/390 = 0. Main gap is index coverage (site age/authority), not structure.
- **Search Console:** most core guides are "Discovered – not indexed". Indexing requested on 2026-11-06 for 7 URLs (guides hub, airport-to-haeundae, winter, JA/TW hubs, where-to-stay, transit-card). Daily quota about 10.
- **Affiliate:** Klook CTAs audited (EN + JA/TW) with `affiliate_cta_view` and unchanged `affiliate_click`. Agoda approval still pending. Clicks are not bookings.
- **GA4:** the Go2Busan property is not visible in Claude's browser account; owner needs to add Viewer access for live event checks.

## Open PRs from Claude (not merged)

- **#274** — Haeundae and Seomyeon neighborhood hubs (EN). Audits pass; 360/390/1280 checked.
- **Claude Code action PR** — `.github/workflows/claude.yml` + `CLAUDE_AUTOMATION.md`. Needs owner setup before it can run (see HANDOFF).

## Status categories

Use one of:
- `Not started`
- `In progress`
- `Blocked`
- `Ready for review`
- `Done`
- `Deferred`

## Work tracking

| Workstream | Status | Owner | Evidence / next action |
|---|---|---|---|
| Shared AI workspace | Done | ChatGPT | #271 merged by owner |
| PR #269 validation | Ready for review | Owner | Mergeable, audits pass; update branch + resolve late-arrival duplicate first |
| Technical SEO audit | Done | Claude | No structural blockers; keep daily indexing requests |
| Taiwan content plan | Not started | ChatGPT + Claude | Inspect existing Traditional Chinese pages first |
| Four neighborhood hubs | In progress | Claude | #274 Haeundae + Seomyeon; Nampo + Gwangalli next |
| Claude GitHub automation | Blocked | Owner | Install Claude GitHub App, add secret, protect main |
| Affiliate measurement | Blocked | Owner | Code done (#268/#270); GA4 Viewer access needed to verify live events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.
