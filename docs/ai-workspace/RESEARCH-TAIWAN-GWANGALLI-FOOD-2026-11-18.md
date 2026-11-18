# Taiwan Search Intent Update — Gwangalli Food & Local Market

Date: 2026-11-18
Branch: `content/zh-tw-gwangalli-food-intent-20261118`
Base: `0ef0ed7523700a0c80bcfe65b204688bddb3a1cf`

## Search Console evidence

Google Search Console property: `sc-domain:go2busan.com`.
Window: 2026-10-19 to 2026-11-15 (Pacific Time; recent days may be incomplete).
Country filter: Taiwan (TWN).

Taiwan-only data remains a very small sample: 38 query/page rows and 17 page rows. The Gwangalli Traditional Chinese page had 7 impressions, 0 clicks, average position 37.3. The query `釜山廣安里美食` appeared once at average position 7; `廣安` appeared once at position 7; `釜山 廣安` appeared once at position 20. These are directional signals, not evidence of stable rankings or broad demand.

Other signals in the same window:
- zh-TW BTS guide: 5 impressions, average position 9.4; query `釜山bts景點` appeared 5 times at average position 9.4.
- zh-TW homepage: 7 impressions, average position 13.6; `韓國 釜山` and `韓國釜山` appeared as low-volume queries.
- zh-TW Spa Land guide: 8 impressions, average position 70.3 overall; individual queries were sparse and volatile.

GA4 organic landing-page report for 2026-10-18 to 2026-11-14 returned only one landing-page row across the whole property (English Spa Land page, one session). GSC/GA4 join coverage was therefore too limited to infer Taiwan conversion behavior. Do not use these figures as a business-performance baseline.

## Change in this PR

Updated only the existing zh-TW Gwangalli neighborhood guide:
- Refined title, meta description, Open Graph, Twitter and Article JSON-LD wording to include Gwangalli food and the Millak seafood market intent.
- Added a concise section distinguishing Millak Raw Fish Town (`민락회타운`) from Millak Fishermen's Live Fish Market (`민락어민활어직판장`), with practical price/fee checks and official Chinese-language source links.
- Updated the half-day dinner step to connect the food choice with the local walking route.
- No new URL, affiliate CTA, booking link, image, analytics event, or social post was added.

## Source checks

- Visit Busan (Traditional/Simplified Chinese page): Millak Raw Fish Town, address at 1 Millaksubyeon-ro, listed daily hours 09:00–02:00 with shop-level variation; 1F live-fish market and upper-floor sashimi restaurants.
  https://www.visitbusan.net/index.do?lang_cd=cnb&menuCd=DOM_000000601003001000&uc_seq=293
- Korea Tourism Organization (Traditional Chinese): Millak Fishermen's Live Fish Market, address at 60 Gwanganhaebyeon-ro 312beon-gil; market description.
  https://big5chinese.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=78020

The two markets are distinct places and are described separately. Shop-level prices, hours and extra charges can vary; the guide avoids quoting unverified menu prices.

## QA / release status

- Static build and SEO audit must pass on the exact PR head before merge consideration.
- Responsive browser QA at 360 / 390 / tablet / desktop remains outstanding; no screenshot/browser driver was available in this pass.
- This is a Draft PR. No merge, production deployment, analytics configuration, affiliate destination or SNS schedule was changed.
