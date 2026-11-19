# Gamcheon visiting-rules image improvement — 2026-11-20

## Decision and scope

- Baseline main SHA: `13c1182cb60065673a9ea1bd6ccd4f7fab2888b6`
- Render static site latest live deploy at audit time: `dep-dbvdrgh5efls73dhqnug`, commit `13c1182cb60065673a9ea1bd6ccd4f7fab2888b6` (auto-deploy is disabled).
- Target pages: EN, JA and zh-TW `/guides/gamcheon-culture-village-visiting-rules/`.
- Existing state: all three pages used the generic `busan-things-to-do-illustration-og.png` as OG/Twitter art with generic alt text. The article itself had no subject-matched photograph.
- Change: use the already-registered Gamcheon photograph for the article image, OG and Twitter previews; add localized alt text, explicit 1600×1200 OG dimensions/type, responsive 480/800/1200/1600 srcset, and visible attribution.
- No new asset file was copied. The original image is not cropped; Wikimedia's width variants preserve the 4:3 ratio.
- No page copy, URL, canonical, hreflang, structured data, affiliate link, analytics setting, SNS schedule, or production deployment was changed.

## Image provenance and rights — rechecked 2026-11-20

- File: [Gamcheon Culture Village in Busan, South Korea.jpg](https://commons.wikimedia.org/wiki/File:Gamcheon_Culture_Village_in_Busan,_South_Korea.jpg)
- Author: [VN.NguyenDucDuy](https://commons.wikimedia.org/wiki/User:VN.NguyenDucDuy)
- Commons file page identifies it as own work, photographed 29 April 2026, at 35.097247, 129.010069; original 5,712 × 4,284 px.
- License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); commercial use is permitted with attribution, link to the license, and share-alike terms if the image is adapted.
- The article caption names the photographer, links the Commons file page and license, and says the photo is not the official restricted-zone map.
- Registry entry remains `verified`; `checked_on` refreshed to 2026-11-20.
- No new crop or derivative asset was created.

## Community signals reviewed

### Taiwan

- [Dcard: 2026 Busan four days / three nights](https://www.dcard.tw/f/korea_travel/p/262264413), trip in early October 2026; 40K+ views at capture. The poster says Gamcheon at 09:00 felt less crowded but the slopes were tiring; Songdo cable-car queues were substantial later in the trip. This is one detailed trip report, not a market-wide demand measure.
- [PTT: first Busan trip for 7 adults, 3 middle-school students and 1 elementary-school child](https://www.ptt.cc/bbs/Korea_Travel/M.1769864293.A.ABB.html), 2026-01-31. The question focuses on hotel base, group meals and whether private transport is needed; direct page access is restricted, so only the visible search excerpt was used.

### Japan

- [Yahoo!知恵袋: parent-and-child 2-night / 3-day Busan trip](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13325650958), 2026-02-23. The question asks how to sequence Haeundae, Lotte World, X the Sky and Blue Line Park around a short stay and Visit Busan Pass.
- [4travel: solo Gyeongju–Busan trip](https://4travel.jp/travelogue/12074223), 2026-05-31 to 2026-06-01. The itinerary uses Seomyeon / Jeonpo and public transport, illustrating a distinct short-stay and neighborhood-walk context.

### English-language communities

- [Reddit: Winter itinerary help](https://www.reddit.com/r/koreatravel/comments/1xtbrwu/winter_itinerary_help/), 2026-11-11. A family with two children staying in Haeundae asks how to combine east- and west-Busan attractions. A Korean reply recommends splitting east/west days and gives a Jagalchi/Chungmu Market → Gamcheon village-bus route. This aligns with the site's existing area-grouping and local-bus guidance; no duplicate content was added.

### Korean public sources and limitations

- [Metro Seoul report on Saha-gu's Gamcheon special-management designation](https://www.metroseoul.co.kr/article/20260731500039), 2026-07-31, reports the residential-area visitor window, vehicle controls and group-map rule. The existing EN/JA/zh-TW rules guide already explains the official measures and effective dates.
- Public searches of Naver, DC Inside, TheQoo, Clien and Ppomppu did not surface a recent independent discussion that justified a separate new guide or factual edit in this pass. No claim of broad local consensus is made.
- The Reddit local reply is a single community response; it was used as a question/context signal, not as the authority for opening hours or bus service.

## Official verification and existing coverage

- [Gamcheon Culture Village official directions](https://www.gamcheon.or.kr/gamcheon/page/user/intro4) list city bus 61 and village buses Seo-gu 2 / 2-2 and Saha-gu 1 / 1-1, plus transfers from Toseong Station Exit 6 and Jagalchi Station Exit 1 (Chungmu Market).
- [Visit Busan official tourist-information-centre listing](https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000203016001000&pagingParms=0349cff07b1d4638b89fb886d0f28964126cff84afbcaaf37f6bc36a5229f271ebfcd26f115458833712382a961f155f11ab13eea1238397a599258f1a048ea480c69672b088e4d4db9d62032c784eb78bc4c72bfb7bb13e08d2b922ae542099814b81ec217838371fa5516f2f26d1a77ad8446030f84720185a19fb24a3100788f51790acba9c50c71628ea6b389a4c37bcf5c6dd6bca48ecb1266ea32d9a382e82509a37423410e4234db7f1cb75465b48200af29cf471) lists 09:00–17:00 in November–February for the information-centre service and luggage storage. The residents association's directions page currently displays 09:00–18:00 year-round for the centre; the existing visitor guide correctly attributes seasonal hours to Visit Busan and distinguishes the centre from the village's residential lanes.
- Existing `gamcheon-culture-village-guide` already covers bus routes, winter information-centre hours, hills and residential etiquette.
- Existing `gamcheon-culture-village-visiting-rules` already covers the 2027 residential-zone rules, vehicle restrictions and 10+ group map requirement. No duplicate content or new URL was created.

## Benchmark notes

- The live homepage currently surfaces winter events, neighborhood grouping, map actions and affiliate CTAs in a clear hierarchy.
- Competing winter-light guides emphasize date/ticket quick answers. Go2Busan's opportunity remains practical local route detail and trustworthy, correctly matched photography rather than adding another generic event roundup.

## Validation and remaining limits

- Source-level assertions: all three locales now reference the same subject-matched image, include localized OG and Twitter alt text, include the visible CC BY-SA attribution, and retain their existing canonical/hreflang/Article JSON-LD blocks.
- The registry still marks the image `verified`; its recheck date is 2026-11-20.
- Responsive srcset is present for 480 / 800 / 1200 / 1600 widths. The source is 4:3 and no CSS crop was introduced.
- GitHub Actions Technical SEO audit passed on the code-bearing PR head `9c4b16d02e9603c80ccf1d9ac7e48a40790c3c99` (run [#44568905878](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44568905878)); build and dependency-free audits passed, including strict image-credit, responsive-image, sitemap/hreflang and outbound-link/image checks. A later documentation-only commit records that result; no second run was observed for that docs-only update.
- No real-browser review at 360 / 390 / 1280 px was completed. No LCP, image-byte or CLS measurement was completed. Do not report visual or Core Web Vitals validation as complete.
- The custom `go2busan.com` domain and `/version.txt` were not accessible through the public browser check in this run. Render metadata confirms the live deployment SHA above; the Render onrender homepage was readable. No claim is made that the custom domain was freshly verified.
