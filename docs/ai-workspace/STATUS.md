# Go2Busan Project Status

_Last updated: 2026-11-06 — Claude (after #274, #276, #278)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-06, Claude)

- **main / production:** `3ca1965`. Owner approved and Claude merged #274, #278 and #276 on 2026-11-06; Render deploy succeeded and `go2busan.com/version.txt` shows `3ca1965`. Live checks: `/guides/busan-map/` (28 places, link fallback because no Maps key yet), Haeundae and Seomyeon hubs, `/guides/` directory and sitemap entries.
- **PR #269 (Codex):** GitHub reports no conflicts and all checks passing; a trial merge onto current main also passes all 11 audits. The earlier "unmergeable" note is stale. Before merging: update the branch (its base `cbc813d` is behind main), and resolve one duplicate-intent risk — the new `/guides/busan-station-late-arrival/` overlaps the existing directory entry "Late-Night Arrival at Busan Station" (`ktx-booking-guide/#late-night-arrival`). Owner decision.
- **Other Codex PRs:** #263 conflicts with #266; #266 is a draft. Owner decision.
- **Technical SEO:** sitemap has lastmod for every URL; robots.txt OK; every guide is within 2 clicks of home; built-page mobile overflow at 360/390 = 0. Main gap is index coverage (site age/authority), not structure.
- **Search Console:** most core guides are "Discovered – not indexed". Indexing requested on 2026-11-06 for 7 URLs (guides hub, airport-to-haeundae, winter, JA/TW hubs, where-to-stay, transit-card). Daily quota about 10.
- **Affiliate:** Klook CTAs audited (EN + JA/TW) with `affiliate_cta_view` and unchanged `affiliate_click`. Agoda approval still pending. Clicks are not bookings.
- **GA4:** the Go2Busan property is not visible in Claude's browser account; owner needs to add Viewer access for live event checks.

## Open PRs from Claude (not merged)

- **Nampo-dong and Gwangalli hubs** (this PR) — completes the four neighborhood hubs (G2B-009); map deep links `?area=` from hubs; audits pass; 360/390/1280 checked.

## Waiting on the owner

- Claude Code action: enabled on 2026-11-06 (GitHub App installed, CLAUDE_CODE_OAUTH_TOKEN set, main ruleset active).
- Live map (#278, merged): Maps Embed API key restricted to go2busan.com, set as `GOOGLE_MAPS_EMBED_KEY` in Render.

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
| Four neighborhood hubs | Ready for review | Claude | Haeundae + Seomyeon live (#274); Nampo + Gwangalli in open PR |
| Claude GitHub automation | Blocked | Owner | #276 merged; Install Claude GitHub App, add secret, protect main |
| Busan map MVP (#273) | Done (link fallback) | Owner | #278 live; interactive map needs Maps Embed key in Render |
| Affiliate measurement | Blocked | Owner | Code done (#268/#270); GA4 Viewer access needed to verify live events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.
