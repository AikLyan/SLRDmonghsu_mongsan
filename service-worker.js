const CACHE_NAME = "slrd-cache-v2";

const FILES = [
  "/",
  "/login.html",
  "/user-home.html",
  "/admin-home.html",
  "/manifest.json",
  "/logo.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
