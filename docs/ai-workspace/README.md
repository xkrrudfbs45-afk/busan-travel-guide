# Go2Busan AI Collaboration Workspace

This directory is the shared operating record for the Go2Busan product, content, growth, and engineering work.

## Purpose

Reduce repeated copy-and-paste handoffs. Keep strategy, priorities, decisions, and current work in version control so the project owner, ChatGPT, and Claude can work from the same documented context.

## Roles

- **Project owner:** final decision-maker; supplies local knowledge, original photos, and approval for major product, merge, and deployment decisions.
- **ChatGPT:** product management, growth strategy, SEO/content priorities, monetization design, acceptance criteria, and PR review.
- **Claude:** repository inspection, implementation, tests, technical documentation, and PR preparation.

These agents do not communicate with each other automatically. Each must read the latest workspace files and relevant PR/issue history before acting.

## Working rules

1. Read this directory before starting project work.
2. Treat `STRATEGY.md` as the current product direction, `BACKLOG.md` as the prioritized work queue, and `STATUS.md` as the current state.
3. Record material decisions in `DECISIONS.md`; do not silently change agreed product direction.
4. Use `HANDOFF.md` to leave a concise, actionable handoff for the next contributor.
5. Implement changes on a dedicated branch and submit a focused pull request.
6. Do not merge to `main`, deploy, or make irreversible external changes without explicit project-owner approval.
7. Before editing, inspect the current repository and open PRs. Do not duplicate work already implemented.
8. Preserve existing URLs and search equity unless a migration is explicitly planned and tested.
9. Mobile-first: verify at 360px and 390px as well as desktop.
10. Never invent opening hours, prices, schedules, firsthand visits, ratings, or partner commission terms. Verify time-sensitive facts and cite authoritative sources in content.
11. Distinguish firsthand recommendations from hearsay or third-party recommendations.
12. Use genuine, licensed, or properly attributed images. Never present generated imagery as a real restaurant or location photograph.
13. Disclose affiliate and sponsored relationships clearly.
14. Keep secrets, credentials, personal data, and non-public commercial terms out of this public repository.

## PR checklist

- [ ] Scope is focused and linked to a backlog item.
- [ ] Existing implementation and overlap were checked.
- [ ] Mobile layouts checked at 360px and 390px.
- [ ] Desktop layout checked.
- [ ] Links, images, language switching, and navigation checked.
- [ ] SEO metadata, canonical, hreflang, sitemap, and indexability checked where relevant.
- [ ] Automated tests/build/audits pass.
- [ ] Editorial facts have reliable sources and verification dates.
- [ ] Affiliate disclosures and analytics consent requirements are respected.
- [ ] No merge or deployment performed without owner approval.

## Workspace files

- [STRATEGY.md](STRATEGY.md) — business goal, audience, positioning, and product principles.
- [BACKLOG.md](BACKLOG.md) — prioritized improvement portfolio and 30-day work packages.
- [DECISIONS.md](DECISIONS.md) — decision log.
- [STATUS.md](STATUS.md) — current known project state and verification needs.
- [HANDOFF.md](HANDOFF.md) — current next actions and contributor handoff format.
