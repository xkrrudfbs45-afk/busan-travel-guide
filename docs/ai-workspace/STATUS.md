# Go2Busan Project Status

_Last updated: 2026-11-06 — Claude (after #280, #281)_

This file is an operational snapshot, not a substitute for checking GitHub and production at the start of each task.

## Known project context

- Repository: `xkrrudfbs45-afk/busan-travel-guide`
- Production site: https://go2busan.com/
- Default branch: `main`
- Site type: multilingual static Busan travel guide.
- Existing languages include English, Japanese, and Traditional Chinese.
- Deployment platform documented in repository README: Render.

## Verified state (2026-11-06, Claude)

- **main / production:** `197b438`. Merged with owner approval and deployed on 2026-11-06: #274, #278, #276, #280, #281. `go2busan.com/version.txt` = `197b438`. Live checks: map (28 places, link fallback until the Maps key is set; `?area=nampo` → 6), four EN neighborhood hubs, JA/TW Haeundae and Seomyeon hubs (lang + hreflang).
- **Open PRs by other agents:** #275 (ChatGPT docs) and #277 (Codex JA/TW nav) merge cleanly and pass all audits together, but Claude's merge attempt was blocked by the session safety layer because Claude did not author them; owner merges or approves them by number. #275 appends a second full copy of HANDOFF.md, so clean up after it merges.
- **Conflicting PRs:** #263 (search-index, neighborhood food guide), #266 draft (neighborhood food guide), #269 (search-index, where-to-stay EN/JA/TW; also the late-arrival duplicate entry). Need rebasing onto main.
- **Technical SEO:** sitemap lastmod on all URLs; robots OK; guides within 2 clicks; built-page overflow at 360/390 = 0. Gap is index coverage, not structure.
- **Search Console:** indexing requested 2026-11-06 for 7 core URLs, then the map, Haeundae, Seomyeon and Nampo hubs. Quota hit at the Gwangalli hub; remaining: Gwangalli hub and the JA/TW hubs.
- **Affiliate:** Klook CTAs with `affiliate_cta_view`; `affiliate_click` unchanged. Agoda pending. Clicks are not bookings.
- **GA4:** owner needs to add Viewer access for Claude's browser account.

## PR #297 — PNU food guide, Gaya Park pork soup (Claude, 2026-11-06)

- **Fixed:** JA `<title>`/og:title/twitter:title/Article headline 5選→6選 (now match the H1); `search-index.json` JA and zh-TW titles/tags/summaries now say 6 and mention the Gaya Park pork soup; JA and zh-TW meta descriptions mention it too. zh-TW og/twitter/headline were already 6.
- **Checked by reading only:** no remaining "5選/5 選" in the JA/zh-TW pages. Gaya Park is a user recommendation; no hours, prices or visit claims added.
- **Not verified:** build and the 11 audits were not run in this session (Bash approval); rely on the PR's GitHub Actions results. 360px/390px overflow: **not verified**. EN/JA/zh-TW body text not native-reviewed. Not merged, not deployed.

## Open PRs from Claude (not merged)

- **JA/TW Nampo-dong and Gwangalli hubs** (this PR) — completes the four hubs in all three languages; audits pass; 360/390/1280 checked.

## Waiting on the owner

- Claude Code action (#276): GitHub App, `CLAUDE_CODE_OAUTH_TOKEN` (or `ANTHROPIC_API_KEY`), protect `main`.
- Live map (#278): Maps Embed API key restricted to go2busan.com → Render `GOOGLE_MAPS_EMBED_KEY` (owner will do this).
- Native review of JA/TW hub text.

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
| Four neighborhood hubs | In progress | Claude | EN ×4 live; JA/TW Haeundae + Seomyeon live (#281); JA/TW Nampo + Gwangalli in open PR |
| Claude GitHub automation | Blocked | Owner | #276 merged; Install Claude GitHub App, add secret, protect main |
| Busan map MVP (#273) | Done (link fallback) | Owner | #278 live; interactive map needs Maps Embed key in Render |
| Affiliate measurement | Blocked | Owner | Code done (#268/#270); GA4 Viewer access needed to verify live events |

Update this table after each meaningful work session. Include PR numbers, commit SHAs, test results, and blockers where known.
