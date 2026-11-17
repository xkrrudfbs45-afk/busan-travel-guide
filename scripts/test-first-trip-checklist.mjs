import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const pages = [
  'guides/busan-first-time-guide/index.html',
  'ja/guides/first-trip/index.html',
  'zh-tw/guides/first-trip/index.html'
];
const expectedIds = [
  'hotel-address',
  'airport-route',
  'late-checkin',
  'transit-payment',
  'luggage-storage',
  'offline-bookings',
  'attraction-rules',
  'time-buffer'
];

for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  assert.equal((html.match(/data-first-trip-checklist/g) || []).length, 1, path + ': expected one checklist');
  assert.deepEqual(Array.from(html.matchAll(/data-checklist-item="([^"]+)"/g), (match) => match[1]), expectedIds, path + ': checklist IDs/order differ');
  assert.match(html, /data-checklist-status[^>]*aria-live="polite"/, path + ': status must announce progress');
  assert.match(html, /<progress[^>]*data-checklist-progress/, path + ': progress element missing');
  assert.match(html, /data-checklist-reset/, path + ': reset action missing');
  assert.match(html, /first-trip-checklist\.css/, path + ': localized stylesheet missing');
  assert.match(html, /first-trip-checklist\.js/, path + ': checklist script missing');
  assert.match(html, /not synced across devices|端末間では同期されません|同步到其他裝置/, path + ': local-only storage note missing');
}

const js = readFileSync('assets/js/first-trip-checklist.js', 'utf8');
assert.match(js, /localStorage\.getItem/);
assert.match(js, /localStorage\.setItem/);
assert.match(js, /localStorage\.removeItem/);
assert.match(js, /catch\s*\(_\)/, 'storage errors must be caught');
assert.match(js, /checklistStorageFallback/);

const css = readFileSync('assets/first-trip-checklist.css', 'utf8');
assert.match(css, /@media\(max-width:600px\)/);
assert.match(css, /:focus-visible/);
assert.match(css, /min-height:48px/);

console.log('First-trip checklist: EN / JA / zh-TW markup, shared IDs, local storage fallback and mobile/focus styles passed.');
