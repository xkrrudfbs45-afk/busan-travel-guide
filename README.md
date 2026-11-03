# Go2Busan — A Local Guide to Busan

A multilingual static travel guide for Busan, with English, Japanese and Traditional Chinese (Taiwan) pages.

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server. Paths use root-relative URLs and are intended for a domain-root deployment.

## Content and editorial checks

- Read [`CONTENT_GUIDELINES.md`](CONTENT_GUIDELINES.md) before creating or editing travel content.
- `AGENTS.md` contains mandatory repository instructions for Codex and other coding agents; `CLAUDE.md` points Claude Code to the same rules.
- Before creating a new guide, search the sitemap, search index and localized guide paths for topic and search-intent overlap. Improve an existing canonical guide when appropriate.
- Wrap every HTML table in `<div class="table-wrap">` and check mobile overflow at 360px and 390px.
- Verify transport schedules, fares, ticket terms and official links before publication. Use descriptive link text rather than exposing long raw URLs.
- Keep affiliate relationships disclosed clearly.
- Update the privacy policy before enabling analytics, advertising or other data collection.

## Deployment

The site is deployed as a static site on Render. Verify the build, CI checks, production deployment status and live commit before describing changes as live.
