#!/bin/sh
# Build only the public website into Render's publish directory.
# Internal planning documents and repository metadata are intentionally excluded.
set -eu

ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$ROOT"

rm -rf public
mkdir -p public

# Copy only known public website paths. Do not publish the repository root.
for dir in assets guides ja zh-tw; do
  if [ ! -d "$dir" ]; then
    echo "Required public directory missing: $dir" >&2
    exit 1
  fi
  cp -R "$dir" public/
done

for file in 404.html about.html disclosure.html favicon.svg googlec9cefb1fa4149979.html index.html privacy.html robots.txt sitemap.xml manifest.webmanifest offline.html sw.js; do
  if [ ! -f "$file" ]; then
    echo "Required public file missing: $file" >&2
    exit 1
  fi
  cp "$file" public/
done

# Fail the build if internal material ever enters the publish directory.
for path in public/docs public/marketing public/render.yaml public/README.md; do
  if [ -e "$path" ]; then
    echo "Unexpected internal file in publish directory: $path" >&2
    exit 1
  fi
done

# Smoke-check the primary entry points and shared assets before deployment.
for path in public/index.html public/ja/index.html public/zh-tw/index.html public/sitemap.xml public/assets/styles.css public/assets/js/analytics.js; do
  if [ ! -f "$path" ]; then
    echo "Required built file missing: $path" >&2
    exit 1
  fi
done

# Fill share-preview, image-loading, breadcrumb and sitemap gaps in the deployed copy.
node scripts/enhance-public.mjs public
node scripts/enhance-public-extras.mjs public
# Data-driven zh-TW affiliate CTAs (content/affiliate/zh-tw-cta.json); runs before UX so TOC/skip rules apply.
node scripts/inject-affiliate-cta.mjs public
node scripts/enhance-public-ux.mjs public

# Optional: add the referrer-restricted Google Maps Embed key from the environment.
node scripts/inject-maps-key.mjs public

# Publish the deployed commit so the deploy workflow can confirm what is live.
printf '%s\n' "${RENDER_GIT_COMMIT:-$(git rev-parse HEAD 2>/dev/null || echo unknown)}" > public/version.txt

echo "Public static build ready: internal docs excluded; EN/JA/zh-TW entry points verified."
