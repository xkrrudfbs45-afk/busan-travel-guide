# Production verification — 2026-11-13 (Claude)

Owner request item 5. Read-only checks; nothing was merged, deployed or published for this report.

## Deployed commit
- `https://go2busan.com/version.txt` = `2353c70` = `origin/main` HEAD (#389 merge). Deploy matches main.

## Build-time CTAs and cover photos on the live site
Fetched each live page (cache bypassed) and checked the injected markup:

| Check | Result |
|---|---|
| zh-TW Klook CTAs (`content/affiliate/zh-tw-cta.json`, 7) | 7/7 present: CTA id, `aid=141680`, expected `aff_adid`, `rel` includes `sponsored` |
| ja Klook CTAs (`content/affiliate/ja-cta.json`, 5) | 5/5 present, same checks |
| Cover photos (`content/images/cover-photos.json`, 20 pages) | 20/20 `figure.article-cover` with the registered file |
| Total | **32/32** |

## Mobile / desktop layout
- Method: a local build of the deployed SHA `2353c70` (identical source; `version.txt` matches), served locally and opened in Chromium at 360, 390 and 1280 px.
- All 175 sitemap URLs: HTTP 200, **no horizontal overflow** at any of the three widths.
- Not covered: real devices and in-app browsers (Instagram/Threads WebView). The live site itself was not opened at 360 px in this sandbox (the live domain is reachable only through the browser, which does not emulate phone widths).

## Related open drafts (2026-11-13)
- #394 social QA gate (fail-closed `qa.json`; note: approved `ig-fresh15-1125-jp` currently fails QA and would be held)
- #395 GA4 `affiliate_click` vs `partner_outbound_click`
- #396 technical SEO + share-preview completion (0 gaps on 175 pages)
- #397 privacy notice: search-shortcut label sent to GA4 after opt-in
- None merged; owner approval required.
