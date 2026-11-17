# Busan taxi and visitor-help content research — 2026-11-17

## Decision
Do not create a second taxi URL. The current site already has EN and zh-TW taxi-vs-subway guides. Expand those pages with verified fares, meter checks and complaint steps; cross-link from all three localized transit-card and first-trip guides.

## Verified facts (checked 2026-11-17)
### Standard medium taxi fare
Busan City and the Busan Taxi Transportation Association publish the fare adjusted on 2023-06-01 as the current standard medium-taxi fare:
- Base fare: KRW 4,800 for the first 2 km.
- Distance: KRW 100 per 132 m.
- Time: KRW 100 per 33 seconds when travelling below 15 km/h.
- Night surcharge: 23:00–04:00; 20% except 00:00–02:00, when it is 30%.
- Out-of-area surcharge: 30%.
- Combined night + out-of-area surcharge: 40% from 23:00–00:00 and 02:00–04:00; 50% from 00:00–02:00.
- Deluxe, large and tourist taxis have separate fare systems. Do not apply the medium-taxi table to them.

Official sources:
- https://www.busan.go.kr/depart/ahtaxi03
- https://www.bstaxi.co.kr/?mid=fee

### What Busan City treats as improper fare collection
Busan City's taxi complaint guidance identifies examples including charging more than the meter fare, an unreasonable detour, starting the meter before the passenger boards, and refusing card payment or a receipt where required.
Official source: https://www.busan.go.kr/depart/trafficreport02

### Tourist complaint help
Korea Tourism Organization's 1330 service provides travel information, multilingual interpretation and a tourist complaint route:
- 1330 in Korea.
- +82-2-1330 from overseas.
- Online complaint portal: https://www.touristcomplaint.or.kr/
- Published procedure includes referral to the relevant department and investigation / resolution.
- 1330 is not an emergency service.
Official source: https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?menuSn=454&vcontsId=140632

### K.Ride caveats
Official K.Ride pages list multilingual app support, estimated fares before booking and overseas-issued payment cards. Its current privacy terms require a mobile phone number for email / social sign-up, but the retrieved policy does not specify whether a Korean number is required or which foreign country codes pass verification. Tell visitors to test their own number before relying on the app. Do not publish the unverified 10% fee claim or claim that all foreign numbers work.
- https://utility.kride.kakaomobility.com/
- https://www.kakaomobility.com/k-ride
- https://utility.kride.kakaomobility.com/webview/terms/11?languageCode=en

## Winter event correction
Replace the unsupported blanket rule that the first and third Saturdays are always 24-minute laser shows. The official November 2026 programme specifically lists:
- Nov 21: “Guardians of the Castle with laser show”
- Nov 28: “Avengers: Doomsday in Gwangalli”
Showtimes are 19:00 and 21:00 on Saturdays in October–February; the show is free. Weather, strong winds, typhoon conditions or communications problems can cause cancellation or delay. Later laser dates must be checked against the monthly programme.
- https://www.busan.go.kr/eng/bsnews01/1763224
- https://www.gwangallimdrone.co.kr/en/overview

## Changes in PR #503
- EN and zh-TW taxi-vs-subway guides: fares, night / out-of-area surcharges, meter checks, evidence checklist and 1330 complaint route.
- EN / JA / zh-TW transit-card guides: concise taxi fare block and internal link.
- EN / JA / zh-TW first-trip guides: 1330 and taxi-evidence block.
- EN / JA / zh-TW winter guides: corrected November show titles and cancellation caveat.
- No new URL, avoiding cannibalization.
- PR #503 merged at 2026-11-17 00:30:21 UTC. Render deploy dep-dbtq0v6k1f9s739dp20g for commit fdfc0ebc7178b0d3a3816fb61d21b7cda3ed3071 reached status live at 00:32:43 UTC.
- PR #503 exact-head Technical SEO audit run #1616 passed: 242 HTML pages, 6,900 local links, 0 broken local links, 0 missing descriptions/canonicals, 0 sitemap omissions, 880 hreflang links, image-credit strict audit 49 in use / 57 registered / 9 warnings / 0 errors. Existing social-image warnings remain.
- Follow-up PR #504 contains only original inline SVG taxi-fare illustrations for EN and zh-TW; it remains Draft and is not merged/deployed. Responsive visual QA is pending.

## Editorial safeguards
- A reported tourist overcharge is an individual case, not evidence that all Busan taxis overcharge.
- Do not treat a high fare alone as proof of misconduct; check vehicle class, route, traffic and valid surcharges.
- Advise travelers to preserve receipts / trip records and prioritize personal safety over confrontation.
- Keep images documentary and licensed; do not use generic taxi stock images or misleading AI images as evidence.


## Follow-up illustration status — 2026-11-17
- Draft PR #504 adds original inline SVG taxi-fare illustrations to the EN and zh-TW taxi-vs-subway pages; no third-party image asset or license dependency.
- Exact-head Technical SEO audit run #1622 passed on commit ac0cfff10a8bfcdfbd2dc88f119d116c517f87ad: 242 HTML pages, 6,900 local links, 0 broken local links, 0 missing descriptions/canonicals, 880 hreflang links, 0 sitemap omissions, 49 images in use / 57 registered / 9 warnings / 0 strict errors.
- PR #504 remains Draft and is not deployed. Responsive browser QA at 360 / 390 / 768 / 1280 and actual screenshots are still pending. Do not claim visual QA passed.
