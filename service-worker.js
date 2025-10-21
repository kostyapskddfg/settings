self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('diya-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html'
      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== 'diya-cache-v1').map(k => caches.delete(k))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
