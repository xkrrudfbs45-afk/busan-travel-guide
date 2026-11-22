# Homepage partner-link disclosure clarification — 2026-11-22

## Scope
- Existing English homepage only: `index.html`.
- Base main SHA: `2fda035673815077525d366c136e1174097f8427`.
- No new URL and no changes to partner destinations, tracking IDs, `rel` attributes, analytics, consent or conversion events.

## Finding
The English homepage's lower partner CTA block links to:
- Klook affiliate redirect with existing `aid=141680` and `aff_adid=1546323`.
- Agoda partner search with existing `cid=1979955` and Busan city parameter `city=17172`.

Both links already carry partner identifiers and use `rel="sponsored nofollow noopener noreferrer"`. The adjacent note said the links were direct partner-site links and attribution should not be assumed until tracking links were configured. That wording was ambiguous beside URLs that already contain partner IDs.

## Copy change
Before:
> These are direct partner-site links. Affiliate commission attribution depends on using the publisher’s approved tracking links; do not assume a booking is attributed until those links are configured.

After:
> The links in this section include partner IDs. A click is not a booking or proof of commission; actual attribution and earnings depend on partner reporting and current programme terms.

The revised copy describes the visible URL structure without claiming that a booking occurred, that a commission was earned, or that partner attribution is active. Partner reporting remains the source of truth.

## Why this helps
- Removes the apparent contradiction between the tracking parameters in the links and the old disclosure.
- Makes the funnel distinction explicit: link click ≠ booking ≠ commission.
- Preserves the existing CTA and avoids changing affiliate IDs or partner configuration.

## QA and remaining limits
- Source-level check: exact old sentence found once and replaced once.
- Confirm the three-language homepage structure before any follow-up; the old sentence appeared only in the English homepage. Japanese and Traditional Chinese pages retain their existing localized disclosure.
- Run the exact-head Technical SEO audit and public build.
- Real browser QA at 360 / 390 / 1280 has not been performed in this content-only change and must not be reported as complete.
- No partner dashboard or booking-conversion report was accessed; actual revenue attribution is unverified.

## Release boundary
Draft PR only. No merge, main push or production deployment.