# Haeundae food search-snippet refresh — 2026-11-20

## Scope and decision

- Target existing pages only: `/guides/haeundae-food-guide/`, `/ja/guides/haeundae-food-guide/`, and `/zh-tw/guides/haeundae-food-guide/`.
- Improve the search title and meta description in each locale. No new URL and no restaurant, price, hours, route, or opening-status claim was added.
- No body copy, image asset, OG/Twitter tag, JSON-LD, canonical, hreflang, sitemap, affiliate destination, analytics ID/event, or SNS schedule was changed.
- Base: `main` SHA `41e7468434750a8b22b0568028dafec360249e0f`. Work is isolated on `content/haeundae-food-snippet-ctr-20261120`; no direct push to main.

## Public page snapshot and deployment boundary

- The public Render-hosted EN, JA and zh-TW Haeundae food pages were crawled on 2026-11-20. Their currently served title tags are still the pre-PR titles, as expected; PR #594 is not merged or deployed.
- The Render-hosted pages show the current body guide and locale-specific copy. The JA and zh-TW HTML source has no equivalent in-body hero figure; the English page does.
- The custom domain `https://go2busan.com/` and its `/version.txt` endpoint were not accessible through the web fetch in this run. This is an access limitation, not evidence that the site is down. No custom-domain HTTP status or live version claim is made.
- GitHub's `Deploy to Render` workflow completed successfully on 2026-11-20 for main SHA `41e7468434750a8b22b0568028dafec360249e0f` (workflow run [#44669441389](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44669441389)). The deploy workflow result is recorded, but the custom-domain version was not independently fetched.

## Search Console signal

Owner-priority issue [#589](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/589) records the 28-day GSC window ending 2026-11-17:

- Haeundae food page: 98 impressions, average position 17.8, 2 clicks.
- The page is already being shown, but the search snippet is not earning enough clicks. This is a small sample; it does not establish a stable CTR baseline or prove a future uplift.
- No new GA4/GSC query was made in this recurring content run.

## Public community signals

### Taiwan — priority market

1. [Dcard: 2026 Busan 4D3N trip report](https://www.dcard.tw/f/korea_travel/p/262264413), trip in early October 2026; page showed 40K+ views when checked 2026-11-20. The author discusses Haeundae Market, the Haeundae signature hotteok stall, salt bread near Mipo, and crowd/queue friction at the coastal train and capsule train. This is one detailed trip report, not a representative survey.
2. [Dcard: Busan itinerary review and trip report](https://www.dcard.tw/f/korea_travel/p/259077103), thread dated 2025-05-07. The traveler describes a first Korea trip with a parent, a Haeundae stay, late-night food near Haeundae Station, market browsing and a Blue Line Park day. It demonstrates itinerary-plus-food planning, not current restaurant operating data.
3. [Dcard: 8D7N Busan itinerary planning](https://www.dcard.tw/f/korea_travel/p/261405972), public thread showing 10K+ views at crawl. The proposed Haeundae days combine 31cm seafood kalguksu, Haeundae Market snacks, cafés and attractions. The parsed page did not expose a reliable post date; none is inferred.

### Japan

1. [4travel: Haeundae walk and Gwangalli drone show](https://4travel.jp/travelogue/12075164), trip dated 2026-09-18 to 2026-09-21. The diary includes Haeundae Beach, Busan-style mulmil-myeon and a Korean BBQ stop. It is a recent itinerary example, not a restaurant review sample.
2. [Yahoo!知恵袋: Blue Line Park ticket / stopover question](https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14321839749), posted 2025-11-11, answered 2025-11-12. This is adjacent Haeundae itinerary friction rather than a food-demand signal; it reinforces the need to separate food areas from attraction stops and not assume every stop is one short walk.

### English-speaking visitors

- [Reddit: “decent food in Busan”](https://www.reddit.com/r/koreatravel/comments/1kcucat), posted 2025-05-02. One visitor near Haeundae asks how to avoid low-quality / tourist-oriented meals; replies mention a gukbap option and Haeridan-gil. This is a single thread and is not generalized to all visitors.

### Korea — local source discovery

1. [Public Korean travel vlog: 3N4D Busan trip with Haeridan-gil and Haeundae food](https://www.youtube.com/watch?v=mpWkjIcumB4), published 2025-01-30 (168-follower channel; 267 views and 8 likes at crawl). Its itinerary mentions Haeundae-area meals, Haeridan-gil cafés and an ocean-view hotel. This is a low-volume single-creator signal, not a representative sample.
2. [Korean local food blog: Haeridan-gil tonkatsu](https://borameet.tistory.com/36), dated 2025-04-23. It documents a personal Haeundae Haeridan-gil tonkatsu visit, the address, kiosk prepayment and no-wait entry at that time. It is one dated visit and is not treated as current business-hours or queue data.
3. [Busan.net Haeundae Top 10](https://busan.net/food/rank/haeundae/), checked 2026-11-10, is a local editorial/aggregation benchmark rather than a community post. It displays dish, price, distance, source count, review themes and queue notes. Some entries explicitly say the publisher has not personally visited; rankings and prices were not copied.

### Coverage and access limits

- Public searches were run for Dcard/PTT, 4travel/Yahoo!知恵袋, Reddit, Korean Naver/blog, DCInside, Theqoo, Clien, Ppomppu and public YouTube results.
- No directly relevant recent Theqoo, Clien or Ppomppu first-person thread surfaced in the public indexed results. The DCInside result surfaced was a syndicated editorial item, not a forum discussion.
- Direct Naver Blog access was blocked by robots policy in the search environment. No login or access-control bypass was attempted. YouTube comment retrieval was not reliable, so no comment sentiment or engagement trend is inferred.
- Older PTT posts (including 2023-03-25 and 2024-07-04 reports about Haeundae 31cm seafood kalguksu) were used only as historical examples of portion-sharing / scissors / queue questions. Their prices and hours are not reused.

## Official fact cross-check

- [Visit Busan: Must-eat places in Haeundae Market](https://www.visitbusan.net/en/index.do?lang_cd=en&menuCd=DOM_000000303011001000&uc_seq=294), checked 2026-11-20: describes the market within about five minutes of Haeundae Beach; mentions tteokbokki, fritters, noodle soup, twisted bread, pork-and-rice soup, sliced raw fish and grilled hagfish; lists 09:00–22:00 and store-dependent fees.
- [Korea Tourism Organization: Busan Haeundae Market](https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=84963), checked 2026-11-20: confirms the market address, 09:00–22:00 store-variable hours, and card acceptance.
- Existing page body already links to official Visit Busan menu listings for the two bokguk restaurants and Busan's multilingual menu service for the local gukbap stop. The PR changes no volatile facts; all prices/hours remain as currently published with existing caveats.

## Competitive structure benchmark

- [Busan.net Haeundae Top 10](https://busan.net/food/rank/haeundae/) offers a useful structure: rank, dish, price, distance from the beach, source count, review consensus and queue guidance. It also distinguishes its own visit status from aggregated reviews.
- Go2Busan's editorial distinction remains an area-first decision guide: market snacks vs. sit-down seafood vs. Haeridan-gil cafés/independent restaurants vs. bokguk, gukbap and Korean BBQ. It includes Korean ordering phrases, exact addresses and warnings about stall-by-stall prices and separate neighborhoods. No ranking, review count, restaurant claim or image was copied.

## Search snippet changes

| Locale | Previous title | New title | Previous description | New description |
|---|---|---|---|---|
| EN | Where to Eat in Haeundae, Busan: Local Food \| Go2Busan | Haeundae Food: Markets, Seafood & Local Eats \| Go2Busan | Find where to eat in Haeundae, Busan, from market snacks and seaside seafood to bokguk, local gukbap and Korean barbecue. | Haeundae Market snacks, seaside seafood, Haeridan-gil cafés, bokguk and Korean BBQ. Includes addresses, area-by-area tips and Korean ordering phrases. |
| JA | 海雲台グルメ：ポックク・クッパ・市場・海鮮 \| Go2Busan | 釜山・海雲台グルメ｜市場・海鮮・フグ料理 \| Go2Busan | 海雲台でポックク（フグスープ）やローカルクッパを。市場グルメ、海鮮、カフェ、韓国焼肉もエリア別に紹介。 | 海雲台市場の食べ歩き、海辺の海鮮、海理団通りのカフェ、フグスープやクッパをエリア別に紹介。住所と注文に使える韓国語も掲載。 |
| zh-TW | 海雲台美食：河豚湯、在地湯飯、市場與海鮮 \| Go2Busan | 釜山海雲台美食攻略：市場小吃、海鮮與河豚湯 \| Go2Busan | 海雲台美食指南：河豚湯、在地牛肉湯飯、市場小吃、海鮮與韓式烤牛腸，附店家地址與交通提醒。 | 從海雲台傳統市場小吃、海邊海鮮攤到海理團路咖啡店，整理河豚湯、牛肉湯飯、店家地址與點餐韓文。 |

Description lengths: EN 150 characters; JA 61 characters; zh-TW 46 characters. The English title is 55 characters. Localized wording is not a literal translation: the Taiwan copy leads with 「釜山海雲台美食攻略」 and market snacks; Japanese leads with 「釜山・海雲台グルメ」 and food-area choices.

## Image audit — no asset changes

- EN hero: [Pojangmacha in Haeundae, Busan](https://commons.wikimedia.org/wiki/File:Pojangmacha_in_Haeundae,_Busan.jpg), Busan Metropolitan City, Korea Open Government License Type 1 (KOGL Type 1). The image registry marks commercial use permitted with attribution; registry checked 2026-11-05; the Commons license page was rechecked 2026-11-20. Commons confirms the original is 1200×545 (129 KB). The image subject matches the Haeundae food-stall guide. The page uses a 1200×545 intrinsic box, `fetchpriority="high"`, `decoding="async"` and CSS `object-fit:cover`.
- JA and zh-TW currently have no equivalent in-body hero figure; both retain the same Haeundae OG/Twitter image and a correctly labelled bokguk illustration photo.
- Bokguk image: [Korea-Busan-Bokguk-Pufferfish soup-01.jpg](https://commons.wikimedia.org/wiki/File:Korea-Busan-Bokguk-Pufferfish_soup-01.jpg), Junho Jung, CC BY-SA 3.0. Registry checked 2026-11-16; the Commons page was rechecked 2026-11-20; commercial use is allowed with attribution and ShareAlike terms. Existing captions identify it as illustrative dish imagery, not a photo of either named restaurant.
- No image was downloaded, generated, replaced or re-cropped. No local WebP/AVIF conversion or responsive srcset is present on the inspected figures; byte transfer, mobile crop, LCP and CLS were not measured. The JA/zh-TW in-body hero parity gap is recorded for the existing image-quality follow-up [#384](https://github.com/xkrrudfbs45-afk/busan-travel-guide/issues/384).

## Validation and remaining risks

- Source-level checks: exact title and description replacements in the three existing files; no body, URL, canonical, hreflang, JSON-LD, OG/Twitter, affiliate or analytics change.
- Expected search intent: clearer market/seafood/local-eats language should make the result more specific than the previous generic “Where to Eat” title. Google may rewrite titles/snippets; uplift is not guaranteed.
- Required next checks: exact-head build and all repository SEO/localization audits; confirm all three metadata values in generated output; browser screenshots at 360 / 390 / 1280 px; verify the hero image crop and social-preview fetch; measure image transfer size / LCP / CLS if available.
- Not performed in this PR: real-browser visual QA, Lighthouse, custom-domain HTTP/version verification, GSC re-index request, GA4 analysis or partner conversion analysis.
- No merge, production deployment, external SNS post, schedule edit or new page creation.
