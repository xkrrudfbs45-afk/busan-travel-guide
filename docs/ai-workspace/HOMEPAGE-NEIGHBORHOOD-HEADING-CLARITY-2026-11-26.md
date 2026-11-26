# Homepage neighborhood-section clarity — 2026-11-26

## Scope
A small editorial UX correction on the homepage only. The neighborhood-card section had the same H2 ("Find your kind of Busan") as the earlier experiential-route section. Replace the second occurrence with "Explore Busan by neighborhood" and make its introductory sentence align with its three cards. No URLs, image files, metadata, hreflang, structured data, booking links, analytics, schedules or deployment settings changed.

## Evidence
- Source-level inspection of `index.html` shows the first H2 is for three curated routes (Yeongdo coast, night views, BTS route), while the later H2 is for three neighborhood experiences (Haeundae food, Dongnae hot springs, Yeongdo coffee). The repeated headline obscures the difference between these sections.
- The public Render homepage text was readable in this pass, but no real browser/pixel review at 360/390/1280 px was performed.
- Taiwan: targeted Dcard/PTT searches did not surface a current, independently corroborated query specifically about homepage neighborhood-card wording. Recent winter-travel preparation signals exist but are already covered by winter pages.
- Japan: targeted 4travel/Yahoo!知恵袋 searches did not surface a current, directly matching homepage-UX question in this pass.
- English: Reddit discussions about Busan food and early airport trips are qualitative, small-sample signals; existing food/transport guides already address them.
- Korea: public community searches did not yield a stronger independently verifiable homepage-specific signal. Access-restricted Naver content was not bypassed.

## Change
- Second neighborhood-card H2: `Find your kind of Busan` → `Explore Busan by neighborhood`.
- Intro: `Three local routes for a slower coast, a memorable night or a K-pop-inspired day.` → `Explore three routes for a slower coast, a memorable night or a K-pop-inspired day.`

## SEO / user-value hypothesis
Unique section wording improves heading hierarchy and scanability, helps readers distinguish route inspiration from neighborhood discovery, and reduces repeated headings. This is a low-risk clarity hypothesis, not a claimed ranking gain.

## Sources and benchmark
- Go2Busan homepage source on main: `index.html`.
- Competitor format reference: Busan.net's winter guide uses compact, distinct event headings, area references and FAQ; no text or imagery copied: https://busan.net/en/guide/busan-winter-lights/
- Community research used only as qualitative context; no community signal is generalized to market-wide demand.

## QA / limitations
- Source transformation verified against a unique exact-match fragment; only the second section title and its intro were changed.
- GitHub CI is pending on this Draft PR.
- Browser visual QA at 360/390/1280, live custom-domain verification and actual image/crop inspection were not performed.
- No merge, production deploy, analytics, affiliate, SNS or schedule changes.
