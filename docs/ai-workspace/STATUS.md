# Go2Busan Project Status

_Last updated: 2026-11-06 — Claude (after #280, #281; #282/#286/#290/#291 open)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-06, Claude)

- **main / production:** `197b438`. Owner approved and Claude merged #274, #276, #278 (earlier `3ca1965`), then #280 and #281 (JA/TW Haeundae and Seomyeon hubs) on 2026-11-06. Live checks: `/guides/busan-map/` (28 places, link fallback because no Maps key yet), Haeundae and Seomyeon hubs, `/guides/` directory and sitemap entries.
- **PR #269 (Codex):** GitHub reports no conflicts and all checks passing; a trial merge onto current main also passes all 11 audits. The earlier "unmergeable" note is stale. Before merging: update the branch (its base `cbc813d` is behind main), and resolve one duplicate-intent risk — the new `/guides/busan-station-late-arrival/` overlaps the existing directory entry "Late-Night Arrival at Busan Station" (`ktx-booking-guide/#late-night-arrival`). Owner decision.
- **Other Codex PRs:** #263 conflicts with #266; #266 is a draft. Owner decision.
- **Technical SEO:** sitemap has lastmod for every URL; robots.txt OK; every guide is within 2 clicks of home; built-page mobile overflow at 360/390 = 0. Main gap is index coverage (site age/authority), not structure.
- **Search Console:** most core guides are "Discovered – not indexed". Indexing requested on 2026-11-06 for 7 URLs (guides hub, airport-to-haeundae, winter, JA/TW hubs, where-to-stay, transit-card). Daily quota about 10.
- **Affiliate:** Klook CTAs audited (EN + JA/TW) with `affiliate_cta_view` and unchanged `affiliate_click`. Agoda approval still pending. Clicks are not bookings.
- **GA4:** the Go2Busan property is not visible in Claude's browser account; owner needs to add Viewer access for live event checks.

## Open PRs from Claude (not merged, all CI green)

- **#282** JA/TW Nampo-dong and Gwangalli hubs.
- **#286** Claude Code action: wider `--allowedTools` (build + audits) and PR creation instructions, after the first `@claude` run (issue #285) could not build or open a PR.
- **#290** Homepages (EN/JA/TW) link to the neighborhood hubs and the Busan map.
- **#291** Klook CTAs on the Haeundae, Seomyeon, Nampo and Gwangalli hubs (existing affiliate IDs and link format; GA4 events unchanged).

Merge = production deploy; none are merged without owner approval. Follow-up after #282: add JA/TW Nampo/Gwangalli hub links to the JA/TW homepages.

## Waiting on the owner

- Live map: Maps Embed API key restricted to go2busan.com, set as `GOOGLE_MAPS_EMBED_KEY` in Render (`MAPS_EMBED.md`). Owner is doing this at home.
- Claude Code action is installed (App, token secret, ruleset on `main`); `@claude` was verified end to end on issue #285. #286 fixes its limits.
- Other agents' PRs: #275, #277 merge cleanly but need the owner; #283 conflicts with #282/#290; #263, #266, #269 conflict with main or have a duplicate-intent risk (see below).
- GA4 Viewer access for Claude's browser account; Agoda approval.

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
| Four neighborhood hubs | Ready for review | Claude | EN hubs and JA/TW Haeundae + Seomyeon live (#274, #281); JA/TW Nampo + Gwangalli in #282; hub CTAs in #291; homepage links in #290 |
| Claude GitHub automation | Ready for review | Owner | Installed and verified (issue #285); #286 widens allowed tools |
| Busan map MVP (#273) | Done (link fallback) | Owner | #278 live; interactive map needs Maps Embed key in Render |
| Affiliate measurement | Blocked | Owner | Code done (#268/#270); GA4 Viewer access needed to verify live events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.
