# Taiwan growth plan — Phase 0 baseline (2026-11-12)

Prepared by Claude for the 90-day plan in PR #359. Every number below was read on 2026-11-12 (UTC) from the source named next to it. Items that could not be read are marked **not available** — nothing is estimated.

## 1. Repository and production state
| Item | Value | Source |
|---|---|---|
| `main` HEAD | `19e8150` (merge of #353) | `git ls-remote` |
| Production `version.txt` | `19e8150bfb11ab341df4c3cf5b659ade125b66d5` → production = main | https://go2busan.com/version.txt |
| Last merges | #353 IG drafts (draft only), #357 CTR/FAQ/overflow, #350 Threads 75-post replacement, #348, #343, #342, #340, #337–#339, #334/#336 | git log |
| Open PRs | 45 (42 at triage + #360, #361, #363 opened during this work), plus Claude's #362 and #364 | GitHub PR list |
| zh-TW guide pages | 48 (built site) | `public/zh-tw/guides/*/index.html` |

## 2. Open PR triage (git merge-tree against `19e8150`)
"Conflict" = `git merge-tree` reports a content conflict with current main. No PR was merged or closed by Claude.

### A. Superseded / no-op — recommend closing
| PR | Why |
|---|---|
| #298 | No-op: main already contains the Spa Land section-number fix (merged in #357). |
| #315 | Same three pages (Spa Land, Haeundae food, Nampo) were improved and merged in #357. |
| #322 | US Threads morning-slot fix superseded by #334 + #336 (cron `7 0,11,12,13,22,23`). Conflicts. |
| #293, #283, #275, #310, #297 | STATUS/HANDOFF/BACKLOG snapshots from Nov 6–11; superseded by this report. All conflict except #275. |
| #304, #305 | Threads schedule/test edits written before #336/#350; conflict with the current live schedule. |
| #318 | Exists only to keep the search index for #312. |

### B. Clean against main — small, reviewable now
| PR | Scope | Note |
|---|---|---|
| #359 | Growth plan doc | Docs only. |
| #363 | ChatGPT/Claude work-division doc | Docs only. |
| #360 | zh-TW BTS search snippet | Touches the page whose title #357 just changed — check the two titles agree before merging. |
| #361 | zh-TW newspaper food picks | **Will conflict with #364** (same file, punctuation). Merge one, rebase the other. |
| #351 | Separate IG draft file (suyuk baekban 7 cards) | Draft only. |
| #352 | KTX sold-out options + food booking guides (EN/JA/TW, sitemap) | Edits the 3 KTX pages (+1 line); expect a small conflict after #362. |
| #328 | zh-TW bathhouse/jjimjilbang + Kkangtong bath shopping pages | New URLs — check duplicates with Spa Land/jjimjilbang content. |
| #326, #325 | zh-TW three-days intent, zh-TW homepage neighborhood links | Single-file each. |
| #327, #324, #313 | Research/roadmap/guideline docs | Docs only. |
| #317, #311, #309, #301, #300 | Small content fixes | Fact-check before merge. |
| #286 | Claude GitHub workflow | Owner decision (automation scope). |

### C. Conflicting — need rebase or extraction
| PR | Scope | Recommendation |
|---|---|---|
| #354 → #355 → #356 (stacked) | KTX integration + zh-TW transport facts **and** social draft/schedule rewrites | Site content extracted into **#362**. Social parts conflict with #348/#350/#353 and must be redone against the current schedules (the live Threads schedule is now different). |
| #312 (64 files), #316 (33), #321 (31) | Taiwan hub integration, SEO publishing standard, metadata fixes | Too large to rebase blind; split into per-cluster PRs. |
| #332, #306, #303, #314, #320, #294, #277, #269, #266, #263 | Seasonal/winter, homepage OG, Haeundae/coffee, PNU gallery, JA/TW map, nav, older content | Rebase or close; several are older than the pages they edit. |

## 3. Search and analytics baseline
### Search Console (`sc-domain:go2busan.com`)
| Window | Clicks | Impressions | CTR | Avg position | Source |
|---|---|---|---|---|---|
| 2026-11-03 → 11-09 (7 days) | 2 | 353 | 0.6% | 17.7 | GSC Performance, read 2026-11-12 |
| 28 days to 2026-11-08 | 1 | 249 | 0.4% | 17.6 | GSC Performance, read 2026-11-11 |
- Country split (28 days to 11-08): Korea 91, **Taiwan 32**, Singapore 25, US 18, Japan 14 impressions. A newer Taiwan-only split is **not available**: Search Console navigation was redirected away in this session's browser.
- zh-TW pages with impressions (28 days): 金井山城馬格利酒 11 (pos 6.5), BTS 11 (8.1), PNU food 7 (5.4), Seomyeon hub 5 (22), Dongnae hot spring 5 (39). Title/FAQ improvements for makgeolli and BTS shipped in #357.
- Index coverage report (snapshot not refreshed since 11-08): 65 indexed / 107 not indexed. URL Inspection on 11-11: 31 of the 32 "crawled – not indexed" URLs were already indexed (#335).

### GA4 (`G-JCYV49BXQZ`)
- **Not available.** Claude's browser account sees only an unrelated property. ChatGPT reported `ga4_not_connected` through OpenSEO (#358); the owner connected GA4 in OpenSEO on 2026-11-12 (Integrations page shows "Connected", property "go2busan"). The #358 pull has to be re-run.
- **Measurement caveat (code-verified):** `assets/js/analytics.js` loads gtag **only after the visitor clicks "allow analytics"** (opt-in, `go2busan_analytics_consent`). Visitors who ignore or decline the banner send nothing. GA4 users/sessions will therefore be lower than real traffic and are not comparable with Search Console clicks.

## 4. Affiliate measurement (priority 6)
Local Playwright test on the built site, gtag network stubbed, partner domains blocked, 2026-11-12:
| Page | Consent | Result |
|---|---|---|
| EN Haeundae hub | granted | `affiliate_click` pushed with `affiliate_partner=klook`, `affiliate_placement_context=visit_busan_pass_conversion_panel`, `affiliate_placement=1546323`, `affiliate_destination_locale=en-US`, `link_url`, `link_text`, `page_location` ✅ |
| EN Haeundae hub | none (banner shown) | no event (expected with opt-in) |
| JA Spa Land | granted | `affiliate_click` with `aff_adid 1539682`, locale `ja` ✅ |
| zh-TW where-to-stay | granted | **no affiliate link on the page** |
- `affiliate_cta_view` is implemented in `assets/js/ux.js` (IntersectionObserver, threshold 0.6) but was not observed in the headless run; verify in GA4 DebugView once data access works.
- **Revenue gap for a Taiwan-first plan:** affiliate links exist on 25/66 EN guides (33 links) but only **3/48 zh-TW guides** (Spa Land, KTX, luggage storage — 3 links) and 3/46 JA guides. Link IDs in use: `aid=141680`, `aff_adid` 1539681–1539686 and 1546323.
- A click is not a booking; no booking or commission data is available.

## 5. Social schedules (priority 4)
| Check | Result | Source |
|---|---|---|
| Threads live schedule | 180 posts, all `approved`; 75 carry the 15-day copy (#350); 15 originals kept | `content/social/threads-30day/schedule.json` @ main |
| Duplicate approved slots | 0; max 2 approved posts per account per local day | same |
| 15-day Threads drafts | 75 promoted (`promoted_to`), 15 remain draft-only (the kept slots) | `threads-15day/nov12-26-drafts.json` |
| Threads publisher | **LIVE** — run #100 (2026-11-12 ~01:07Z) published `d08-tw-1` and its link reply | Actions run 43132086703 |
| Threads publish log | 28 published, 20 missed (Nov 4–10 slots, mostly during the Nov 6–10 pause); none re-posted | `threads-state` branch @ 3851fba |
| Instagram schedule | 69 posts: 6 approved (Nov 5–6, past the 6 h late window), 18 older drafts, 45 fifteen-day drafts; 0 timestamp collisions | `instagram/schedule.json` @ main |
| Instagram rendering | Not yet run: `instagram-state` last written 2026-11-06; first run with the 15 new art sets is the 12:00 UTC schedule | `instagram-state` branch |
| #354–#356 social edits | Written against the pre-#350 schedule; conflict; must not be applied as-is | merge-tree |

## 6. KTX/SRT consistency (priority 5)
- On `main`, no page mentions SRT and the three KTX pages point only to Korail. **#362** adds the same integration notice to EN, JA and zh-TW (integrated KTX from 2026-09-01; book former SRT routes as KTX via Korail website / Korail+; former SRT app may offer limited non-member access during transition). Verified against SBS Biz and Seoul Shinmun reports (see #362).

## 7. zh-TW content audit (priority 3)
Built site, 48 zh-TW guide pages. Mechanical fixes are in #364 (punctuation, Chinese-first names) and #362 (six transport pages). Content gaps remain:
- 30 pages have no visible FAQ (so no FAQ schema).
- About 19 meta descriptions are shorter than 50 characters.
- Thinner pages (CJK characters in main): geumjeongsanseong-village-food 737, beomeosa-food-guide 747, busan-food-stories 829, ochoryang 851, seomyeon hub 875.
- No broken internal links, all pages in the sitemap, reciprocal hreflang, no simplified-only characters detected.
- Only 3 pages carry affiliate links (section 4).

<details><summary>Per-page table (48 pages)</summary>

| Page | Title len | Desc len | CJK chars | Visible FAQ→schema | Hangul in headings | `・` | Checked date shown | Affiliate links |
|---|---|---|---|---|---|---|---|---|
| airport-to-haeundae | 32 | 52 | 1604 | — | 0 | 1 | yes | 0 |
| airport-to-seomyeon | 31 | 49 | 1712 | yes | 0 | 2 | yes | 0 |
| beomeosa-food-guide | 35 | 49 | 747 | — | 0 | 0 | yes | 0 |
| beomil-dong-nakgopsae | 34 | 44 | 1523 | — | 4 | 0 | yes | 0 |
| bts-in-busan | 34 | 62 | 1694 | yes | 0 | 0 | yes | 0 |
| bukangi-soju | 34 | 49 | 1090 | — | 2 | 0 | yes | 0 |
| busan-city-tour-bus-guide | 31 | 48 | 1140 | — | 0 | 3 | yes | 0 |
| busan-dongnae-pajeon-history | 30 | 40 | 949 | — | 0 | 0 | yes | 0 |
| busan-dwaeji-gukbap-history | 33 | 44 | 1435 | — | 0 | 0 | yes | 0 |
| busan-eomuk-history | 34 | 46 | 1135 | — | 0 | 0 | yes | 0 |
| busan-fireworks-festival-fair-price-stays | 33 | 48 | 966 | — | 0 | 0 | yes | 0 |
| busan-fireworks-festival | 32 | 44 | 2354 | — | 0 | 0 | yes | 0 |
| busan-food-stories | 30 | 39 | 829 | — | 0 | 0 | yes | 0 |
| busan-gupo-guksu-history | 30 | 40 | 949 | — | 0 | 0 | yes | 0 |
| busan-jaecheopguk-history | 24 | 37 | 936 | — | 0 | 0 | yes | 0 |
| busan-milmyeon-history | 35 | 52 | 1182 | — | 2 | 0 | yes | 0 |
| busan-newspaper-food-picks | 35 | 64 | 4435 | — | 28 | 24 | yes | 0 |
| busan-spa-land-guide | 38 | 74 | 1922 | yes | 0 | 1 | yes | 1 |
| busan-station-local-walk | 30 | 39 | 1149 | — | 0 | 0 | yes | 0 |
| busan-winter-travel-guide | 30 | 47 | 2153 | yes | 0 | 0 | yes | 0 |
| dongnae-hot-spring-half-day | 34 | 52 | 1725 | — | 0 | 2 | yes | 0 |
| first-trip | 32 | 59 | 1042 | — | 0 | 0 | yes | 0 |
| food-etiquette | 29 | 51 | 1894 | yes | 0 | 1 | yes | 0 |
| geumjeongsanseong-makgeolli | 35 | 48 | 1121 | yes | 0 | 0 | yes | 0 |
| geumjeongsanseong-village-food | 34 | 41 | 737 | — | 0 | 0 | yes | 0 |
| gwangalli-neighborhood-guide | 27 | 69 | 959 | yes | 0 | 1 | yes | 0 |
| gwangalli-parking-guide | 33 | 52 | 1198 | — | 0 | 2 | yes | 0 |
| haedong-yonggungsa | 29 | 51 | 1243 | yes | 0 | 1 | yes | 0 |
| haeundae-neighborhood-guide | 30 | 58 | 1098 | yes | 0 | 1 | yes | 0 |
| jagalchi-market | 30 | 47 | 1643 | — | 0 | 0 | yes | 0 |
| ktx-booking | 32 | 47 | 1150 | — | 0 | 1 | yes | 1 |
| late-arrival | 28 | 48 | 1598 | yes | 0 | 0 | yes | 0 |
| local-food-by-neighborhood | 26 | 56 | 3836 | — | 1 | 0 | yes | 0 |
| luggage-storage | 31 | 58 | 2234 | — | 0 | 10 | yes | 1 |
| nampo-neighborhood-guide | 29 | 67 | 912 | yes | 0 | 1 | yes | 0 |
| ochoryang | 39 | 55 | 851 | — | 0 | 0 | yes | 0 |
| pork-soup-awards | 27 | 49 | 1111 | — | 0 | 0 | yes | 0 |
| pusan-national-university-food-guide | 30 | 67 | 1656 | — | 0 | 0 | yes | 0 |
| rainy-day | 30 | 51 | 1261 | — | 0 | 0 | yes | 0 |
| seomyeon-neighborhood-guide | 28 | 68 | 875 | yes | 0 | 1 | yes | 0 |
| taejongdae | 36 | 54 | 1252 | yes | 0 | 1 | yes | 0 |
| taiwan-travelers-busan | 34 | 60 | 2338 | — | 0 | 0 | yes | 0 |
| things-to-do-in-busan | 29 | 54 | 1168 | yes | 0 | 0 | yes | 0 |
| three-days | 29 | 52 | 2051 | — | 0 | 0 | yes | 0 |
| transit-card | 28 | 65 | 1971 | — | 0 | 0 | yes | 0 |
| travel-mistakes | 29 | 61 | 2234 | yes | 0 | 1 | yes | 0 |
| where-to-stay-busan | 36 | 61 | 1501 | — | 0 | 1 | yes | 0 |
| where-to-stay-songjeong-gijang | 33 | 62 | 1292 | — | 0 | 1 | yes | 0 |

</details>

## 8. Blockers and owner actions
1. Re-run #358 (GA4 via OpenSEO) now that GA4 is connected.
2. Decide on closing the superseded PRs in section 2A.
3. Approve merges of #362 and #364 (site content; merge = production deploy).
4. Decide whether the analytics banner should stay opt-in (privacy-first) knowing it undercounts GA4.
