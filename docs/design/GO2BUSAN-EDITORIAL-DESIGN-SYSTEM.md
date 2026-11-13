# Go2Busan Editorial Design System — Phase 1

Date: 2026-11-13  
Status: Draft for visual review  
Scope: Shared non-homepage guide, article, and directory presentation

## Design position

Go2Busan should feel like an independent city guide with the editorial confidence of a premium restaurant guide, the findability of a large travel platform, and the specificity of a locally written city magazine. The references are directional only; no third-party layouts, copy, marks, or assets are reproduced.

## Visual language

- Palette: deep maritime ink (#10243A), restrained ocean blue (#1769AA), warm near-white paper (#F7F8F6), quiet slate typography, and a small coral accent (#D96F5B).
- Typography: editorial serif display headlines paired with a highly legible system sans-serif for navigation, metadata, tables, and body copy. System fallbacks preserve readability across English, Japanese, and Traditional Chinese.
- Composition: generous whitespace, fine rules, controlled content widths, restrained shadows, low-radius cards, and clear typographic hierarchy. Avoid excessive pills, gradients, decorative icons, and generic dashboard styling.
- Photography: large, contextual, correctly credited photography; never use generated imagery as documentary proof of a real venue. Image crop, alt text, source/license, and loading behavior remain part of acceptance.

## Page patterns implemented in Phase 1

1. Guide/article header: readable breadcrumbs, small editorial eyebrow, large serif H1, explanatory deck, and compact factual metadata.
2. Article reading layout: narrower reading column, generous line-height, section rules, clearer H2/H3 hierarchy, styled quick-answer callouts, legible lists and tables.
3. Contents rail: refined contents panel on desktop; moves above the article on tablet/mobile for accessible navigation.
4. Guide directory: category jump links, editorial category panels, clearer link rhythm, subtle hover feedback, single-column mobile layout.
5. Shared shell: refined header, navigation, language controls, paper background and consistent widths across non-home pages.

## Homepage relationship

The existing homepage editorial refresh remains intact and continues to use its dedicated homepage-editorial.css. Phase 1 deliberately scopes the new global rules to body:not(.home-refresh) to avoid overriding that work.

## Next design phases

- Phase 2 — Home: refine the current homepage hierarchy and image-led story modules against the same tokens without undoing the approved hero.
- Phase 3 — Food and place profiles: dedicated restaurant cards and detail modules for cuisine, signature dishes, price range, location, opening-hours verification, local/editorial note, and map/route.
- Phase 4 — Discovery and conversion: neighborhood landing pages, transport decision modules, related guides, context-sensitive booking links, and consistent source/update notes.
- Phase 5 — Localization and QA: EN/JA/zh-TW visual review, 360/390/768/1280 widths, keyboard/focus, contrast, reduced motion, image loading, and SEO/structured-data regression checks.

## Guardrails

Preserve all existing URLs, canonical tags, hreflang, metadata, JSON-LD, page content, attribution, affiliate destinations, consent behavior, and analytics event semantics. No production deployment or social publishing is included in this draft.
