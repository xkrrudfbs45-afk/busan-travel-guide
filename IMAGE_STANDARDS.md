# Go2Busan Editorial Image Standards

These rules apply to every new and existing article, homepage card, social preview, thumbnail, and localized guide.

## Non-negotiable rule: subject accuracy

Select images for the exact subject of the page, not merely for visual appeal. A reader should immediately understand why the image belongs with the headline.

- Food pages must show the actual dish or the specific market/food context discussed. Do not use generic stew, meat, salad, pizza, seafood, or drink images as substitutes for nakgopsae, milmyeon, eomuk, makgeolli, temple food, or another named dish.
- Place-specific pages must show the named Busan place or attraction. Songdo must show Songdo; Songjeong/Gijang must not default to Haeundae/LCT; a Haeundae Sky Capsule guide must show the Sky Capsule or Blueline Park.
- Hotel pages must distinguish hotel exterior, lobby, room interior, and actual ocean-view room. A beach panorama is not proof of a room view. Do not depict generic accommodation photography as a named hotel.
- Transport pages must use the relevant station, rail line, airport, ticket/card, or transport mode.
- Never reuse one photo across unrelated cards just to fill space.
- Illustrations must be identified as illustrations. Never present AI-generated or generic illustrative imagery as a real photograph of a named place, restaurant, hotel, or room.

## Approved image sources

For third-party photographs, use only:
1. Korea Open Government License (KOGL) Types 1–4, after checking the exact asset's current terms.
2. Wikimedia Commons files whose individual file page verifies CC BY, CC BY-SA, or Public Domain status and permits the intended commercial use.

Do not use Unsplash, Pixabay, booking-site images, Naver blog images, Instagram images, publisher images, or other stock/source libraries unless the site owner explicitly changes this policy in writing. Search result snippets and image thumbnails are not proof of permission.

KOGL Type 3 and Type 4 assets may carry restrictions on commercial use and/or modifications. Because Go2Busan is a commercial-facing travel website, verify the exact type and conditions before using an asset. If the asset is not clearly suitable for commercial use, do not use it.

For Wikimedia Commons, verify the individual file page, author/creator, exact license, license URL, and any ShareAlike requirements. Public Domain status must be grounded in the file page and must not be assumed from the image's age or appearance.

## Required metadata for every third-party image

Record these fields in the page source, an image manifest, or review notes:
- page/article using the image
- displayed image URL and original file page URL
- what the image actually depicts
- creator/photographer or issuing institution
- exact license/type and link to the license terms
- whether commercial use is allowed
- whether the image was cropped, edited, or otherwise modified
- exact English attribution/caption
- review status: VERIFIED, NEEDS REVIEW, or DO NOT USE

Never mark an image VERIFIED when the source, depicted subject, or license is uncertain.

## Attribution

Use accurate values from the original file page. Examples below are templates, not ready-to-publish credits:

- `Photo: [Verified Author] / Wikimedia Commons · CC BY 4.0`
- `Photo: [Verified Author] / Wikimedia Commons · CC BY-SA 4.0`
- `Photo: [Verified Institution] · KOGL Type 1`

Where practical, link both the original file page and the exact license terms. Follow the license's requirements for creator name, license link, modification notice, and ShareAlike terms. Do not invent an author or institution credit.

## If no suitable free photograph exists

Do not force an unrelated photo into the page. Use one of:
- a clean text-led thumbnail
- an original vector illustration
- a simple map or location diagram
- ingredient icons or an editorial comparison graphic
- a lodging comparison card based on verified location/room facts

Make the illustration/diagram status clear when a reader could otherwise mistake it for a photograph. Avoid photorealistic synthetic imagery that could be mistaken for a real business or room.

## Required implementation for each article

1. Use a topic-matched cover image or an intentional text/vector alternative.
2. Write descriptive alt text that accurately identifies the visible subject; do not stuff keywords.
3. Set `og:image` and `twitter:image` to the correct subject-matched cover or intentional graphic; keep image alt text accurate.
4. Add a visible attribution caption when required by the license and keep required creator/license links.
5. Check the crop at desktop and mobile sizes; do not crop out the defining subject.
6. Verify the displayed URL resolves and is the intended asset.
7. Confirm the same image is not being reused on unrelated topics.
8. Keep source/license metadata in the repository or code-review notes.

## Review labels

- Use **LOCAL PICK** only for a clearly identified local restaurant, shop, experience, or editorial recommendation with a short reason.
- Use **LOCAL FAVORITES** for reader/local-vote roundups and **PRACTICAL GUIDE** or **OFFICIAL INFO** for factual service pages.
- Labels are trust signals, not decoration.
