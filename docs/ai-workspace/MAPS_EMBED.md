# Busan map: Google Maps Embed setup

Page: `/guides/busan-map/` (issue #273). Source: `guides/busan-map/index.html`, `assets/js/busan-map.js`, `scripts/inject-maps-key.mjs`.

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
5. Redeploy (the next main deploy picks it up). The build log prints `inject-maps-key: key injected into the map page`.

The key ends up in the public page HTML by design (an iframe URL always contains it). The referrer and API restrictions are what protect it.

## Adding places

Add a row to the `P` list in `scripts/generate-busan-map.py`, then run `python3 scripts/generate-busan-map.py` from the repo root:

- Only places already covered in a published guide. Link the exact guide section.
- Use the same Google Maps query that the guide uses.
- "Local pick" only where the guide itself says a Busan-based contributor recommends it. Otherwise "In our guide".
- No hours, prices, coordinates or visit claims that the guide does not already source.

## GA4 events (new, optional, consent-gated through `gtag`)

- `map_load` (`map_source`)
- `map_place_select` (`place_name`, `place_area`)
- `map_directions_click` (`place_name`, `place_area`)

Existing `affiliate_click` and other events are unchanged.
