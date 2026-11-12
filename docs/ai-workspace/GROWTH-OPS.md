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

## Owner actions to unlock data (not done by Claude)

1. Google Cloud: create a service account, enable "Google Search Console API" and "Google Analytics Data API", create a JSON key.
2. Search Console → Settings → Users: add the service-account email as a restricted user.
3. GA4 → Admin → Property access: add the same email as Viewer. Note the numeric property ID.
4. GitHub → Settings → Secrets and variables → Actions: secret `GSC_SERVICE_ACCOUNT_JSON` (whole JSON), variable `GA4_PROPERTY_ID`.
5. Optional autopilot: secret `CLAUDE_CODE_OAUTH_TOKEN`, variable `GROWTH_AUTOPILOT=true`. Draft PRs created with the workflow token do not trigger other workflows, so the autopilot runs the audits itself and records the results in the PR; re-run CI by closing and reopening the PR.

## Guardrails

- No merge, deploy, DNS/URL change, GA4 measurement/consent change, secret change, social posting or schedule change from this workflow.
- `concurrency` prevents overlapping runs; every section is isolated (one failure is recorded and the rest still run).
- Secrets are passed only as environment variables and never printed.

## 14-day KPI sheet

Baseline is in `BASELINE-TAIWAN-2026-11-12.md` (GSC 7 days to 11-09: 2 clicks / 353 impressions / CTR 0.6% / position 17.7). Daily rows are appended by the scan log; the day-14 comparison uses the same windows.
