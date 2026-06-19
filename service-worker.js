self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("slrd-cache").then(cache=>{
      return cache.addAll([
        "/",
        "/login.html",
        "/user-home.html",
        "/admin-home.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(res=>{
      return res || fetch(e.request);
    })
  );
});
