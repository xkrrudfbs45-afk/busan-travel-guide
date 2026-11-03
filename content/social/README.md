# Go2Busan social content (Threads · Instagram, US · Japan)

This folder is the source of truth for planned social posts. **Nothing here posts automatically.** Publishing tools must read from this file and must respect the approval gate below.

## Files
| File | Purpose |
| --- | --- |
| `30-day-calendar.json` | Normalized posts: one record per **day × market × platform** (30 × 2 × 2 = 120). |
| `source/30-day-calendar.source.csv` | The PM's original calendar (one row per day). Kept so copy can be checked for silent edits. |
| `../../scripts/build-social-calendar.mjs` | Rebuilds the JSON from the source CSV (page choices and notes live in this script). CI runs `--check`. |
| `../../scripts/social-content-audit.mjs` | Validator. Runs in CI. `--self-test` proves the gate rejects bad data. |

## Mapping from the original CSV
| CSV column | JSON |
| --- | --- |
| `Day`, `Theme`, `Content pillar`, `Key angle`, `Instagram format`, `Visual brief` | `day`, `theme`, `content_pillar`, `key_angle`, `format`, `visual_brief` |
| `US Threads copy` | `market=US, platform=threads, caption` |
| `Japan Threads copy` | `market=JP, platform=threads, caption` |
| `US Instagram caption` | `market=US, platform=instagram`: trailing hashtags → `hashtags`, rest → `caption` |
| `Japan Instagram caption` | same for `market=JP` |
| `Suggested page / CTA` | `cta_label` (kept as written); the real page is in `target_path` / `target_url` |
| `Status` | first item of `fact_check_notes`; workflow state is `status` |

To regenerate after the PM changes the CSV: `node scripts/build-social-calendar.mjs`, then `node scripts/social-content-audit.mjs`.

Copy is **not edited**. The validator rebuilds every caption (`caption` + space + hashtags) and compares it with the source CSV.

## Links and UTM
- `target_url` must be the canonical URL of a page that exists in this repo and in `sitemap.xml`, and is not `noindex`.
- US posts link to English pages. JP posts link to `/ja/` pages **only**. If no Japanese page exists, `target_url` stays `null`, `needs_page=true`, and `mapping_note` says why. No automatic English fallback.
- UTM (all four required, nothing else):
  `utm_source={threads|instagram}`, `utm_medium=social`, `utm_campaign={30day_us|30day_jp}`, `utm_content=dayNN`
- Where the CTA label did not match a page well, `mapping_note` records the choice (for example, a dedicated dwaeji-gukbap page instead of the generic food guide). PM can change these.

Current gaps (no page or no Japanese page): see `needs_page=true` records. Summary at time of writing:
- OCHORYANG (days 3, 22): no Go2Busan page.
- Japanese versions missing for: local culture hub, travel budget, dialect guide (days 11, 15, 19, 20, 23, 29).
- Content gaps noted in `mapping_note`: Jeonpo cafe streets, Huinnyeoul coast, temples/green Busan, coffee and gardens.

## Status flow and approval gate
`draft → fact_checked → approved → scheduled → published`

| Status | Requires (enforced by the validator) |
| --- | --- |
| `fact_checked` | `fact_check_status = verified` |
| `approved` | the above + `approval.approved_by` and `approval.approved_at` + a valid `target_url` (unless `cta_type = profile_link`); Instagram also needs `image_assets` and `image_rights_confirmed = true` |
| `scheduled` | the above + `scheduled_date` and `scheduled_time_kst` (Asia/Seoul) |
| `published` | the above + `published_url` |

Before `fact_checked`, a person checks: facts and venue details against official sources, link destination, translation, image rights, privacy (no identifiable people without consent), and the CTA.

## OCHORYANG
- Frame it as a historic house with a garden and cultural programmes — not a walk-in cafe.
- Visit method, reservations, hours, fees, current programme and photo rules are **not** in this data until confirmed with an official source. The validator rejects captions with hard-coded times or prices for OCHORYANG.
- Give the history with care (built in the colonial period, later lived in and maintained by Korean residents). Don't use it only as an aesthetic backdrop.
- Use original or licensed photos only. Never present a generated image as OCHORYANG.

## Images
Keep image assets in a separate manifest (planned: `content/social/assets.json`) with: file, source (original / licensed / generated), licence, photographer, and which post uses it. Generated images must be labelled and must not depict a specific real venue as if photographed.

## Future automated posting (proposal — not built)
- Use only the platforms' official APIs, after checking current policy and account permissions. No scraping or browser automation for posting.
- Credentials (tokens, app secrets, webhooks) live in environment variables / a secret manager. **Never commit them.** The validator fails if the file looks like it contains one.
- A poster may only pick records with `status = scheduled` that pass the validator at run time.
- Idempotency: one post per `id`; before posting, check `published_url`/a posting log so retries never double-post.
- Retries: limited (e.g. 3) with backoff; on final failure keep `status = scheduled`, record the error, and alert.
- Record `published_url`, `published_at` (KST) and the API response/error in a log; collect `metrics` later.
- Manual approval is mandatory during the draft phase. Do not enable any auto-posting until the owner approves it.
