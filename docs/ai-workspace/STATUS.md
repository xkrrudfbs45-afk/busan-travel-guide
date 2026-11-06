# Go2Busan Project Status

_Last updated: 2026-11-06 — Claude (after #282, #290; main `884c559`)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-06, Claude)

- **main / production:** `884c559` ("Link neighborhood hubs and Busan map from homepages", #290). Merged on 2026-11-06 with owner approval: #274, #276, #278, #280, #281, then #282 (JA/TW Nampo and Gwangalli hubs) and #290 (homepage links to hubs and map). Render deploy of `884c559` is as reported by the owner; this session could not fetch `go2busan.com/version.txt`, so re-check it at the start of the next task. Map has a link fallback until the Maps key is set.
- **PR #269 (Codex):** GitHub reports no conflicts and all checks passing; a trial merge onto current main also passes all 11 audits. The earlier "unmergeable" note is stale. Before merging: update the branch (its base `cbc813d` is behind main), and resolve one duplicate-intent risk — the new `/guides/busan-station-late-arrival/` overlaps the existing directory entry "Late-Night Arrival at Busan Station" (`ktx-booking-guide/#late-night-arrival`). Owner decision.
- **Other Codex PRs:** #263 conflicts with #266; #266 is a draft. Owner decision.
- **Technical SEO:** sitemap has lastmod for every URL; robots.txt OK; every guide is within 2 clicks of home; built-page mobile overflow at 360/390 = 0. Main gap is index coverage (site age/authority), not structure.
- **Search Console:** most core guides are "Discovered – not indexed". Indexing requested on 2026-11-06 for 7 URLs (guides hub, airport-to-haeundae, winter, JA/TW hubs, where-to-stay, transit-card). Daily quota about 10.
- **Affiliate:** Klook CTAs audited (EN + JA/TW) with `affiliate_cta_view` and unchanged `affiliate_click`. Agoda approval still pending. Clicks are not bookings.
- **GA4:** the Go2Busan property is not visible in Claude's browser account; owner needs to add Viewer access for live event checks.

## Open PRs (GitHub state checked 2026-11-06; none merged without owner approval)

- **#286** (Claude) Claude Code action: wider `--allowedTools` and PR creation instructions. CI green, mergeable.
- **#291** (Claude) one Klook CTA per neighborhood hub (existing affiliate IDs; GA4 events unchanged). CI green, mergeable.
- **#293** (this PR) docs only: STATUS/HANDOFF.
- **#294** (owner branch) JA/TW Busan map pages. CI green but GitHub reports **CONFLICTING**; needs a rebase onto `884c559`.
- **#283** (docs reprioritization), **#277** (Codex JA/TW nav), **#275** (ChatGPT docs), **#269**, **#263**, **#266** (draft): open; GitHub mergeability was still `UNKNOWN` when checked, so re-check before acting. Earlier notes: #269 has a late-arrival duplicate-intent risk; #263/#266 overlap; #283 likely conflicts with the docs here.
- **#296** (ChatGPT, map localization polish) is closed, not merged.

Merge = production deploy. Follow-up: a JA/TW map in #294 may replace the planned JA/TW map work.

## Waiting on the owner

- Live map: Maps Embed API key restricted to go2busan.com, set as `GOOGLE_MAPS_EMBED_KEY` in Render (`MAPS_EMBED.md`). Owner is doing this at home.
- Claude Code action is installed (App, token secret, ruleset on `main`); `@claude` was verified end to end on issue #285. #286 fixes its limits.
- Other agents' PRs (#275, #277, #283, #263, #266, #269) and owner PR #294 (conflicting): see the open PR list above.
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
| Four neighborhood hubs | Done (CTAs pending) | Claude | All 4 hubs × 3 languages merged (#274, #280, #281, #282); homepage links merged (#290); hub CTAs in #291 |
| Claude GitHub automation | Ready for review | Owner | Installed and verified (issue #285); #286 widens allowed tools |
| Busan map MVP (#273) | Done (link fallback) | Owner | #278 live; interactive map needs Maps Embed key in Render |
| Affiliate measurement | Blocked | Owner | Code done (#268/#270); GA4 Viewer access needed to verify live events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.
