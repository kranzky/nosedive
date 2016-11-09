var CACHE_NAME = 'nosedive-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-96x96.png',
  '/fonts/Lato-Hairline.woff2',
  '/images/1face.png',
  '/images/2face.png',
  '/images/3face.png',
  '/images/4face.png',
  '/images/5face.png',
  '/images/bear.png',
  '/images/loader-bar.png',
  '/images/loader-bg.png',
  '/images/nostar.png',
  '/images/star.png',
  '/js/nosedive.js',
  '/sounds/nosedive_1_star.mp3',
  '/sounds/nosedive_2_stars.mp3',
  '/sounds/nosedive_3_stars.mp3',
  '/sounds/nosedive_4_stars.mp3',
  '/sounds/nosedive_5_stars.mp3'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.info('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
