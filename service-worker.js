self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  // простой «fallback» — можно расширять
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
