# Spa Land Search Intent and Measurement Review

Date: 2026-11-18
Branch: `seo/spa-land-ticket-intent-20261118`
Base: `77e0ce0f7120b9ca0941f3a24db80bb0d85cd4fd`

## Search Console evidence

Property: `sc-domain:go2busan.com`
Window: 2026-10-20 to 2026-11-16 (Pacific Time; recent days may be incomplete).

The English Spa Land guide recorded 152 impressions, 1 click, 0.66% CTR and average position 18.66 in the 28-day joined opportunity report. A separate three-month query report for this page surfaced:
- `busan spa land ticket`: 1 impression, average position 5.
- `spa land busan opening hours`: 1 impression, average position 12.
- `spa land centum city opening hours`: 1 impression, average position 17.
- `spa land busan`: 5 impressions, average position 67.8.

These are low-volume query signals. The title update is a measured relevance test, not a claim of stable demand or guaranteed ranking improvement.

## Changes in this PR

Only the English Spa Land guide's title, meta description, Open Graph/Twitter text, Article JSON-LD headline/description, H1, introductory deck and source-check date were updated:
- Put the ticket intent before price and hours in the title.
- State ticket prices, opening hours, last admission, four-hour limit and luggage storage in the description.
- Align the H1 and social metadata with the actual guide content.
- Correct the end-of-article source-check date from 3 November to 16 November 2026, matching the hero metadata and official check date.
- No URL, ticket destination, affiliate parameters, ticket prices, hours, photos, analytics scripts or event definitions were changed.

## Source verification

- Shinsegae official Spa Land page confirms 09:00–22:00, last admission 21:00, adult KRW 26,000, student KRW 21,000, four-hour standard stay, KRW 5,000 per extra hour, eligible in-facility spend extension to six hours, and luggage storage fees/rules.
  https://deptmapp.shinsegae.com/store/entertainment/centum-spaland.do
- Visit Busan official Spa Land article provides current visitor context and notes about luggage lockers.
  https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000302008001000&uc_seq=1753

The current English page's facility facts were not changed in this PR; only the stale source-check date was aligned with the already published hero metadata.

## GA4 measurement review

Connected GA4 property: `properties/561839877`, web stream `G-JCYV49BXQZ`, stream created 2026-11-02.
- Measurement health reports one web stream, two key events (`purchase`, `affiliate_click`) and no configuration issues.
- 2026-11-02 to 2026-11-16: 67 sessions / 8 active users across all channels; 46 Direct, 15 ChatGPT AI Assistant, 4 Unassigned, 1 Organic Search and 1 Organic Social.
- Country report returned South Korea only (8 active users); device report: 58 desktop sessions and 9 mobile sessions.
- `affiliate_click` recorded 5 key events by 2 users, all attributed to the homepage in the event/landing-page report. No purchase transactions or purchase revenue were reported.
- The period is too small and likely includes project-owner/testing visits; do not treat it as international visitor demand or conversion baseline. The stream was created on Nov 2, so data before that date should not be interpreted as complete coverage.
- Source/medium report flagged 4 sessions (6.0%) as `(not set)`; this is a small attribution hygiene item to monitor, not evidence of a broken GA4 installation.

No analytics configuration or key-event settings were changed in this PR. Next measurement step is to accumulate a clean post-Nov-2 baseline and verify affiliate clicks from real visitors before drawing market conclusions.

## QA / release

- Run static build and technical SEO workflow on exact PR head before merge consideration.
- No responsive browser QA screenshots were available in this pass; visual checks at 360 / 390 / tablet / desktop remain outstanding.
- Draft PR only. No merge or production deployment.
