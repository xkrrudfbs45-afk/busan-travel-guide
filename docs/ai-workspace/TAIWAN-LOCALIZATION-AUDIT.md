# Taiwan Traditional Chinese Localization Audit

_Date: 2026-11-11_  
_Auditor: ChatGPT_  
_Repository snapshot: `main` at `5a705ead6f736bf648c583df14f968b76064a3bc`_  
_Scope: source repository audit; this is not a production deployment verification._

## Executive finding

**Go2Busan is not yet fully localized for Taiwan.** The Taiwan homepage, guide directory and a substantial set of guide pages are already written in Taiwan-style Traditional Chinese. However, the English page inventory is larger than the localized inventory, some pages are not connected through hreflang, and six existing Traditional Chinese guides are missing from the on-site search index.

## Inventory

| Check | Result | Interpretation |
|---|---:|---|
| URLs in sitemap | 168 | Main-branch sitemap snapshot |
| English/root URLs | 69 | Root-language pages, excluding /ja/ and /zh-tw/ |
| Traditional Chinese URLs | 50 | 45 guides + homepage + guide directory + About, Privacy and Disclosure |
| English/root URLs with a zh-TW hreflang alternate | 47 / 69 | 22 English/root URLs lack a Taiwan alternate |
| Traditional Chinese guide URLs | 45 | Existing Taiwan guide inventory |
| zh-TW search-index URLs | 40 | Includes the guide-directory URL; only 39 are guide results |
| Taiwan guides missing from search index | 6 | Search cannot discover these six guides by their page metadata |

All 50 Traditional Chinese sitemap pages were fetched successfully from the repository and checked for HTML language declarations, title/description metadata, and visible page content. This establishes source-file coverage, not that every sentence has received native-speaker review or that every file is currently deployed.

## Six Taiwan guides missing from on-site search

These pages exist and are linked from the Traditional Chinese guide directory, but have no corresponding entry in `assets/data/search-index.json`:

1. `/zh-tw/guides/ochoryang/`
2. `/zh-tw/guides/busan-station-local-walk/`
3. `/zh-tw/guides/busan-fireworks-festival-fair-price-stays/`
4. `/zh-tw/guides/bts-in-busan/`
5. `/zh-tw/guides/dongnae-hot-spring-half-day/`
6. `/zh-tw/guides/taiwan-travelers-busan/`

This is a concrete discovery defect: the pages are present in the directory and sitemap but are not returned by the localized search index.

## English/root pages without a Taiwan hreflang alternate

The following 22 URLs have no `hreflang="zh-TW"` entry in the main-branch sitemap:

- `/guides/bukangi-busan-north-port-shark/`
- `/guides/busan-local-culture/`
- `/guides/busan-local-food-guide/`
- `/guides/busan-local-traits-culture/`
- `/guides/busan-local-food-picks/`
- `/guides/busan-street-dialect-guide/`
- `/guides/busan-travel-budget/`
- `/guides/busan-map/`
- `/guides/haeundae-blueline-park-sold-out/`
- `/guides/gijang-kkeutjip-abalone-porridge/`
- `/guides/songdo-beach-local-breakfast/`
- `/guides/visit-busan-pass-guide/`
- `/guides/zimcarry-busan-station/`
- `/guides/busan-with-kids/`
- `/guides/gwangalli-drone-show-viewing-tips/`
- `/guides/busan-night-views-local-tips/`
- `/guides/busan-taxi-vs-subway-motion-sickness/`
- `/guides/busan-fireworks-festival-fair-price-stays/`
- `/guides/busan-coffee-guide/`
- `/guides/haeundae-food-guide/`
- `/guides/kkangtong-market-food-guide/`
- `/guides/kkangtong-market-bath-shopping/`

Not all 22 should automatically become new translations. First check for equivalent Taiwan pages under a different slug, and check open PRs to avoid duplicate work. For example, the Taiwan page for the fireworks-festival fair-price stays already exists but is missing reciprocal hreflang; the map translation is being handled in PR #294; and PR #303 adds Taiwan versions of autumn foliage, Yeongdo, Jeonpo and souvenirs.

## Language and visible-copy findings

### HTML language declarations

Five Traditional Chinese files use `lang="zh-TW"` while most use `lang="zh-Hant-TW"`:

- `zh-tw/about.html`
- `zh-tw/privacy.html`
- `zh-tw/disclosure.html`
- `zh-tw/guides/busan-fireworks-festival/index.html`
- `zh-tw/guides/busan-fireworks-festival-fair-price-stays/index.html`

Both forms are recognizable, but the project should standardize the page-level declaration on `zh-Hant-TW`. Keep sitemap hreflang as `zh-TW`, which is the regional alternate used by the site.

### Visible English copy

- `zh-tw/guides/dongnae-hot-spring-half-day/` has English footer labels: “About”, “Disclosure” and “Privacy”.
- `zh-tw/guides/nampo-neighborhood-guide/` explicitly links to the English-only Kkangtong Market Food Guide. This is a real content-coverage gap for Taiwan readers and a high-priority localization candidate.
- Korean dish names, business names, station names and sample Korean phrases are intentionally retained where they help travelers identify places or communicate locally; these should not be mechanically translated away.

### Localized legal links

A repository search finds source-level `href="/about.html"` references in 24 Traditional Chinese files. The build post-processor `scripts/enhance-public-extras.mjs` rewrites About, Disclosure and Privacy paths to the matching locale in the generated public output. Therefore, do not treat all 24 source references as confirmed live broken links. Run the static build and inspect the generated `public/zh-tw/` files to verify the post-processing result.

## Open PR overlap and release risks

The Taiwan translation backlog is partly represented in existing, unmerged work:

- **PR #269** adds multiple Taiwan pages and updates search index/sitemap, but is not mergeable against the current base. Its branch is stale and its search-index coverage must be reconciled before reuse.
- **PR #294** adds the Traditional Chinese Busan map and related index/sitemap changes; it is not mergeable.
- **PR #303** adds Taiwan versions of autumn foliage, Yeongdo, Jeonpo and Busan souvenirs, plus directory/homepage updates. It is not mergeable; the new Taiwan pages also need search-index entries.
- **PR #305** adds the English Sky Capsule sold-out guide but does not include a Taiwan version. It remains draft because it also contains scheduled social-publishing changes. Do not merge without owner review of the publishing safety gate.
- **PR #311** updates Seomyeon, Gaya Park and PNU food guides in EN/JA/Traditional Chinese. It remains draft; the Taiwan PNU page changes from five to seven picks.
- **PR #306** adds four English seasonal/transport guides without matching Taiwan pages. Review these for Taiwan localization before treating them as complete market coverage.

Do not merge or deploy these PRs as a batch. Rebase and reconcile their sitemap, search index, directory links and localized counterparts one at a time. Preserve the social LIVE/publishing approval gates in #305.

## Taiwan-first priority plan

### P0 — Fix discoverability and language integrity
1. Add the six missing Traditional Chinese guide entries to the localized search index, with Taiwan search terms.
2. Add reciprocal hreflang only where a true equivalent page exists; do not pair unrelated pages merely to eliminate warnings.
3. Normalize the five HTML language declarations to `zh-Hant-TW`.
4. Translate the Dongnae footer labels and remove the English-only Kkangtong link from the Taiwan Nampo guide once a proper Taiwan page exists.
5. Build and inspect generated `public/zh-tw/` output to verify localized legal links and language switch targets.

### P1 — Localize high-intent Taiwan travel problems
1. Haeundae Sky Capsule sold-out, overseas-card payment and same-day ticket guide.
2. Kkangtong Market food and shopping/bathhouse guide.
3. Busan local food picks and Haeundae food guide.
4. Visit Busan Pass value and reservation guidance.
5. Busan map and practical neighborhood/transport pages.
6. Family travel, budget, coffee, night views and Gwangalli drone-show guidance.

### P2 — Native Taiwan editorial polish
- Use Taiwan vocabulary consistently: 自由行、預約、訂票、票價、交通卡、機場接駁、住宿區域、行李寄放.
- Add Taiwan-specific query variants to titles, descriptions, search tags and social copy where natural.
- Preserve Korean names and provide Hangul where it helps with maps, taxis and ordering.
- Review prices, transport rules and entry requirements against current official sources before publication.
- Have priority landing pages reviewed by a native Taiwan Traditional Chinese editor before calling the localization complete.

## Acceptance criteria for “Taiwan localization complete”

- Every indexable English guide with Taiwan search value has a true Taiwan counterpart or a documented reason not to translate it.
- Every translated pair has reciprocal canonical/hreflang and sitemap entries.
- Every Taiwan guide appears in the Traditional Chinese directory and localized search index.
- Page titles, descriptions, headings, navigation, buttons, footer, search empty states and structured data are in natural Taiwan Traditional Chinese.
- Korean terms are retained intentionally, not as accidental untranslated copy.
- Static build, sitemap/hreflang audit, language-switch audit, SEO checks and 360px/390px/desktop visual checks pass.
- Production deployment is verified by matching the live version file to the approved merge commit.

## Verification limits

This audit reads the current repository `main` source snapshot. It does not prove that the current production deployment matches this commit, that Google has indexed every URL, or that every translation has been native-reviewed. No PR was merged and no production or social publishing action was performed as part of this audit.


## Follow-up remediation batch — 2026-11-11

The baseline findings above describe the `main` snapshot before the follow-up content branch was merged. The draft [PR #312](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/312) addresses the following:

- Adds three Taiwan Traditional Chinese guides: Haeundae Sky Capsule booking/payment troubleshooting, Bupyeong Kkangtong Market food, and Kkangtong bath/shopping essentials.
- Adds the three pages to the Taiwan guide directory, search index and sitemap, with reciprocal EN/zh-TW alternates.
- Restores all six previously missing Taiwan search-index entries.
- Standardizes five HTML language declarations to `zh-Hant-TW` and localizes the Dongnae/Nampo footer links.
- Replaces the Nampo guide's English-only Kkangtong food link with the Taiwan page and creates the Taiwan bath-shopping page to resolve the remaining market-guide link.
- Adds the existing Taiwan fireworks fair-price-stays page to the sitemap's reciprocal hreflang group.

### Post-remediation source checks

- Taiwan search index: 49 URLs (48 guide pages plus the guide directory), no duplicate Taiwan URLs.
- All six baseline search omissions and all three new Taiwan pages have index entries.
- The five language declarations are standardized; Dongnae and Nampo footer links are localized.
- The sitemap now has 18 English/root guide URLs without a zh-TW hreflang alternate, down from the baseline 22. This is a pairing gap count, not a translation-gap count; check alternate slugs before creating new translations.
- Latest PR #312 CI passed: public build ready; 172 HTML pages scanned; 4,886 local links checked; zero broken local links, zero missing descriptions and zero missing canonicals. There are 76 non-blocking legacy social-image metadata warnings.

No production deployment, merge or social publishing was performed. PR #312 remains a draft pending owner review.


## Second remediation update — 2026-11-11

The follow-up draft [PR #312](https://github.com/xkrrudfbs45-afk/busan-travel-guide/pull/312) has expanded beyond the first remediation batch. It now contains eight new Taiwan guides (Sky Capsule booking, Kkangtong food, Kkangtong bath-shopping, Visit Busan Pass, Busan coffee/MOMOS, Haeundae food, Yeongdo coastal walk and Jeonpo Cafe Street) plus the Busan Map in English, Japanese and Traditional Chinese.

### Current branch coverage

- Traditional Chinese search index: 55 URLs (54 guides plus the guide directory), no duplicates.
- All six baseline search omissions restored.
- Nine newly added Taiwan guide pages, including the map, are indexed and listed in the Traditional Chinese guide directory.
- English/Japanese/Traditional Chinese map hreflang group is reciprocal; the sitemap has no duplicate URLs.
- English/root guide URLs without a Traditional Chinese sitemap alternate: 14 (baseline 22). This is a URL-pairing gap count; some content may exist under alternate localized slugs.
- Five HTML language tags standardized; Dongnae and Nampo footers localized.

### Latest validation

GitHub Actions run [42933070268](https://github.com/xkrrudfbs45-afk/busan-travel-guide/actions/runs/42933070268) passed. Build and public quality audit checked 181 HTML pages. Technical SEO audit checked 5,166 local links with zero broken links, zero missing descriptions and zero missing canonicals. Strict image-credit audit had zero errors; language-switch audit checked 477 links with zero findings. 80 non-blocking SEO warnings remain, mostly older pages missing social preview images.

No merge or production deployment was performed. PR #312 remains a draft pending owner review.
