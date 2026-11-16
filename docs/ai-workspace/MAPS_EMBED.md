# Busan map: Google Maps Embed setup

Page: `/guides/busan-map/` (issue #273). Source: `guides/busan-map/index.html`, `assets/js/busan-map.js`, `scripts/inject-maps-key.mjs`.
Japanese and Traditional Chinese versions: `/ja/guides/busan-map/` and `/zh-tw/guides/busan-map/`. All three pages use the single canonical `P` dataset in `scripts/generate-busan-map.py`; that command invokes the localized generator automatically.

## What it does

- Lists curated places that already appear in Go2Busan guides, with area and type filters.
- Each place has "Open in Google Maps", "Directions" (Google Maps URL, no Directions API) and a link to the guide section.
- The interactive map is an iframe from the **Maps Embed API** (`/maps/embed/v1/view` and `/place`). It loads only after the visitor clicks "Show the interactive map".
- No Maps JavaScript, Places or Directions API calls.
- The Embed API cannot draw custom multi-marker maps. The map shows one selected place at a time; the list is the curated layer.
- Without a key the page still works: the list, filters and Google Maps links remain, and the map panel says the interactive map is unavailable.

## Owner setup (one time)

1. Google Cloud Console → create or choose a project → link a billing account. Google requires one; Maps Embed API usage is listed as no charge.
2. APIs & Services → Library → enable **Maps Embed API** only.
3. Credentials → Create API key → Edit:
   - Application restriction: **Websites**. Add `https://go2busan.com/*` and `https://www.go2busan.com/*` (add a preview host only if you use one).
   - API restriction: **Restrict key** → **Maps Embed API** only.
4. Render → busan-travel-guide → Environment → add `GOOGLE_MAPS_EMBED_KEY` = the key. Do not commit the key to the repo.
5. Redeploy (the next main deploy picks it up). The build log prints `inject-maps-key: key injected into 3 map page(s)`.

The key ends up in the public page HTML by design (an iframe URL always contains it). The referrer and API restrictions are what protect it.

## Adding places

Add a row to the `P` list in `scripts/generate-busan-map.py`, add one localized description to each `LANGS['ja']['why']` and `LANGS['zh-tw']['why']` list in `scripts/generate-busan-map-i18n.py`, then run only `python3 scripts/generate-busan-map.py` from the repo root. The command generates EN, JA and zh-TW pages from the same place IDs:

- Only places already covered in a published guide. Link the exact guide section.
- Use the same Google Maps query that the guide uses.
- "Local pick" only where the guide itself says a Busan-based contributor recommends it. Otherwise "In our guide".
- No hours, prices, coordinates or visit claims that the guide does not already source.
- Keep both localized description arrays exactly the same length as `P`; the generator asserts this. Localized guide mappings are resolved from the source path before its `#section` fragment. Locale-specific anchor aliases are checked against the actual JA/zh-TW section IDs; the Dongnae half-day guide exposes stable anchors for Hurshimchung, Dongnae Eupseong and food. Where a locale has no matching section, the localized link opens the guide root rather than a dead fragment. If a locale has no equivalent guide, it links to the English guide and labels it accordingly. CI runs the one-command generator twice and checks that the three generated pages produce no diff.

## GA4 events (new, optional, consent-gated through `gtag`)

- `map_load` (`map_source`)
- `map_place_select` (`place_name`, `place_area`)
- `map_directions_click` (`place_name`, `place_area`)

Existing `affiliate_click` and other events are unchanged.


JA and zh-TW currently share the same localized map CSS. The localized generator keeps this in `STYLE_JA_TW`; update that constant and both localized pages together when changing their visual design. EN uses its separate CSS template in `scripts/generate-busan-map.py`.


Generated HTML formatting is intentional: EN keeps its current CSS and card spacing; JA/zh-TW share the existing localized CSS block. Avoid hand-formatting generated map pages; the two-pass CI check enforces idempotence.
