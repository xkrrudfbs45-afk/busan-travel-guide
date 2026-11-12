# Threads 30-day calendar — changelog

Record every replacement, cancellation or cadence change here (date, post id, old → new, approved by).
Published copy is never edited retroactively.

- 2026-11-03 — Launch date set to 2026-11-04 (Day 1, local date per account). Approved by Tak in chat: all 60 JP posts and 56 US posts.
- 2026-11-03 — Held as draft (not published, slots left empty): d15-us-2, d18-us-2, d19-us-1, d28-us-1 ("the best" wording). Owner decision.
- Note: a separate post from the older calendar is scheduled natively in the Threads app on @go2busan.jp for 2026-11-04 08:00 JST (kept by owner's decision; outside this pipeline).
- 2026-11-04 — Added first-reply guide links (owner request): JP 10 posts → /ja/ guides, US 12 posts → English guides, UTM `threads30_jp|us` + `dayNN`. Post copy unchanged. Mapping in `scripts/threads/link-replies.mjs`.
- 2026-11-04 — Replaced three scheduled posts with the Busan Fireworks Festival (Nov 7, 2026) post and pulled them forward to publish immediately (owner request in chat; date confirmed on the Ministry of Culture festival page). Each gets a first reply linking to the localized fireworks guide (UTM `threads30_<market>`, content `fireworks`). Originals are kept in each post's `replacement.original_text`; none of them had been published.
  - JP d02-jp-1 (was 2026-11-05 08:00 JST, planning tip) → fireworks, now
  - US d01-us-2 (was 2026-11-04 18:00 ET, "top three must-dos") → fireworks, now
  - TW d01-tw-1 (was 2026-11-05 08:00 Taipei, first-trip tip + first-trip link) → fireworks, now; this also moves the TW account's first post forward to tonight
- 2026-11-12 — Replaced 75 not-yet-published posts (Nov 13–26 local dates) with the 15-day campaign copy from `content/social/threads-15day/nov12-26-drafts.json`, per the replacement plan in PR #348; owner approved in chat. Same ids, slots and UTC times; no posts added, so nothing stacks. 15 existing posts kept unchanged (d09-us-1/2, d09-jp-1/2, d08-tw-1/2, d13-us-1, d13-jp-1, d12-tw-1, d20-us-1, d20-jp-1, d19-tw-1, d20-tw-1, d22-us-1, d22-jp-1). Each replaced post stores its previous copy and link in `replacement.original_text` / `original_link_reply` (and `previous_replacement` for d15-us-2, d18-us-2, d19-us-1). Copy reviewed by Claude: evergreen, no prices, hours, dates or superlatives. Link replies use UTM `nov12_26_<market>`.
