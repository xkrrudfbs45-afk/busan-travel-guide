# Instagram locality and Japanese card overflow remediation — 2026-11-15

## Scope
Follow-up to image-operations review #450 and SNS content audit 2026-11-15. Correct semantic image mismatches in the approved 11/18, 11/19, 11/20, 11/21 and 11/26 carousels, and force a fresh render for the shortened 11/25 Japanese card 5.

## Findings
- 11/18 Gwangalli: card 4 must show distinct drone points above Gwangalli Beach and Gwangan Bridge, not an abstract ribbon.
- 11/19 Haeundae: cards 3–5 must show Haeundae Beach, LCT, Dongbaekseom and elevated Sky Capsule rail, not Songdo/Gamcheon-like scenery.
- 11/20 Nampo: use Jagalchi Market, BIFF Square street food, Gwangbok-ro and Yongdusan/Busan Tower; exclude Gwangan Bridge, Marine City and unrelated harbour scenes.
- 11/21 Seomyeon: use dense inland commercial streets and Line 1/2 transfer context; exclude beaches and coastal skyline.
- 11/26 Taejongdae: use cliffs, pine forest, lighthouse and open-sided Danubi sightseeing shuttle; exclude Marine City skyline, generic locomotives and city buses.
- 11/25 Japanese food-etiquette card 5: shorten the Japanese gloss to reduce horizontal overflow.

## Changes
- Assigned fresh art-set IDs to all five affected dates so the image workflow cannot silently reuse the mismatched backgrounds.
- Shared identical place-specific prompts across EN/JA/zh-TW for each date.
- Added explicit negative constraints for visually confusable places and objects, and removed cherry-blossom cues from November scene prompts.
- Kept the existing five-card copy, localized guide URLs, captions, schedule times and account statuses unchanged, except the Japanese card-5 gloss: `덜 맵게 해 주세요（辛さ控えめで）`.
- Added the new art-set IDs to the generation allowlist and documented the visual constraints in the source register.

## QA and safety
- Existing `instagram-state` assets are not modified by this source PR.
- The stored `cards/ig-fresh15-1125-jp/qa.json` currently reports `ok:false` for card 5 horizontal overflow. The shortened copy requires a fresh render and a new QA artifact with `ok:true`.
- All six new art sets must be rendered after source approval/merge. Review all five cards per market for place match, crop, legibility and AI-illustration attribution.
- No post, publish log, external account, token, secret, LIVE setting or production deployment is changed.
- No merge or deployment is performed by this PR.

## Verification still required
- Run the Instagram art-generation and card-QA workflow after approval/merge.
- Require fresh `qa.json` with `ok:true` for all 15 locale posts across the five dates, plus the 11/25 Japanese card.
- Manually inspect all cards at 1080×1350 and in mobile preview before any publishing action.
