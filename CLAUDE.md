# Claude Code instructions

Before changing this repository, read `AGENTS.md` and `CONTENT_GUIDELINES.md`. Treat their duplicate-topic, localization, mobile-overflow, source-verification and pre-PR checks as mandatory.

Before starting any task, also read `docs/ai-workspace/README.md`, `STRATEGY.md`, `BACKLOG.md`, `STATUS.md`, and `HANDOFF.md`. Update the workspace status and handoff after meaningful work. Do not merge or deploy without explicit project-owner approval.


## Shared AI operating model

- ChatGPT is the product/marketing lead and continuity owner: prioritize against the north-star goals, maintain the backlog and shared workspace, prepare content/SEO/product decisions, inspect repository and public evidence, and make safe GitHub documentation/content changes directly when supported.
- Claude is the engineering executor when available: implement code-heavy changes, run builds/audits, inspect visual behavior, and open focused pull requests.
- If Claude Code usage is unavailable or exhausted, work must not stop. ChatGPT should continue all useful work it can perform directly (research, prioritization, content, SEO planning, issue creation, documentation, and safe GitHub edits/PRs), then record any engineering-only blockers in STATUS.md and HANDOFF.md for Claude's next session.
- The project owner can use the short instruction “읽고 진행해” to authorize the next prioritized, non-destructive work batch. The assistant should consult this shared workspace and current GitHub state rather than ask the owner to repeat context.
- Never claim that Claude is running, that tests were executed, or that production changed unless there is evidence. ChatGPT cannot launch Claude Code or perform an unavailable local build/deploy; state blockers plainly.
- Use GitHub issues/PRs as the shared task queue and source of truth. Keep owner-facing updates concise; do not ask the owner to copy long prompts between assistants.
- No merge, production deployment, secrets change, paid service activation, or irreversible action without explicit project-owner approval. PR creation and review are allowed within task scope.
