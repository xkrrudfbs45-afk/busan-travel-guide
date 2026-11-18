## 2026-11-18 — Add a controlled mainland-China market pilot

- **Decision:** Add mainland China as a separate Simplified Chinese (zh-CN) pilot market alongside the Taiwan Traditional Chinese (zh-TW) programme. Taiwan remains the first established growth market; mainland China is now an active expansion track, not a replacement.
- **Audience:** Independent Busan travellers, with younger adults and 20–40s visitors as an important creative focus. Keep the site broadly useful and do not turn the whole product into a niche or age-specific service.
- **Localization:** Use mainland Simplified Chinese, search intent and travel terminology. Do not convert zh-TW pages mechanically or treat Traditional and Simplified Chinese as interchangeable.
- **Search:** Prioritize mainland crawl/access testing and Baidu Search Resource Platform readiness. Treat Bing as a secondary channel. Google is not a dependable default for users on ordinary mainland networks. Do not claim Baidu inclusion or rankings until platform data confirms them.
- **Social:** Xiaohongshu is the first content-discovery experiment; Douyin and WeChat are subsequent channels. Draft content first; no account creation, paid campaigns, or publishing without owner approval.
- **Technical guardrails:** Start on the existing domain under /zh-cn/. Do not move hosting to mainland China, seek an ICP filing, change DNS, or introduce mainland-specific third-party scripts without a separate feasibility review and explicit approval. Add reciprocal hreflang="zh-CN" only when a corresponding page is fully localized and reviewed.
- **Pilot scope:** Begin with the localized homepage and 5–8 high-intent guides: first trip, airport-to-city, transport/payment, where to stay, local food, three-day itinerary, map/essential apps, and one seasonal guide where facts are current. Prioritize quality over volume.
- **Measurement:** Establish a baseline for mainland accessibility, Baidu indexation, referral traffic, engagement and conversion before scaling. Market-share snapshots from third-party trackers are directional only and must not be presented as official Chinese government statistics.
- **Release:** Implement on a dedicated branch and Draft PR. No merge, deployment, account verification, external submission, social publishing, paid activation, or hosting change without explicit project-owner approval.

## 2026-11-18 — Monetize existing high-impression pages before expanding content

- **Decision:** Follow the owner direction in issue #530: prioritize conversion improvements on pages already receiving search impressions, keep Taiwan Traditional Chinese first, and slow new-page production to a small number of evidence-led exceptions.
- **Placement rule:** Use one contextual booking CTA at a genuine decision point; do not force a partner link onto a page when no bookable product matches the visitor's intent.
- **Verified implementation:** PR #532 added the Gamcheon Culture Village hanbok-rental Klook CTA (activity 44779; existing aid 141680 / aff_adid 1539686) to the EN / JA / zh-TW BTS route guides, and Agoda hotel-search CTAs to the three Haeundae food guides using the owner-supplied CID 1979955, Busan city ID 17172 and locale parameters.
- **Trust correction:** All 18 neighborhood-specific Agoda CTAs in EN / JA / zh-TW use the same Busan city-level search URL and contain no neighborhood or property parameter. Their localized copy must disclose the city-wide scope and tell visitors to set their intended neighborhood as the destination before comparing; preserve the existing CID, city ID and locale parameters rather than inventing a deep link. The three general Busan-wide stay-guide CTAs remain unchanged.
- **No forced CTA:** Keep the zh-TW Pusan National University food guide without an affiliate CTA until a bookable product genuinely serves that neighborhood's food intent.
- **Measurement:** `affiliate_click` is an attributed outbound click, not a booking or commission. Partner dashboard access and completed-booking reporting remain owner-side follow-ups in #530.
- **Release:** Content/config changes remain in a Draft PR. No merge, production deployment, partner-parameter change, analytics/consent change or SNS publication without owner approval.

## 2026-11-15 — GoodDay Unse promotion priority revision

- **Decision:** Promote Korean Saju and 2027 New Year fortune as the card's primary experience; remove tarot from the six Go2Busan cards.
- **Order:** 2027 New Year fortune first and visually emphasized; Saju second. EN/JA use the birth-date Saju-based Korean-name experience until dedicated localized Saju pages exist. zh-TW uses its dedicated K-Saju page.
- **Tracking:** Separate link types with `utm_content=<page-slug>-2027` and `<page-slug>-saju`, retaining source, medium and campaign values.
- **Presentation:** Preserve six contextual placements and article-end position; enlarge small typography for mobile readability.
- **Release:** Keep PR #471 Draft pending Claude's destination, CI, SEO and four-width visual QA; owner approval required before merge/deploy.
- **Follow-up:** Propose dedicated `/en/k-saju/` and `/ja/k-saju/` pages in the GoodDay Unse repository. Switch the EN/JA card Saju destinations after those pages are published and verified.

## 2026-11-15 — Contextual GoodDay Unse cross-promotion (issue #470)

- **Decision:** Test GoodDay Unse as a contextual Korean-culture recommendation on existing Go2Busan culture-related guides, not as a global navigation item or site merge.
- **Placements:** Two pages per language (EN, JA, zh-TW). Use only pages whose subject naturally supports a Korean tarot, Korean-name or K-Saju experience. The JA site lacks exact local-culture/dialect slug counterparts, so use its existing food-stories and food-etiquette guides.
- **Tracking:** Use `utm_source=go2busan&utm_medium=referral&utm_campaign=kculture_card&utm_content=<page-slug>` on each outbound destination. No affiliate or paid-product claim.
- **Design:** Compact, visually secondary editorial card; mobile-first stacked links; no header/footer/homepage-wide placement.
- **Release condition:** Keep Draft until build, all required audits, destination HTTP checks and responsive browser QA pass. Owner approval required before merge/deploy.

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
