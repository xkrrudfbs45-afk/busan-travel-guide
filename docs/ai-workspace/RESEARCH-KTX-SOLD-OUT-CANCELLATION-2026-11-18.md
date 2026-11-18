# KTX sold-out and cancellation-seat guidance — 2026-11-18

## Editorial decision
Improve the existing English, Japanese and Taiwan Traditional Chinese KTX booking guides rather than create duplicate URLs. This is a high-friction step in a Busan trip: travelers may have chosen their dates but cannot secure a train seat.

## Verified official guidance
- Korail ticket FAQ: https://www.korail.com/ticket/reserve/guide/faq
  - Foreign-traveller booking window: Korail's official press release dated 2026-10-08 states that from 2026-10-01 the advance booking period for foreign rail users expanded from one month to two months before departure (see https://info.korail.com/info/selectBbsNttView.do?bbsNo=199&key=911&nttNo=27403, section “승차권 예매 2개월 전부터”, lines 342–345 in the published page). The Korail English homepage / FAQ may still display the older one-month wording; treat this as a live-source inconsistency and advise readers to check the date-specific booking form and latest notices. Do not state one month as the current foreign-traveller rule.
  - Waitlist: for sold-out trains, online requests can be made until two days before departure where the option is available; canceled seats are assigned in request order.
  - Sold-out trains: Korail FAQ says standing tickets may be purchased at station ticket counters. Availability and conditions vary.
- Korail mobile usage guide: https://m.letskorail.com/mbt/m_guide.html
  - Waitlist is an explicit status in the booking flow; seat assignment and payment instructions are shown in the reservation record. Some older Korail help pages still show a different midnight payment deadline, so the guide tells users to follow the deadline displayed in their current Korail+ booking record rather than publish an unverified universal cutoff.
- SR transition notice: https://www.srail.or.kr/cms/article/view.do?pageId=TK0502000000&pageIndex=16&postNo=922
  - Since 2026-09-01, former SRT-origin services are booked as KTX through Korail+ / Korail channels. Do not send users to a separate SRT booking flow as an alternative.
- Korea government / Korail integration context: https://info.korail.com/info/selectBbsNttView.do?bbsNo=199&integrDeptCode=&key=911&nttNo=27109&pageIndex=1&searchCnd=CN&searchCtgry=&searchKrwd=
  - Integration and additional seat supply announcements are not a guarantee of availability for an individual date or train.

## Important correction
- Correction after primary-source recheck: the foreign-traveller booking window is two months before departure from 2026-10-01, according to Korail's 2026-10-08 official press release. Some Korail English homepage / FAQ text remains inconsistent and still displays one month. The EN / JA / zh-TW pages now explain both the official two-month foreign-traveller rule and the conflicting legacy display, with a direct link to the dated announcement.
- Taiwan Traditional Chinese and Japanese pages now state the same standard release rule, with a caveat for special holiday schedules.

## What changed
- EN / JA / zh-TW title, meta description and main heading now emphasize sold-out tickets, waitlists and cancellation-seat checks.
- Added actionable sold-out steps: Korail+ waitlist when displayed, widen departure-time search, ask the station counter about standing tickets, enable notifications and verify the final ticket.
- Removed obsolete guidance to search for a separate SRT service as an alternative.
- Explicitly clarified that Korail does not publish a universal nightly cancellation-seat reset hour. Do not promise 02:00 or 03:00 releases. Seats may return when other passengers change or refund bookings.
- Preserved existing canonical URLs, hreflang, article images, image credits, affiliate disclosure and existing travel content.

## Validation / release boundary
- Run static build and Technical SEO workflow on the exact PR head.
- Review mobile layouts at 360 / 390 / tablet / desktop; browser screenshot QA remains required and is not claimed complete.
- Keep Draft until CI and responsive visual review are complete. No merge or production deployment in this task.
