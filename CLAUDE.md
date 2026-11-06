# Claude Code instructions

Before changing this repository, read `AGENTS.md` and `CONTENT_GUIDELINES.md`. Treat their duplicate-topic, localization, mobile-overflow, source-verification and pre-PR checks as mandatory.

Before starting any task, also read `docs/ai-workspace/README.md`, `STRATEGY.md`, `BACKLOG.md`, `STATUS.md`, and `HANDOFF.md`. Update the workspace status and handoff after meaningful work. Do not merge or deploy without explicit project-owner approval.

## Project-owner execution gate

- Claude must not start, resume, or extend repository work unless the project owner explicitly invokes Claude for that specific task in the current issue or pull request.
- A general request to ChatGPT to continue, improve, review, or execute work is not authorization for Claude. Do not self-trigger, add an `@claude` mention, or create follow-up Claude runs.
- If the project owner says stop, pause, hold, or do not continue, stop repository work immediately. Do not make further edits, commits, pushes, PR updates, merges, or deployments. If a run is active and cancellation is available, cancel it; otherwise stop at the earliest safe point and report the limitation.
- Do not create or enable scheduled/recurring Claude work unless the project owner explicitly asks for it.
- Keep changes in a branch and PR. Never merge or deploy without explicit project-owner approval.
