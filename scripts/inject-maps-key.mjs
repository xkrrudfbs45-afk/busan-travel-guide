// Inject the Google Maps Embed API key into the built map page.
// The key is read from the GOOGLE_MAPS_EMBED_KEY environment variable (set in
// Render). If it is missing or malformed, the page is left without a key and
// shows its list-and-links fallback, so the build never fails because of it.
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] || 'public';
const file = path.join(root, 'guides', 'busan-map', 'index.html');
const key = (process.env.GOOGLE_MAPS_EMBED_KEY || '').trim();
const META = '<meta name="g2b-maps-embed-key" content="">';

if (!fs.existsSync(file)) {
  console.log('inject-maps-key: map page not found, skipped');
  process.exit(0);
}
if (!key) {
  console.log('inject-maps-key: GOOGLE_MAPS_EMBED_KEY not set, map uses link fallback');
  process.exit(0);
}
if (!/^AIza[0-9A-Za-z_-]{35}$/.test(key)) {
  console.log('inject-maps-key: GOOGLE_MAPS_EMBED_KEY has an unexpected format, skipped');
  process.exit(0);
}
const html = fs.readFileSync(file, 'utf8');
if (!html.includes(META)) {
  console.log('inject-maps-key: key placeholder not found, skipped');
  process.exit(0);
}
fs.writeFileSync(file, html.replace(META, `<meta name="g2b-maps-embed-key" content="${key}">`));
console.log('inject-maps-key: key injected into the map page');
