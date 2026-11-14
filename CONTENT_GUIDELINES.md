# Go2Busan Content and Technical Authoring Rules

These rules apply to human contributors, Claude Code, Codex, and automated content agents. Read before creating or editing pages.

## 1. Check for duplicate topics before creating a URL
- Before proposing a new guide, search `sitemap.xml`, `assets/data/search-index.json`, and existing files under `guides/`, `ja/guides/`, and `zh-tw/guides/`.
- Search by subject, neighborhood, dish, attraction, intent, and alternate spellings—not just the exact proposed slug.
- If an existing page satisfies the same search intent, improve that canonical page and its localized equivalents instead of creating a competing URL.
- Do not create near-duplicate English/Japanese/Traditional Chinese URLs for the same topic. Reuse the established slug across languages (for example, `/guides/example/`, `/ja/guides/example/`, `/zh-tw/guides/example/`).
- If a new page is justified, document what distinct user intent it serves and add reciprocal `hreflang` tags, sitemap entries, search-index entries, and internal links in the same change.

## 2. Mobile-first layout and overflow
- Any HTML table must be wrapped in `<div class="table-wrap">...</div>`. Never place a table directly in article content without this wrapper.
- Prefer lists and short sections over tables when the comparison can be communicated clearly without one.
- Check horizontal overflow at 360px, 390px, and desktop width (at least 1280px). Long URLs, unbroken strings, buttons, footer links, and language controls must wrap or otherwise fit the viewport.
- Never display a raw long URL in prose. Use descriptive anchor text, e.g. `<a href="https://example.com/maps/...">Open the location in Google Maps</a>`.

## 3. SEO and localization
- Each guide needs a unique, accurate title and meta description, one canonical URL, reciprocal language alternates where localized versions exist, and matching `BreadcrumbList` structured data.
- Visible breadcrumbs and JSON-LD breadcrumbs must describe the same hierarchy.
- Localized pages must use natural Japanese or Traditional Chinese (Taiwan), not literal machine-translated phrasing. Localize headings, metadata, search tags, links, and empty states where applicable.
- Add every new guide to `assets/data/search-index.json`, `sitemap.xml`, and an appropriate internal directory or related-guide section. Do not assume a sitemap entry alone creates internal discovery.

## 4. Accuracy and trust
- Prefer official sources for dates, fares, ticketing, transport controls, opening hours, and safety instructions. Link to the exact relevant official page using descriptive text.
- Mark time-sensitive information with an update date and tell readers to verify details before travelling.
- Never invent prices, availability, business affiliations, affiliate URLs, opening hours, or official notices.
- For food, lodging, and event content, give concrete local decision criteria and transparent caveats. Avoid unsupported accusations against individual businesses; explain how to check menus, minimum orders, fees, receipts, and cancellation terms.
- Do not copy another publisher's article. Use source material for verification, then write original guidance with links to primary sources.

### Venue-level verification and first-hand status
For every named restaurant, cafe, hotel, shop, attraction operator, or bookable venue, record the following in the working source notes before publication:
- Exact Korean business / venue name and branch identity; include the localized display name without replacing the Korean name needed for map searches.
- Full address and a direct place pin or exact map destination. A generic map search link is navigation assistance, not proof that the address or business identity was verified.
- Source for business identity and address. Prefer the operator's official channel or an authoritative tourism / government listing; label third-party directory data as such.
- Menu, service, price, opening-hour, queue, booking, payment, minimum-order, and closure claims only when the corresponding source supports them. Record a checked date for each volatile detail.
- First-hand status using one of: `visited by editor`, `visited by contributor`, `not personally visited`, or `not yet confirmed`.
- Verification status using one of: `officially verified`, `cross-checked listing`, `editor-provided local tip`, or `unverified lead`.

A page-level “reviewed” date does not prove that every venue detail was rechecked on that date. Keep the source and checked date in editorial notes, and display a concise caveat to readers when current details cannot be confirmed. Never infer a first-hand visit from a recommendation, local knowledge, or a user's mention of a place. Do not describe an editor-provided tip as a personal visit unless the contributor explicitly confirms it.

For Taiwan Traditional Chinese pages, preserve the Korean venue name for map searches and use natural Taiwan Traditional Chinese explanations. Do not assume that a translated business name is the name shown in Korean map services.

## 5. Required checks before PR
- Confirm the proposed URL and topic do not duplicate an existing guide.
- Validate JSON and JSON-LD, sitemap XML, canonical and hreflang reciprocity, search-index coverage, and internal links.
- Run the repository build and available page-quality, SEO, outbound-link, and JavaScript checks.
- Audit mobile horizontal overflow at 360px and 390px, including every table wrapper and long link.
- Report which checks actually ran and their results. Do not describe a PR as deployed until the production deployment and live commit are verified.
