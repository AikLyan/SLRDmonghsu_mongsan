self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("slrd-cache-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/user-home.html",
        "/admin-home.html",
        "/manifest.json",
        "/logo.jpg",
        "/logo.jpg1"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
