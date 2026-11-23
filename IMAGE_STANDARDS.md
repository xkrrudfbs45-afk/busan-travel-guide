# Go2Busan Editorial Image Standards

These rules apply to every new and existing article, homepage card, social preview, and localized guide.

## Core rule
Choose the image for the exact subject of the page, not merely a generic image that looks attractive. A reader should be able to understand why the image belongs with the headline.

## Image selection checklist
- **Place-specific pages:** Prefer a real image of the named Busan place or attraction. Songdo Beach must show Songdo; Songjeong/Gijang pages should not default to Haeundae or LCT; Haeundae Sky Capsule pages should show the Sky Capsule or Blueline Park.
- **Food pages:** Show the dish or market actually discussed. Dwaeji-gukbap pages should show pork soup; milmyeon pages should show milmyeon; Jagalchi Market pages should show the market or seafood stalls, not a generic plated shrimp/steak photo.
- **Transport pages:** Use the relevant station, rail line, airport, ticket/card, or transport mode. Avoid unrelated city skylines.
- **Weather pages:** Use an image that clearly communicates the weather or indoor activity.
- **Avoid repetition:** Do not reuse one Haeundae/LCT photo across unrelated guides. Reuse an image only when it is genuinely relevant and the repetition serves the page.
- **No false implication:** Illustrations must be identified as illustrations; do not present AI-generated or generic stock imagery as a real photograph of a named place or restaurant.
- **Homepage cards:** Every card must use a subject-matched image. Do not inherit a default background that silently makes unrelated cards show the same photo.

## Image rights and attribution
- Prefer original Go2Busan artwork, appropriately licensed Wikimedia Commons photos, official tourism-archive assets whose reuse terms are clear, or stock images with clear commercial-use permission.
- For Busan Tourism Archive assets, verify the item-specific record allows commercial reuse (for example, KOGL Type 1) and record the creator, publisher, production year and exact license. Do not assume every archive item has identical terms.
- Before using a third-party image, check its source, license, attribution requirements, and any share-alike obligations. Keep a source link and visible credit where the license requires it.
- Do not copy images from Naver blogs, Instagram, booking sites, or other publishers simply because they appear in search results.
- Do not remove required photographer names, license links, or credit captions.
- If licensing or the actual subject cannot be verified, choose another image rather than guessing.

## Required implementation for each article
1. Add a topic-matched cover image near the article hero.
2. Add a purposeful in-article photo sequence, normally 2–4 supporting images for standard guides. Use more only when each image explains a different place, step, dish, route or seasonal detail.
3. Match the layout to the story: one wide 16:9 image for a key scene, a 2-up 4:3 pair for comparison, or a lead image plus two supporting images for a visual editorial grid. Avoid repeating the same image in hero and body unless the crop and editorial purpose differ.
4. Write descriptive alt text that identifies the real subject; do not stuff keywords.
5. Set `og:image` and `twitter:image` to the correct cover image, and keep `og:image:alt` accurate.
6. Add a visible caption/credit when the source license requires it; identify archival or illustrative imagery honestly.
7. Check rendered crops at 360px, 390px and desktop. Keep the subject visible, avoid horizontal overflow, and ensure captions remain readable.
8. Verify image URLs resolve, dimensions are suitable, loading is lazy below the fold, and the same image is not repeated across unrelated articles.
9. Keep image source, license and subject-match rationale available in the code review notes.

## Editorial image density by article type
- Neighborhood / attraction / day trip: 4–7 images where verified, including a cover, one context/location view, and 1–3 detail or route views.
- Food / market / restaurant culture: 4–6 images where verified, including the relevant dish, market or street context. Never imply an illustrative dish photo belongs to a named restaurant.
- Transport / how-to / ticketing: 3–5 images, prioritizing the actual station, vehicle, machine, sign or step being explained.
- Itinerary / comparison: 4–7 images, with each image tied to a stop or decision point.
- Event / seasonal: 4–6 images; clearly label archival imagery and never imply an old image shows the current installation.
- Short utility / FAQ pages: 2–3 images only when they materially improve understanding.

These are editorial targets, not quotas. If only one or two properly licensed and accurately matched images exist, use fewer and explain the limitation rather than padding with unrelated or generic imagery.

## Editorial labels
- Use **LOCAL PICK** only for a clearly identified local restaurant, shop, experience, or editorial recommendation with a short reason for recommending it.
- Use **LOCAL FAVORITES** for reader/local-vote roundups and **PRACTICAL GUIDE** or **OFFICIAL INFO** for factual service pages.
- Do not label every general information article as a Local Pick. The label is a trust signal, not decoration.

## Image registry
- Every third-party photo used on the site is listed in `assets/data/image-credits.json` with source URL, author, license, license link, commercial-use flag, checked date and status (`verified`, `needs_review`, `do_not_use`). The audit recognizes direct `visitbusan.net/archive/upload/` image URLs and official Busan Tourism Archive files under `/assets/images/events/`. Verified archive images must carry an item-specific `official_busantourism_archive` registry record, commercial-use permission (KOGL Type 1 or another explicitly permitted license), and a visible caption naming the credited creator or archive plus the license. Extend the audit pattern before introducing other third-party image hosts.
- Supported verified source types include `wikimedia` and item-specific `official_busantourism_archive` records with clear commercial-use terms. Unsplash images remain unapproved without owner sign-off.
- `node scripts/image-credit-audit.mjs` runs in CI. It fails on unregistered images, incomplete `verified` entries, missing visible credits on article and homepage cards, and (with `--strict`) `do_not_use` images still in use. It also checks local official-archive assets in seasonal-event cards.
- Add the registry entry in the same change that introduces a new image.

