const CACHE_NAME = 'portfolio-cache-v4'; // Updated cache name to invalidate old cache
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/style.css',
  '/script.js',
  '/favicon.png',
  '/offline_2.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(() => {
        return caches.match('/offline.html');
      });
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});