# Technical SEO audit

The repository runs a dependency-free HTML audit on pull requests, pushes to `main`, weekly on Monday, and on manual dispatch.

## What it checks

- Missing page titles, meta descriptions, canonical URLs, and document language
- Duplicate titles and canonical URLs
- Missing Open Graph / Twitter card image metadata
- Images without alt attributes
- Broken local links and local asset references
- Image URLs reused across multiple pages, reported as review items rather than automatic failures

## Reading results

The GitHub Actions job log lists findings; the workflow summary provides a compact report. Reused images are not automatically considered errors: a shared image may be appropriate for related language variants or pages. Review the topic and crop before replacing it.

The audit is intentionally non-blocking while the existing site baseline is being cleaned up. To make errors fail a local run after reviewing existing findings, run:

```sh
SEO_AUDIT_STRICT=1 node scripts/seo-audit.mjs
```

This is a source-code audit, not a live production crawl. It does not verify Google indexing, actual Core Web Vitals, analytics collection, external partner redirects, or current real-world prices and opening hours. Those require separate checks.
