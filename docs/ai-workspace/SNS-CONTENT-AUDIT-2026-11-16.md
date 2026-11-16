# Go2Busan SNS content audit — 2026-11-16

**Audit time:** 2026-11-16 08:15 KST  
**Repository snapshot:** `main` at `3f033d5f707a5033b760e422a95d033c4f9f89d5`  
**Window:** 2026-11-16 through 2026-11-30 (15 local calendar days)  
**Release boundary:** Audit and draft proposal only. No active schedule, publish-log, approved post, state branch, account, or production deployment was changed.

## Executive summary

| Platform | Active entries in window | Approved | Draft | Missing slots |
|---|---:|---:|---:|---:|
| Instagram | 36 / 45 | 33 | 3 | 9 (Nov 27, 29, 30; all three markets each day) |
| Threads | 90 / 90 | 90 | 0 | 0 |

Instagram has 12 populated dates: Nov 16–26 and Nov 28. Nov 28 has three draft-only Gwangbok-ro event posts. The existing draft file already proposes Nov 27 taxi-app preparation and Nov 29 Millak winter seafood; a separate Nov 30 ferry-arrival carousel is proposed in `content/social/2026-11-16-ferry-arrival-instagram-draft.md`.

Threads has six posts per local day: two per market. It is complete for all 15 days.

## Localization, links, CTA and duplication

### Instagram

- 12 posts per market: EN 12, JA 12, zh-TW 12.
- All 36 convert to 12:00 in their target timezone (America/New_York, Asia/Tokyo, Asia/Taipei); no UTC/local-time mismatches.
- All 36 have a same-language guide URL, a profile URL with `utm_source=instagram` and `utm_medium=social`, and a final-card CTA.
- No language-route mismatch or simplified-Chinese-only character was found in zh-TW copy.
- Active-window captions have no exact same-market duplicates.
- 33 entries are approved/verified; the three Nov 28 event entries remain `draft` / `needs_check`.

### Threads

- 30 posts per market: JP 30, TW 30, US 30.
- Local-time conversion is correct for all 90: Japan and Taiwan 08:00/20:00; US 08:00/18:00 Eastern Time. The November US schedule correctly reflects EST after the daylight-saving transition.
- 61 posts have localized link replies; all 61 have the matching language route and Threads UTM parameters. 29 are intentionally linkless.
- 11 linkless posts use a direct question. 18 linkless posts have neither a question nor a direct reply/save prompt; consider adding a light conversational prompt to future versions, without editing already approved posts.
- No exact or high-similarity same-market duplicates were found in the active 90-post window. There are 21 topic clusters; the largest clusters contain six posts each. No single theme exceeds that level.
- No date-, price-, fare-, event-time- or expiry-dependent claim was found in the 90 active Threads texts. No simplified-Chinese-only characters were found in TW copy; no post exceeds 500 characters.

### Legacy draft overlap — do not merge into active schedules

- `content/social/instagram/nov12-26-drafts.json`: 42 of 45 captions exactly duplicate active Instagram schedule captions.
- `content/social/threads-15day/nov12-26-drafts.json`: 75 of 90 texts exactly duplicate active Threads schedule texts.
- The publisher reads `content/social/instagram/schedule.json` and `content/social/threads-30day/schedule.json`; the legacy draft files are not active inputs. They are not an immediate duplicate-publishing risk, but must not be copied wholesale into the active schedules.

## Publish-log reconciliation

### Instagram state branch

- 15 `published`, 0 `missed`, 0 `failed`.
- All 15 published records have a permalink.
- Latest recorded post per market:
  - JP: https://www.instagram.com/p/Dfv3V8HDVNL/
  - TW: https://www.instagram.com/p/Dfv-fGblpxP/
  - EN: https://www.instagram.com/p/DfxWAM3Ftgk/

### Threads state branch

- 49 `published`, 20 `missed`, 0 `failed`.
- All 49 published records have a permalink; 31 published records have a completed link reply.
- Latest recorded post per market:
  - JP: https://www.threads.com/@go2busan.jp/post/DfwsaVrEZ9G
  - TW: https://www.threads.com/@go2busan.tw/post/Dfw0cVrERay
  - US: https://www.threads.com/@go2busan.us/post/Dfw7oFsm0av
- All 20 missed records have `attempts=0`, no permalink and no API error. Breakdown: JP 6, TW 6, US 8. Eighteen were marked missed on Nov 10 and two on Nov 11. This is an execution/scheduler gap, not a failed API attempt; do not backfill or burst-post them.
- Latest visible Threads publisher run at audit time: [#43770474771](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/43770474771), completed successfully at 2026-11-15 22:39 UTC. Its summary reported `live: true` but `published: []`, `missed: []`, `failed: []`; no account publish was confirmed by that run because no post was due in its window.
- The Nov 16 JP 08:00 post `d13-jp-1` was due at 23:00 UTC on Nov 15 and was not yet present in the publish-log at 08:15 KST. No later 23:07 UTC publisher run was visible at that audit time. It was only 15 minutes late and still inside the 3-hour grace window, so it was **pending, not missed**. Do not resend or change its slot. Recheck the next scheduled run.
- The latest visible run predates current `main` by four commits. The intervening changes were limited to affiliate CTA and public UX/index files; no social schedule or publisher files changed. Current account LIVE variables and account tokens were not read, so no future publication is inferred from the historical run.

## Image and card audit

- The 36 Instagram post folders each contain five JPEG cards, a `qa.json` and a `.hash`.
- All schedule art-set IDs are allowlisted. The new locality-specific art assets are present in `instagram-state/art`: five images each for `ig-fresh15-7-locality-v3`, `8-locality-v3`, `9-locality-v2`, `10-locality-v2`, `15-locality-v3`, and `14-jp-locality-v2`.
- All art is marked as AI illustration in the schedule/copy; do not present it as documentary photography. No uncredited external photo was added to the Instagram card set.
- The source register explicitly says the new locality art for Nov 18 and later still needs a fresh composite-card render and passing QA. The current renderer uses a 36-hour approved-post render horizon and requires matching `spec_hash`, `card_count` and `.hash`; future posts outside that horizon can still have legacy QA metadata. This is expected until they enter the render window, not proof of a current publish failure.
- The old Nov 25 Japanese food-etiquette QA failure is still present in the legacy rendered set. The source copy was shortened, but the new card has not yet received a current render/QA result. It must pass the fresh render gate before publication.
- The three Nov 28 Gwangbok-ro drafts have five rendered cards and passing structural QA, but the previous visual review flagged generic coastal/city imagery that does not clearly depict Gwangbok-ro. Keep them draft-only until the image set is replaced with a street-level performance context and manually reviewed.
- No approved card image was replaced and no image-generation job was forced by this audit.

## Current factual checks and editorial fixes

### Nov 18 Gwangalli

Visit Busan's November programme lists Nov 21 and Nov 28 as the remaining dates in the post's context; Nov 21 includes a laser show. The official English listing gives the themes as “Guardians of the Castle with laser show” and “Avengers: Doomsday in Gwangalli”. The current localized cards retain Korean theme names; consider adding short JA/TW explanations and the official English names for EN. Keep the weather/strong-wind/communications cancellation caveat and recheck before the event.

### Nov 24 electricity / plug card

The current EN and TW cards say “Type C/F”; the JA card says “C type (SE type)”. The current VisitKorea guidance confirms **220V, 60Hz and a two-round-hole outlet**, but does not specify C/F or C/SE. Recommended correction in all three markets: use the official wording “220V, 60Hz; two round holes” and remove the unsupported plug-type labels. Source: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140041 (official VisitKorea page; updated 2026-09-11 in the Japanese version).

### Nov 28 Gwangbok-ro Balcony Music Show

The current official Visit Busan listing confirms Saturday Nov 28, 19:00–21:00, in the Gwangbok-ro area, with the two listed sets at 19:30–20:00 and 20:00–20:30. The three posts correctly remain draft/needs_check and do not claim the separate Dec 5 Street Festa. Recheck Nov 27 and the morning of Nov 28. Source: https://www.visitbusan.net/schedule/view.do?boardId=BBS_0000009&dataSid=6437&menuCd=DOM_000000204012000000

### Nov 27 taxi-app candidate

The current official k.ride page lists English/Japanese/Chinese (Traditional and Simplified) interface support, overseas-issued cards and 133 languages for destination search/chat. The current privacy policy lists a mobile number as required for email and social sign-up. It does not guarantee that every overseas country code will pass verification. Update the draft's “100+ languages” to “133 languages”; change the lead from “No Korean number?” to “Check phone-number verification before relying on k.ride”; never promise that a Korean number is unnecessary. Keep the six-card format because the current Instagram v2 validator permits five or six cards, not seven.
- Official service: https://utility.kride.kakaomobility.com/
- Official privacy policy: https://policy.kakaomobility.com/viewer/?languageCode=ko&pageCode=PRIVACY_POLICY&subPageCode=index&version=107
- The English taxi-vs-subway guide exists, but a matching JA taxi-vs-subway page was not found. The current JA draft CTA points to an airport-to-Seomyeon route guide, which is not a K.Ride onboarding guide. Do not present that link as a K.Ride guide. Expand the existing English guide and localize the relevant sections into JA/TW before using matching localized CTAs.

### Nov 29 Millak winter seafood candidate

VisitKorea confirms fresh raw-fish sales and restaurants on the upper levels, but does not publish stall-level hours, current prices, preparation/table charges, minimum order or solo-dining rules. Keep the current draft's same-day checks, on-site floor-signage caveat and no-old-price rule. Do not reuse 2023 prices or hours.
- Official listing: https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=84951

### Nov 30 ferry-arrival candidate

The EN, JA and zh-TW ferry-arrival guides now exist at the same localized path. Busan Port Authority confirms the route from Busan Station building Exit 10 via moving walkway and pedestrian deck at about 10–15 minutes; Metro Line 1 Busan Station Exit 6 and Choryang Station Exit 6 are about 20 minutes. The 5–7 minute figure applies only to the pedestrian-deck-to-terminal segment, not the whole station walk. A three-language five-card candidate is in the accompanying draft file.
- Official directions: https://www.busanpa.com/index.bpa?menuCd=DOM_000000401008000000
- Existing guides: `/guides/busan-ferry-terminal-arrival/`, `/ja/guides/busan-ferry-terminal-arrival/`, `/zh-tw/guides/busan-ferry-terminal-arrival/`
- The page's Wikimedia Commons photo is credited to Christophe95 under CC BY-SA 4.0. Any social reuse must retain attribution and the license link; do not remove the credit.

## Recommended next actions

1. Keep all active schedules unchanged. Recheck the pending `d13-jp-1` post in the next Threads run; if it ages past the grace window, preserve it as missed and do not resend.
2. Render and QA the new locality art inside the 36-hour window, especially the Nov 25 JA card 5; manually inspect the Nov 18/19/20/21/26 locality images and Nov 28 event art before approval.
3. Prepare the Nov 24 official outlet-wording correction as a draft-only change.
4. Correct the Nov 27 k.ride facts and resolve the JA/TW CTA mismatch before the taxi candidate is considered for approval.
5. Keep the Nov 29 Millak candidate conditional on same-day stall/availability checks.
6. Use the new Nov 30 ferry candidate only after image attribution and mobile-card QA.
7. Keep legacy 15-day JSON draft files out of the active publisher inputs.

## Change boundary

This PR adds only this audit report and one localized draft proposal. It does not edit active schedules, publish-log branches, approved posts, account settings, or production files. No external posts, resends, reservation changes or production deployment were performed.
