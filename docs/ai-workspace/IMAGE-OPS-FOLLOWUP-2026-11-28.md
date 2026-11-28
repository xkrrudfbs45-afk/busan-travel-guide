# Go2Busan image-operations follow-up — 2026-11-28

- Baseline main SHA: `e0213c4bd0092b14c21a3975d8e56907141e7092`
- Scope: static crawl sample and unresolved social-image findings already recorded in the 2026-11-25 image audit.
- This follow-up is documentation only. It does not replace or edit image assets, schedule entries, publish logs, public pages, tokens, or secrets.

## 1. Website image checks — limited sample

OpenSEO audit `7211c007-72c5-4cc6-b0a0-efb7fdc91475`:
- 50 pages crawled; the crawl stopped at its 50-page limit (229 sitemap URLs were not crawled).
- Missing-alt pages in the sample: 0.
- Blocked pages in the sample: 0.
- This crawler result does not independently download every image, test image URL/MIME responses, inspect rendered mobile crops, or establish LCP priority.
- Lighthouse sample: 20 attempts failed with `INSUFFICIENT_CREDITS`; no LCP/CLS results are available.

Existing 2026-11-25 image-credit audit snapshot:
- 99 images in use / 107 registered.
- 8 unused registry entries are warnings, not confirmed defects.
- Strict image-credit errors: 0.
- 118 image-reuse notices are review signals, not confirmed defects.

## 2. P1 — Taejongdae image implication in published posts (2026-11-26)

Affected published sets:
- EN: https://www.instagram.com/p/DgNl7rvlWsf/
- JA: https://www.instagram.com/p/DgMKFNHkZBt/
- zh-TW: https://www.instagram.com/p/DgMsvcbFQsB/

The 2026-11-25 visual audit recorded a train-like vehicle and unrelated scenery in the Taejongdae sets. The posts were subsequently published. The current Danubi train operation status has not been reverified from a dated operator notice in this follow-up; the prior notice and recent public reports indicate suspension, and no current shuttle timetable is asserted here.

**Proposed correction:** use a caption/comment clarification that transport service can change and that the Danubi train should not be assumed to operate; remove any current-service implication from future artwork. Do not repost or edit the live post without owner approval.

## 3. P2 — Food-etiquette backgrounds and card copy (2026-11-25)

Affected published sets:
- EN: https://www.instagram.com/p/DgLDdPPldTh/
- JA: https://www.instagram.com/p/DgJpx_UlD1j/
- zh-TW: https://www.instagram.com/p/DgJp1AulMMT/

The 2026-11-25 visual audit recorded repeated coastal/high-rise backgrounds that do not explain restaurant or market etiquette, plus a horizontal-overflow QA finding for Japanese card 5. The Taiwan phrase `請做小辣一點` can be made more precise for “less spicy” as `請做得不要太辣`.

**Proposed correction:** caption/comment clarification only for already-published sets; future artwork should show dining tables, condiments, market counters, price checks, and solo-dining context rather than unrelated coastal scenery. Do not repost without owner approval.

## 4. Gwangbok-ro draft set — 2026-11-28

The current schedule uses Nampo-dong / downtown balcony-stage prompts and records passing QA hashes and card counts for all three languages. Actual pixel content and mobile crop were not independently inspected in this follow-up.

**Release gate:** keep the three language sets Draft until a human visual check confirms Gwangbok-ro locality, text-safe 4:5 crops, and no misleading event imagery.

## 5. Verification limits and safe boundary

- No direct HTTP/MIME check of every image URL.
- No 360/390/1280 rendered crop check.
- No Lighthouse LCP/CLS data due insufficient credits.
- No image replacement, schedule change, publish-log change, external post, merge, deployment, or token/secret change was made.
- This report proposes corrective copy/art direction only; published post corrections require owner approval.
