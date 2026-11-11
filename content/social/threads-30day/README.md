# Threads 30-day auto-posting (Go2Busan JP / US)

SNS automation only — separate from the website build and Render deploy.

| | Japan | USA |
| --- | --- | --- |
| Account | @go2busan.jp | @go2busan.us |
| Copy | `marketing/threads-30-day-ja-en-calendar.md`, Japanese only | same file, English only |
| Slots | 08:00 / 20:00 Asia/Tokyo | 08:00 / 18:00 America/New_York (DST-aware) |
| Token secret | `THREADS_JP_ACCESS_TOKEN` | `THREADS_US_ACCESS_TOKEN` |

The publisher workflow polls every 15 minutes (`*/15 * * * *`) so local-time slots are not missed when US daylight-saving time changes. The 3-hour late window is only a recovery guard.

Taiwan (@go2busan.tw): copy in `marketing/threads-30-day-zh-tw-calendar.md` (Traditional Chinese), slots 08:00 / 20:00 Asia/Taipei, secret `THREADS_TW_ACCESS_TOKEN`, links only to `/zh-tw/` guides. It has its own launch date:
`node scripts/threads/build-schedule.mjs --add-market TW --start YYYY-MM-DD && node scripts/threads/link-replies.mjs`, then approve with `approve.mjs --market TW`.

## Files
- `schedule.json` — generated, reviewed in a PR. One record per post with UTC publish time, verification and approval. Created only when the launch date is agreed:
  `node scripts/threads/build-schedule.mjs --start YYYY-MM-DD`
- `publish-log.json` — lives on the **`threads-state` branch**, written only by the workflow. Container ID, post ID, permalink, attempts, last error.
- `CHANGELOG.md` — every replacement or cancellation of scheduled copy. Published copy is never edited.
- `reports/` — Day-14 performance note (`node scripts/threads/insights.mjs`).

## Flow
`draft` → (owner) `approved` → published by the workflow → recorded in the log.
- Approve: `node scripts/threads/approve.mjs --by "Tak" --market JP --days 1-30`
- Posts flagged `needs_check` (prices, hours, dates, durations, superlatives, URLs) need `--verified "<what was checked>"`.
- Cancel/replace: `--cancel --ids ... --reason ...` and log it in `CHANGELOG.md`.

## Turning it on
1. Meta app with Threads API; both accounts added as **Threads Testers** and accepted.
2. Scopes: `threads_basic`, `threads_content_publish`, `threads_manage_insights` (replies: `threads_manage_replies`).
3. Long-lived token per account → repo secrets above. Optional `GH_SECRETS_PAT` for weekly auto-rotation.
4. Merge `schedule.json` with approvals.
5. Repository variable `THREADS_LIVE=true`. Until then every run is a dry run.

## Link replies
`link_reply` on a post = the publisher replies to its own new thread with the guide URL (needs `threads_manage_replies`). Mapping: `scripts/threads/link-replies.mjs`. Replies retry up to 3 times, never repost the main post, and are skipped if more than 6h late.

## Safety rules enforced in code
Dry run by default · approved posts only · log + on-account dedupe · ≤1 post per account per run, ≤2 per local day · ≤3 attempts (network/5xx/429 only) reusing the same container · >3h late → `missed` · links fetched before posting · tokens redacted.
