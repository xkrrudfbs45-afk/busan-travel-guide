# Visit Busan Pass and Haeundae Beach Train — research note

**Checked:** 2026-11-17 (KST)  
**Scope:** Existing EN / JA / zh-TW Haeundae Blueline Park sold-out guide. No new public URL.

## Why update the existing guide

A Dcard October 2026 Busan trip report (40K+ views when checked in the source review) describes a traveller reaching the Haeundae Beach Train with a Visit Busan Pass but finding it sold out and being confused by the ticket / queue process. This is one traveller's account, not proof that Pass holders generally cannot board or that the operator's policy is faulty.

Community source:
- Dcard trip report: https://www.dcard.tw/f/korea_travel/p/262264413

## Official facts verified

1. **Visit Busan Pass benefit**
   - Official attraction detail page lists Haeundae Beach Train as a free attraction.
   - It says only the Beach Train **Pass for all stops** ticket is provided.
   - It explicitly says Sky Capsule is **not included**.
   - The exchange ticket specifies a designated time and first boarding location; passengers must board at the assigned first boarding point.
   - Source: https://visitbusanpass.com/attractions/_detail?id=GO0000000042

2. **Beach Train boarding**
   - Operator information says boarding closes 10 minutes before the scheduled departure.
   - The Beach Train does not have assigned seats; re-boarding may involve waiting, particularly when busy.
   - Source: https://www.bluelinepark.com/eng/information.do
   - Official operator video description says Pass users exchange for a physical ticket at the ticket office and that there are no reserved seats: https://www.youtube.com/watch?v=DEXy-EA1AIU

3. **Sky Capsule / general ticket release**
   - Official booking page says tickets for the week four weeks ahead (Monday–Sunday) open every Tuesday at 07:00 KST.
   - A small quantity of same-day tickets may be sold at the ticket office first-come, first-served, and can sell out early.
   - Sky Capsule is a separate paid product, not a Pass benefit.
   - Source: https://www.bluelinepark.com/eng/booking.do

4. **Editorial distinction**
   - Do not say a Pass guarantees a seat, a preferred time, immediate boarding or a Sky Capsule reservation.
   - Do not claim every Pass holder will encounter sell-outs based on one Dcard report.
   - Keep the Beach Train and Sky Capsule distinct in copy, images, ticket language and route planning.
   - The Pass all-stops benefit does not mean unlimited repeat boarding at the same station; the operator's ticket rules should be checked for the specific ticket.

5. **First boarding after 18:00 KST**
   - The official Pass attraction page says the all-stops ticket cannot be used when the first Beach Train boarding is after 18:00 because the remaining operating time is too short; staff issue a ticket usable within the remaining hours instead.
   - This is especially relevant in winter, when the official Pass listing shows departures from Mipo and Songjeong until 19:00. Do not imply that a late-arriving Pass holder receives the full all-stops ticket.
   - Source: https://visitbusanpass.com/attractions/_detail?id=GO0000000042 (checked 2026-11-17).

## Changes on this branch

- EN / JA / zh-TW canonical sold-out guide: add a localized, clearly labelled section distinguishing the Visit Busan Pass Beach Train benefit from the separately paid Sky Capsule.
- EN and zh-TW Visit Busan Pass comparison guides: add the distinction to the core pass explanation, including an inline licensed photo that identifies the Sky Capsule as a separate paid ride.
- Explain ticket exchange, designated first boarding station/time and the 10-minute boarding cutoff.
- Strengthen the existing EN and zh-TW Visit Busan Pass comparison guides with the same official Beach Train / Sky Capsule distinction; add a rights-cleared, subject-matched Sky Capsule photo to the EN page and clarify the existing zh-TW photo caption.
- Update localized metadata descriptions and EN / JA / zh-TW internal-search summaries/tags to reflect the high-intent Pass-vs-ride question.
- No new guide URL, no new image assets, and no changes to canonical/hreflang or sitemap.
- Existing Sky Capsule imagery remains subject-matched; no generic stock or AI-generated scene was added.

## Sources

- Visit Busan Pass — Haeundae Beach Train: https://visitbusanpass.com/attractions/_detail?id=GO0000000042
- Visit Busan Pass attraction directory: https://visitbusanpass.com/attractions/
- Haeundae Blueline Park — official booking: https://www.bluelinepark.com/eng/booking.do
- Haeundae Blueline Park — official boarding information: https://www.bluelinepark.com/eng/information.do
- Haeundae Blueline Park — official FAQ: https://www.bluelinepark.com/eng/faqList.do?pageNo=2
- Official operator video on using the Pass for Beach Train: https://www.youtube.com/watch?v=DEXy-EA1AIU

## QA status

- Source facts checked 2026-11-17.
- Localized page edits and search-index update committed to this branch.
- Exact-head build / Technical SEO audit, internal-link validation and responsive browser QA at 360 / 390 / 768 / 1280 remain pending.
- Draft PR only; do not merge or deploy without owner approval.

6. **All-stops ticket is not unlimited repeat boarding**
   - The current Blue Line Park fare page says the all-stops ticket is a same-day pass and that boarding at the same station twice is not allowed.
   - The current Visit Busan Pass listing describes the benefit as getting off and re-boarding at each of the seven stations once. The English operator guidebook also says the all-stops pass is available only once at each station.
   - Explain this as one boarding per station, not unlimited repeat boarding from the same station. Sources: https://www.bluelinepark.com/eng/fare.do and https://visitbusanpass.com/attractions/_detail?id=GO0000000042 (checked 2026-11-17).
