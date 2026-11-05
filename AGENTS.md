# Repository instructions for coding agents

Before creating or changing travel content, read `CONTENT_GUIDELINES.md` and follow it. In particular:
- Search sitemap, search index, and localized page directories for topic/intent duplicates before creating a new guide.
- Prefer improving the existing canonical guide when the topic overlaps; never create competing URLs just to target another keyword.
- Wrap every HTML table in `<div class="table-wrap">`.
- Replace raw long URLs in visible prose with descriptive anchor text.
- Update localized alternates, sitemap, search index, and internal links together.
- Run the available build, SEO, link, JSON-LD, and 360px/390px overflow checks before requesting merge.
- State precisely which checks passed and whether deployment was actually verified.

## Merge gate (mandatory)

- Before opening a PR, run `sh scripts/build-static.sh` and then every audit listed in `.github/workflows/seo-audit.yml` (public-quality, seo-audit, sitemap-hreflang, outbound-link-image, homepage-food-image, `image-credit-audit --strict`, analytics-navigation, `build-social-calendar --check`, social-content, `social-content --self-test`, language-switch).
- Never merge a PR whose CI is failing. If `main` itself is red, fix `main` before shipping anything else.
- Keep PRs small and bring them up to date with the latest `main` right before merging. Several PRs that each append to the end of `assets/styles.css` will conflict with one another; combine them or merge them one at a time.
- Close or refresh open PRs that fall far behind `main` instead of merging stale changes that could undo later fixes.
- After merging, confirm that https://go2busan.com/version.txt matches the merge commit before reporting the change as deployed.

## Titles and descriptions

- `<title>` must be 65 characters or fewer including ` | Go2Busan`. `seo-audit.mjs` counts `&amp;` as five characters.
- Meta descriptions: 70–170 characters in English, 35–110 characters in Japanese and Traditional Chinese.

## Images

- Before using a Wikimedia image, open its Commons file page and confirm that the file exists, what its license is, and that it shows the right subject.
- Register every image in `assets/data/image-credits.json` (source_url, author, license, license_url, checked_on) before it appears on any page, including `og:image` and `twitter:image`.
- Do not use images whose rights are unclear (Naver, Instagram, news sites), and do not present AI-generated images as photographs of real places.

## Content and duplicates

- Do not add a new URL whose search intent overlaps an existing guide; strengthen the existing guide instead.
- Keep the homepage local-experience cards at the count that `analytics-navigation-audit.mjs` expects.
- Check new mobile styles at 390px on top of the current `main`, not on an old base.
- Do not write unverified prices, opening hours or travel times, and do not describe places as visited unless they were.
- Do not change existing URLs, redirects, Klook/Agoda affiliate IDs, or GA4 event names and parameters.

## Past incidents these rules prevent

- #234 used `Busan_port_and_bridge.jpg`, which does not exist on Commons and was not registered. That broke `image-credit-audit --strict` and turned CI red for `main` and every open PR (fixed in #237).
- New guides shipped with 73–78 character titles (fixed in #236 and #246).
- #219, #220, #221 and #224 all appended to `assets/styles.css` and conflicted (combined in #232).
- #126 added a fourth homepage card and failed the analytics audit. #226 made the 390px homepage search chips white-on-white.
- #191 and #174 created URLs that duplicated `/guides/bts-in-busan/` and `/guides/busan-travel-mistakes-local-hacks/`.
