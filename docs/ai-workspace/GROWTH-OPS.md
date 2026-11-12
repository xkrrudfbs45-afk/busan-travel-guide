# Growth ops: 4-hourly scan and 14-day sprint (from 2026-11-12)

Owner brief: grow overseas search traffic (Taiwan first, then US, Japan) and make affiliate conversion measurable within 14 days. This file explains the automation, what it can and cannot see, and what only the owner can switch on.

## What runs

`.github/workflows/growth-ops.yml`, cron `0 */4 * * *` = KST 09, 13, 17, 21, 01, 05. It only runs on a schedule after it is merged to `main`; pull requests that touch it run the scan as a self-test.

| Step | What it does | Needs |
|---|---|---|
| Build + audits | `scripts/build-static.sh` and every CI audit; failures become P0 priorities | nothing |
| Technical SEO scan | `scripts/growth/scan.mjs`: titles, descriptions, canonical, OG/Twitter, H1, Breadcrumb schema, JSON-LD validity, hreflang targets and reciprocity, broken internal links, sitemap ↔ pages | nothing |
| Affiliate inventory | partner-link coverage per language, Klook format (`aid=141680`, 7-digit `aff_adid`), `rel=sponsored` | nothing |
| Coverage gaps | EN guides without JA/zh-TW versions; topics in `scripts/growth/topics.json` with no matching page per language | nothing |
| Social | Threads/Instagram publish logs from the `threads-state` / `instagram-state` branches and the schedules. **No Meta API calls** (no extra load on the accounts) | nothing |
| Live site | deployed `version.txt` vs `main`, robots, http→https and www→apex redirects, 404 behaviour, every sitemap URL returns 200, Klook destinations reachable | nothing |
| Search Console | country totals (latest 7 complete days vs previous 7), pages with impressions but CTR < 2% | **owner**: secret `GSC_SERVICE_ACCOUNT_JSON`, optional variable `GSC_PROPERTY` (default `sc-domain:go2busan.com`) |
| GA4 | sessions/users/new users by country, `affiliate_click` / `affiliate_cta_view` by country | **owner**: same secret + variable `GA4_PROPERTY_ID` |
| GitHub queue | open/stale PRs, open autopilot PRs | built-in token |
| Log | report posted as a comment on the open issue titled "Growth ops log…" (or labelled `growth-log`) | built-in token |
| Autopilot (optional) | Claude picks one priority and opens a **draft** PR labelled `growth-autopilot`; max 2 open at a time | **owner**: variable `GROWTH_AUTOPILOT=true` + secret `CLAUDE_CODE_OAUTH_TOKEN` |

Data that is not accessible is reported as "no access" and never estimated. Clicks are not bookings: bookings and commission are only in the Klook/Agoda partner dashboards.

## Inventory (checked 2026-11-12; secret names only, never values)

| Workflow | Schedule (UTC) | Secrets / variables used | Overlap with growth-ops |
|---|---|---|---|
| growth-ops.yml (this) | `0 */4 * * *` | GSC_SERVICE_ACCOUNT_JSON*, CLAUDE_CODE_OAUTH_TOKEN, vars GSC_PROPERTY*, GA4_PROPERTY_ID*, GROWTH_AUTOPILOT* | — |
| instagram-publisher.yml | `0 0,12 * * *` | INSTAGRAM_{JP,TW,US}_ACCESS_TOKEN, OPENAI_API_KEY, var INSTAGRAM_LIVE | same minute at 00/12 UTC, but growth-ops is read-only and makes no Meta calls |
| threads-publisher.yml | `7 0,11,12,13,22,23 * * *` | THREADS_{JP,TW,US}_ACCESS_TOKEN, var THREADS_LIVE | none (reads its log branch only) |
| threads-token-refresh.yml | `17 3 * * 1` | GH_SECRETS_PAT*, THREADS_* | GH_SECRETS_PAT is not set → by design the job only checks the Threads tokens and does not rotate them (last 2 manual runs succeeded); tokens still need manual renewal before they expire |
| seo-audit.yml | `0 0 * * 1` + PRs | none | growth-ops reruns the same audits |
| lighthouse-weekly.yml | `30 0 * * 1` | none | none |
| claude.yml | on `@claude` from the owner | CLAUDE_CODE_OAUTH_TOKEN (set) | autopilot reuses this token |
| deploy.yml | on push to main | RENDER_DEPLOY_HOOK_URL | none (growth-ops never deploys) |

`*` = not set in the repository on 2026-11-12. Repository secrets present: CLAUDE_CODE_OAUTH_TOKEN, INSTAGRAM_{JP,TW,US}_ACCESS_TOKEN, OPENAI_API_KEY, RENDER_DEPLOY_HOOK_URL, THREADS_{JP,TW,US}_ACCESS_TOKEN.

Cost/rate notes: the scan makes ~200 plain HTTP requests to go2busan.com per run (sitemap URLs) and up to 30 to klook.com (mostly 403 from CI). Autopilot uses the owner's Claude subscription via CLAUDE_CODE_OAUTH_TOKEN; at most 6 runs/day and it stops while 2 autopilot PRs are open.

## Testing status

- `pull_request` self-test run on PR #373: scan job success, live checks included (sitemap 175/175 = 200, redirects 301, unknown URL 404). Schedule and `workflow_dispatch` only become available after the workflow is on `main` (GitHub limitation).
- Autopilot: not yet run (needs `GROWTH_AUTOPILOT=true`).

## Owner actions to unlock data (not done by Claude)

1. Google Cloud: create a service account, enable "Google Search Console API" and "Google Analytics Data API", create a JSON key.
2. Search Console → Settings → Users: add the service-account email as a restricted user.
3. GA4 → Admin → Property access: add the same email as Viewer. Note the numeric property ID.
4. GitHub → Settings → Secrets and variables → Actions: secret `GSC_SERVICE_ACCOUNT_JSON` (whole JSON), variable `GA4_PROPERTY_ID`.
5. Optional autopilot: secret `CLAUDE_CODE_OAUTH_TOKEN` is already set; add repository variable `GROWTH_AUTOPILOT=true`. Draft PRs created with the workflow token do not trigger other workflows, so the autopilot runs the audits itself and records the results in the PR; re-run CI by closing and reopening the PR.

## Guardrails

- No merge, deploy, DNS/URL change, GA4 measurement/consent change, secret change, social posting or schedule change from this workflow.
- `concurrency` prevents overlapping runs; every section is isolated (one failure is recorded and the rest still run).
- Secrets are passed only as environment variables and never printed.

## 14-day KPI sheet

Baseline is in `BASELINE-TAIWAN-2026-11-12.md` (GSC 7 days to 11-09: 2 clicks / 353 impressions / CTR 0.6% / position 17.7). Daily rows are appended by the scan log; the day-14 comparison uses the same windows.
