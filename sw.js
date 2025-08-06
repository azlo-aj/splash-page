self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("encoder-cache").then(cache => {
            return cache.addAll([
                "./encoder.html",
                "./manifest.json",
                "./sw.js"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
