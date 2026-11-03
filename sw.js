// Go2Busan offline support. Network first, so visitors online always get the latest deploy.
// Pages and same-origin assets a visitor has opened are kept on the device and shown when offline.
// Emergency rollback: replace this file with one that calls self.registration.unregister().
const VERSION = "go2busan-offline-v1";
const CORE = ["/", "/ja/", "/zh-tw/", "/offline.html", "/assets/styles.css", "/favicon.svg"];
const MAX_PAGES = 60;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => Promise.all(CORE.map((url) => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

async function trim(cache) {
  const keys = await cache.keys();
  const pages = keys.filter((r) => r.headers.get("accept")?.includes("text/html") || r.url.endsWith("/"));
  for (let i = 0; i < pages.length - MAX_PAGES; i++) await cache.delete(pages[i]);
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // never touch analytics, maps or partner links
  if (url.pathname === "/version.txt" || url.pathname === "/sw.js") return;

  const isPage = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok && res.type === "basic") {
          const copy = res.clone();
          caches.open(VERSION).then((cache) => cache.put(req, copy).then(() => (isPage ? trim(cache) : null)));
        }
        return res;
      })
      .catch(async () => {
        const cached = await caches.match(req, { ignoreSearch: isPage });
        if (cached) return cached;
        if (isPage) return (await caches.match("/offline.html")) || Response.error();
        return Response.error();
      })
  );
});
