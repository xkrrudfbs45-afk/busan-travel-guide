# Image operations audit — 2026-11-21

## Scope and evidence
- Audited main SHA: `41e7468434750a8b22b0568028dafec360249e0f`.
- Main Technical SEO audit: [run #44669395402](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44669395402), completed successfully on 2026-11-20.
- Production deploy: [run #44669441389](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/44669441389); the deploy workflow confirmed that `https://go2busan.com/version.txt` matched the audited SHA.
- This is a source/build audit plus limited image retrieval. It is not a full browser, device, or Lighthouse test.

## Current main findings

| Severity | Finding | Evidence / impact |
|---|---|---|
| P1 | 86 pages lack at least one of `og:image` or `twitter:image` | Main audit output: `Images missing alt: 0; pages missing social image metadata: 86`. The 11/19 language split was EN 31, JA 25, zh-TW 30; the 11/20 main build reconfirmed the total of 86. These are metadata gaps, not proof of broken in-body images. |
| P1 | City Tour Bus photo is an unlicensed external hotlink in three locales | EN `/guides/busan-city-tour-bus-guide/`, JA `/ja/guides/busan-city-tour-bus-guide/`, zh-TW `/zh-tw/guides/busan-city-tour-bus-guide/` reference `https://www.citytourbusan.com/m/images/01intro/01_01_1_m_bus.jpg`. The image rendered in a web preview, but no reuse licence or permission is recorded in the repository image-credit registry. |
| P1 | Taejongdae top image is operationally misleading and its image response is unverified | EN `/guides/taejongdae-danubi-train-tips/`, JA `/ja/guides/taejongdae/`, zh-TW `/zh-tw/guides/taejongdae/` use the 480px Wikimedia Danubi-train photo immediately after the article hero with lazy loading. The train is suspended; the image can imply it is operating. The 11/19 crawler could not verify the exact `Special:FilePath` download response. |
| P2 | First article image may be an LCP candidate | The Taejongdae image is lazy-loaded despite being the first image after the article hero. Its position in the initial 360/390px viewport has not been measured. |
| P2 | SNS creative image QA remains incomplete | 11/25 Japanese card 5 has horizontal text overflow; 11/26 Taejongdae creative depicts the suspended train; 11/28 Gwangbok-ro evening event artwork is still unrendered and its prompt specifies bright daylight. |

## Image registry and build counters
- 51 image references in use; 60 registry entries; 9 unused-entry warnings; 0 strict rights-registry errors.
- 40 image URLs are reused across pages; reuse is a review signal, not automatically an error.
- Homepage food cards: 10/10 distinct image URLs.
- Main audit: 0 in-body image alt omissions. The three missing `og:image:alt` warnings in the older 11/19 report are stale: the 11/20 main build reports zero missing image alt, and the corresponding current files contain localized OG alt text.
- Source/build counters do not establish real-device LCP improvement. Mobile crop, focal point, image bytes, CLS, and Lighthouse LCP were not measured.

## Existing Draft PRs and safe remediation

### PR #592 — City Tour Bus image rights
- Draft, exact base is current main, Technical SEO CI passed.
- Replaces the operator-site hotlink in EN/JA/zh-TW with a 13 October 2012 archival Wikimedia photo by calflier001, CC BY-SA 2.0, with attribution and a clear note that it is not the current fleet.
- The Commons file page and 1280px thumbnail were retrieved and the licence is explicit. The exact `Special:FilePath?...width=1200` URL used by the PR was not independently verified by the crawler.
- The proposed first article image changes to `loading="lazy"`; verify whether it is above the fold at 360/390px before keeping lazy loading. If it is an LCP candidate, use eager/high priority.

### PR #586 — Taejongdae cover and OG image
- Draft; base SHA is older than current main and must be rebased before review.
- Keep the image only after confirming the exact delivery URL, subject match, licence/attribution, and 1200×630 crop. Do not use a generic skyline to fill the metadata gap.

### Broader OG/Twitter backlog
- Do not bulk-assign one generic image to all 86 pages.
- Add metadata only when a page has a subject-matched, rights-cleared asset that survives a 1200×630 crop.
- Keep unresolved pages explicitly listed by language and route; do not mark a file healthy based solely on a source-code reference.

## Verification still required
1. Fetch the exact image URLs and record HTTP status, content type, dimensions, and final redirect target.
2. Review EN/JA/zh-TW crops at 360, 390, and 1280px.
3. Run mobile Lighthouse and record LCP/CLS before changing eager/lazy or fetchpriority.
4. Recheck the Taejongdae operator notice immediately before any time-sensitive SNS post.
5. Review the 86-page social metadata backlog by page subject and licence before assigning images.

No production files, deployment settings, external posts, tokens, or secrets were changed by this audit.