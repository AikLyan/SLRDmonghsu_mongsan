self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("slrd-cache").then(cache=>{
      return cache.addAll([
        "/",
        "/index.html",
        "/login.html",
        "/admin-home.html",
        "/user-home.html",
        "/firebase/firebase-app.js",
        "/firebase/firebase-firestore.js"
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
