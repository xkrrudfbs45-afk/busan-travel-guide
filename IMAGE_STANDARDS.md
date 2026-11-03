# Go2Busan Editorial Image Standards

These rules apply to every new and existing article, homepage card, social preview, and localized guide.

## Core rule
Choose the image for the exact subject of the page, not merely a generic image that looks attractive. A reader should be able to understand why the image belongs with the headline. The host is not the deciding factor: Unsplash, Wikimedia Commons, official tourism archives, and other sources are all acceptable when the specific image matches the topic and its reuse terms and attribution are correct. Do not remove a good, relevant photo just because it is externally hosted.

## Image selection checklist
- **Place-specific pages:** Prefer a real image of the named Busan place or attraction. Songdo Beach must show Songdo; Songjeong/Gijang pages should not default to Haeundae or LCT; Haeundae Sky Capsule pages should show the Sky Capsule or Blueline Park.
- **Food pages:** Show the dish or market actually discussed. Dwaeji-gukbap pages should show pork soup; milmyeon pages should show milmyeon; Jagalchi Market pages should show the market or seafood stalls, not a generic plated shrimp/steak photo.
- **Transport pages:** Use the relevant station, rail line, airport, ticket/card, or transport mode. Avoid unrelated city skylines.
- **Weather pages:** Use an image that clearly communicates the weather or indoor activity.
- **Avoid repetition:** Do not reuse one Haeundae/LCT photo across unrelated guides or repeat one food photo across unrelated dishes. Reuse an image only when it is genuinely relevant and the repetition serves the page.
- **No false implication:** Illustrations must be identified as illustrations; do not present AI-generated or generic stock imagery as a real photograph of a named place or restaurant.
- **Homepage cards:** Every card must use a subject-matched image. Do not inherit a default background that silently makes unrelated cards show the same photo.

## Image rights and attribution
- Prefer original Go2Busan artwork, appropriately licensed Wikimedia Commons photos, official tourism-archive assets whose reuse terms are clear, or stock images with clear commercial-use permission.
- Before using a third-party image, check its source, license, attribution requirements, and any share-alike obligations. Keep a source link and visible credit where the license requires it.
- Do not copy images from Naver blogs, Instagram, booking sites, or other publishers simply because they appear in search results.
- Do not remove required photographer names, license links, or credit captions.
- If licensing or the actual subject cannot be verified, choose another image rather than guessing.

## Required implementation for each article
1. Add a topic-matched cover image near the article hero.
2. Write descriptive alt text that identifies the real subject; do not stuff keywords.
3. Set `og:image` and `twitter:image` to the correct cover image, and keep `og:image:alt` accurate.
4. Add a visible caption/credit when the source license requires it.
5. Check the rendered crop on desktop and mobile. Avoid cutting off the main subject.
6. Verify that the image URL resolves and that it is not a duplicate of unrelated articles.
7. Keep the image source and license information available in the code review notes.

## Editorial labels
- Use **LOCAL PICK** only for a clearly identified local restaurant, shop, experience, or editorial recommendation with a short reason for recommending it.
- Use **LOCAL FAVORITES** for reader/local-vote roundups and **PRACTICAL GUIDE** or **OFFICIAL INFO** for factual service pages.
- Do not label every general information article as a Local Pick. The label is a trust signal, not decoration.


## Mascot and product-themed artwork
- Use the friendly blue Bukangi mascot illustration for the North Port shark story and general Busan Now identity.
- For content specifically about the Bukangi-themed Daesun soju edition, use the dedicated bottle-themed editorial illustration rather than the generic shark-and-waterfront image.
- Never imply an editorial illustration is a photograph of the actual shark, a real sighting, or the exact retail bottle. Keep that distinction in localized alt text and visible captions.
- Keep article cover, Open Graph image, Twitter image, and Article structured-data image aligned to the same subject. Add `twitter:image:alt` when a social image is provided.
- Above-the-fold article covers should include intrinsic `width` and `height`, use eager loading with high fetch priority when they are the lead visual, and use lazy loading for lower-page or secondary images.
- SVG social previews may not render on every platform. Prefer a topic-matched raster export when available; never fall back to an unrelated image just to get a raster preview.
