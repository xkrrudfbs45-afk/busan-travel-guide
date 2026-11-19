# SNS publisher retry-window coverage — 2026-11-19

## Evidence from state branches

### Instagram
- 23 published, 0 missed, 0 failed, 1 retry_pending.
- `ig-fresh15-1118-us` was due at 2026-11-18 17:00 UTC and attempted at 20:45:49 UTC.
- Instagram returned HTTP 403: `Application request limit reached`.
- The 360-minute late window expired at 23:00 UTC. At 23:16 UTC the entry was still retry_pending, but the next scheduled run at 00:23 UTC was already beyond the window and the publisher's fail-closed logic would mark it missed.

### Threads
- 58 published, 29 missed, 0 failed.
- All 29 missed entries have `attempts=0`, no permalink and no API error. Nine recent misses were recorded on 2026-11-17 and 2026-11-18.
- The workflow comments already document skipped scheduled runs. The exact skipped Actions run for each missed post is not inferable from publish-log alone.

## Proposed runner-only change

No post date, local posting time, content, approval, publish-log, state branch, LIVE variable or account token is changed.

- Instagram: add UTC checks at 06:23, 16:23 and 21:23. Together with the existing targeted runs, each scheduled slot has three opportunities within the six-hour late window, including US daylight-saving examples.
- Threads: add UTC checks at 02:23 and 15:23. Each local slot then has three opportunities within the three-hour late window.
- Strengthen tests so the third publisher opportunity, not merely the second, must fall inside each platform's late window.

This PR changes GitHub Actions check cadence only. It does not dispatch a workflow or publish any post. The change remains a Draft PR and requires review/approval before merge.
