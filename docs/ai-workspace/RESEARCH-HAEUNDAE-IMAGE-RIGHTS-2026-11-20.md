# Haeundae image-rights cleanup — 2026-11-20

## Finding

- [Wikimedia Commons: Haeundae District and Beach.jpg](https://commons.wikimedia.org/wiki/File:Haeundae_District_and_Beach.jpg) is marked CC BY-SA 4.0, but its file page carries an explicit South Korea copyright warning for architectural / artistic works photographed from public space. The page explains that the Article 35 freedom-of-panorama exception is non-commercial only and that substantial reproduction of a protected architectural work may not qualify for a free license.
- The repository's `assets/data/image-credits.json` incorrectly still marked this file `status=verified` and `commercial_use=true`, despite `docs/ai-workspace/LOCAL-RESEARCH-2026-11-15-FAMILY-TRAVEL.md` already recording that the candidate had been rejected.
- A repository search found active page / build references in the EN where-to-stay guide, EN / JA / zh-TW Haeundae neighborhood guides, zh-TW family guide, the JA / zh-TW where-to-stay cover manifest, and the localized neighborhood generator. This was a real rights-record inconsistency, not just an unused registry warning.

## Rights-cleared replacement

- [Wikimedia Commons: Haeundae Busan South Korea 01.jpg](https://commons.wikimedia.org/wiki/File:Haeundae_Busan_South_Korea_01.jpg), author Hankook12, photographed 2024-02-09, 1,931 × 1,600 px, CC0 1.0.
- Commons file page rechecked 2026-11-20: commercial reuse is explicitly permitted and no South Korea panorama warning is shown.
- The photo is used only as a general Haeundae beach / coastal skyline scene. It is not described as a hotel-room view, child facility or a photo of a named business.

## Change set on this branch

- `assets/data/image-credits.json`: mark `Haeundae_District_and_Beach.jpg` as `do_not_use`, `commercial_use=false`, checked 2026-11-20, with the Commons warning recorded. Recheck and refresh the CC0 replacement's metadata on the same date.
- `content/images/cover-photos.json`: remove the rejected file's dimensions and active page references; move the JA / zh-TW where-to-stay covers to the CC0 replacement with `og=true`; add a zh-TW family-guide cover entry matching the existing JA family guide.
- `scripts/generate-neighborhood-hubs-i18n.py`: switch Haeundae's generated JA / zh-TW hub image and credit to the CC0 file; emit the correct 1,931 × 1,600 intrinsic dimensions instead of the old generic 1,600 × 1,067 ratio.
- Update the EN where-to-stay page, EN / JA / zh-TW Haeundae neighborhood pages and zh-TW family page to remove active references to the rejected image. The EN where-to-stay hero is no longer lazy-loaded and now has intrinsic dimensions plus high fetch priority; its lower Pinterest card remains lazy with dimensions.
- Keep the old Commons record as `do_not_use` for audit history rather than silently deleting the rights warning.

## Image context and reuse

- The replacement is intentionally reused across Haeundae-specific pages and family / accommodation guides where a general beach scene is contextually relevant. Captions clarify that it is a coastal scene, not a room view or child-facility photograph.
- The replacement's ratio is 1.207:1. The source / generated hero dimensions now match 1,931 × 1,600; the shared cover pipeline provides responsive 640 / 1,000 / 1,600 px variants for manifest-driven pages.
- No image was generated or copied from a competitor. The original photographer and license information remain linked where visible attribution is used.

## Validation and remaining QA

- Source-level search of the affected files shows the old image URL removed from active HTML, generator and cover manifest; the old file remains only in the do-not-use rights record and historical research note.
- The exact-head GitHub build and strict image-credit audit must pass before review. Any warning for the now-unused do-not-use record should be assessed separately from active-image errors.
- Real-browser crop review at 360 / 390 / 1280 px was not performed. No claim is made about final mobile crop, LCP, CLS or visual appearance until that review is completed.
- Draft only: no merge or production deployment.
