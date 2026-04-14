const CACHE_NAME = 'kanyakumari-cache-v1';

// 1. The files we want to save to the device's memory
const urlsToCache = [
  '/',
  '/index.html',
  '/attractions.html',
  '/history.html',
  '/markets.html',
  '/dashboard.html'
];

// 2. Install Event: Download and save the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and saved core pages.');
        return cache.addAll(urlsToCache);
      })
  );
});

// 3. Fetch Event: Intercept network requests
self.addEventListener('fetch', event => {
  // We only want to intercept standard GET requests (loading pages/images)
  // We skip POST requests (like sending data to Supabase)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // If the file is in the cache, serve it instantly!
        if (response) {
          return response;
        }

        // If it's not in the cache, try to fetch it from the internet
        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response and save it to the cache for next time
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      }).catch(() => {
        // If the internet is completely dead AND the file isn't in cache,
        // we can return a fallback offline page here if we had one.
        console.log("You are offline and this resource isn't cached.");
      })
  );
});

// 4. Activate Event: Clean up old caches if we update the version
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});