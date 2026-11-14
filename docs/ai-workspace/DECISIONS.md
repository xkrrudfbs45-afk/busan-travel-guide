## 2026-11-14 — Agoda hotel search affiliate integration

- **Decision:** Use the project-owner-supplied Agoda partner-search URLs (CID 1979955, Busan city 17172) in localized EN, JA, and zh-TW accommodation decision points. Preserve the exact partner CID, city ID, and locale parameter; do not invent property-specific deep links.
- **Rationale:** Add a useful accommodation booking path while keeping recommendations editorially independent and measuring commission-attributable clicks separately from bookings/revenue.
- **Implementation:** Build-time data-driven CTAs on the main Busan accommodation guide, Songjeong/Gijang stay guide, Haeundae neighborhood guide, and Seomyeon neighborhood guide in all three languages. Localized disclosures appear beside each CTA and on the disclosure pages. GA4 uses the existing consent gate and classifies numeric Agoda CID links as affiliate clicks with placement context agoda_stay_search.
- **Condition:** Partner approval and account/site mapping remain owner-managed. Verify Agoda Partner Center approval, actual click attribution, and bookings in the partner dashboard; code-level click tracking does not prove bookings or commission. Do not merge or deploy without owner approval.

# Go2Busan Decision Log

Record material product, editorial, technical, and commercial decisions here. Add newest decisions at the top. Include date, decision, rationale, owner, and any condition for revisiting.

## 2026-11-06 — Establish a shared GitHub AI workspace

- **Decision:** Use `docs/ai-workspace/` in the existing Go2Busan repository as the shared project operating record.
- **Rationale:** Reduce repeated prompt copy/paste and preserve strategy, priorities, status, and handoffs in version control.
- **Owner:** Project owner.
- **Implementation:** Introduce this documentation through a dedicated branch and pull request. Do not merge without owner approval.

## 2026-11-06 — Separate responsibilities

- **Decision:** Project owner is final decision-maker; ChatGPT leads product/growth strategy and review; Claude leads engineering implementation and tests.
- **Rationale:** Clear accountability and fewer conflicting changes.
- **Condition:** All contributors must inspect the latest repository and PR state before acting. No automatic agent-to-agent communication is assumed.

## 2026-11-06 — Growth positioning

- **Decision:** Position Go2Busan as a practical local-led Busan trip-planning platform, not merely a travel blog.
- **Rationale:** Connect discovery, planning, accommodation/activity booking, and repeat use.
- **Condition:** Maintain editorial independence and clearly disclose paid placements.

## 2026-11-06 — Initial market focus

- **Decision:** Prioritize Taiwan Traditional Chinese, then Japanese and English-speaking visitors, while maintaining the existing multilingual site.
- **Rationale:** Project research identifies Taiwan as a high-priority inbound market.
- **Condition:** Revalidate market size and demand with current official data before publishing statistics or materially changing investment allocation.

## 2026-11-06 — Implementation and release safety

- **Decision:** Use focused branches and pull requests; do not merge or deploy without explicit project-owner approval.
- **Rationale:** Protect the live travel site and existing search equity.

## 2026-11-06 — Claude GitHub automation scope

- **Decision:** Claude may be triggered from GitHub only by the repository owner (`@claude` in an issue, comment or PR review). It works on a `claude/` branch and opens a PR; it never merges, pushes to `main` or deploys.
- **Rationale:** Merging to `main` triggers the Render production deploy, so a human approval gate must stay in front of it.
- **Condition:** Main branch protection (PR required, "Technical SEO audit" required) is the enforcement layer; workflow tool limits are a second layer, not a substitute.

## 2026-11-06 — Neighborhood hubs

- **Decision:** Build neighborhood hubs as routing pages that summarize an area and link to the existing detailed guides, instead of new pages that repeat stay, food or airport content.
- **Rationale:** Avoid duplicate search intent with `where-to-stay-busan`, the food guides and the airport guides.
- **Condition:** Start with Haeundae and Seomyeon (EN). Add Nampo and Gwangalli, and JA/TW versions, after the first two are reviewed.

## 2026-11-13 — GA4: commission-attributable vs plain partner clicks

- **Decision:** `affiliate_click` now fires only for links that can earn a commission: the Klook affiliate redirect (`affiliate.klook.com/redirect` with numeric `aid` and `aff_adid`, or a `klook.com` URL with numeric `aid`) and Agoda URLs with a numeric `cid`. Other klook.com / agoda.com links (today: the homepage `agoda.com/city/busan-kr.html` link, which has no partner ID) send `partner_outbound_click` with the same parameters (`affiliate_partner`, `affiliate_placement_context`, `link_url`, `link_text`, `page_location`). `affiliate_cta_view` counts attributable links only.
- **Rationale:** Affiliate-click totals and click-through rates should only include clicks that the partner dashboards can attribute. Clicks are still not bookings or commission.
- **Unchanged:** consent gate (no events before "Allow analytics"), measurement ID, Klook aid/aff_adid values, existing `affiliate_click` parameters. Data before 2026-11-13 includes the homepage Agoda link in `affiliate_click` (agoda partner rows).
