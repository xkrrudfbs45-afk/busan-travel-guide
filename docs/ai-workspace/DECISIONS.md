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
