self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('gold-rate-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',  // if you have a separate CSS file
                '/script.js',    // if you have a separate JS file
                '/icon-192x192.png',
                '/icon-512x512.png',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
