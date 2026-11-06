# Claude Code GitHub Action — setup and use

_Added: 2026-11-07_

`.github/workflows/claude.yml` lets the project owner ask Claude to work directly from a GitHub issue or pull request. Claude works on its own `claude/...` branch and opens a pull request. It never merges and never deploys.

## How to call Claude

| Where | How | What happens |
|---|---|---|
| New issue | Put `@claude` in the title or body | Claude reads the issue, works on a `claude/` branch, opens a PR and links it in the issue |
| Issue comment | Comment `@claude <request>` | Same as above, using the comment as the request |
| PR comment / review | Comment `@claude <request>` on a PR | Claude answers or pushes fixes to its branch |

Only the repository owner (`github.repository_owner`) can trigger a run. Bots are blocked by the action by default. A ChatGPT or Codex hand-off works only when it is posted from the owner's account.

Good requests are small and tied to a backlog item, for example:

> @claude G2B-005: list orphan guide pages (no internal links in) and add links from the matching directory sections. Open a PR; do not merge.

## One-time setup (owner, about 10 minutes)

1. **Install the Claude GitHub App** on this repository: https://github.com/apps/claude (Only select repositories → `busan-travel-guide`).
2. **Create the auth secret.** Use one of:
   - **Claude Max/Pro subscription (recommended):** on a computer with Claude Code installed, run `claude setup-token`, then add the printed token as repository secret `CLAUDE_CODE_OAUTH_TOKEN` (Settings → Secrets and variables → Actions → New repository secret). Usage counts against the subscription.
   - **API key:** create a key at console.anthropic.com, add it as secret `ANTHROPIC_API_KEY`, and in `claude.yml` replace the `claude_code_oauth_token` line with `anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}`. Billed per token.
   - Never paste either value into an issue, PR, commit or chat.
3. **Protect `main`** (Settings → Branches → Add branch ruleset or classic rule for `main`):
   - Require a pull request before merging (0 approvals is fine for a solo owner).
   - Require status checks to pass: `Technical SEO audit`.
   - Block force pushes and deletions.
   - Do not add the Claude app to any bypass list.

   This is the real guarantee that no automation can reach production: `deploy.yml` deploys whatever lands on `main`.

## Safety model

- **Branch only:** `base_branch: main`, `branch_prefix: claude/`.
- **Blocked commands:** `gh pr merge`, `gh api`, `git push` to `main`, force pushes, `git merge`, `git rebase`, `curl`.
- **No deploy secrets:** the workflow does not pass the Render deploy hook or social tokens to Claude.
- **Scope limits:** 60 turns and 60 minutes per run, one run at a time per issue or PR.
- **Instructions:** the appended system prompt tells Claude to:
  - read CLAUDE.md, AGENTS.md, CONTENT_GUIDELINES.md and this workspace first;
  - run the build and the `seo-audit.yml` audits before opening a PR;
  - update STATUS.md and HANDOFF.md.

## First run (2026-11-06, issue #285)

- Setup done: Claude GitHub App installed on this repo, `CLAUDE_CODE_OAUTH_TOKEN` secret set, `Protect main` ruleset active (PR required, check "Crawl local SEO hygiene" required, no force-push or deletion).
- Verified: the owner's `@claude` issue triggered the workflow; the OAuth token was accepted; Claude read the repo rules, edited only the requested file and pushed `claude/issue-285-…`. Comments by `claude[bot]` were skipped, as intended (owner-only trigger). Nothing was merged.
- Not working in that run: the build and audits were refused by the tool allowlist, and Claude posted a "Create PR" link instead of opening the PR.
- Fix in this change: allow `sh scripts/…` and `node scripts/…` in both permission syntaxes, plus read-only `ls`/`cat`/`grep` and `rm -rf public`; tell Claude to run each audit as a separate command and to open the PR with `gh pr create`. Re-check on the next request.
