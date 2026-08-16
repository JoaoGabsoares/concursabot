// ConcursaBot Service Worker - Offline Cache & PWA Support
const CACHE_NAME = 'concursabot-v1.7.0';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/css/style.css',
  '/manifest.json',
  '/js/app.js',
  '/js/api.js',
  '/js/utils.js',
  '/js/careers.js',
  '/js/dashboard.js',
  '/js/study-room.js',
  '/js/simulados.js',
  '/js/questions.js',
  '/js/flashcards.js',
  '/js/summaries.js',
  '/js/edital.js',
  '/js/hub.js',
  '/js/users.js',
  '/js/settings.js',
  '/js/profile-creator.js',
  '/js/caderno-erros.js',
  '/js/redacao.js',
  '/js/rag.js',
  '/js/tutor.js',
  '/js/gamification.js',
  '/js/simulado-print.js',
  '/js/pwa-helper.js',
  '/js/about.js',
  '/js/guide.js'
];

// Install Event - Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA Pre-cache partial warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-while-revalidate for static assets, network-first for API
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Don't intercept POST/PUT/DELETE
  if (event.request.method !== 'GET') {
    return;
  }

  // Network-First for API calls with offline fallback
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request).catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        return new Response(JSON.stringify({ offline: true, error: 'Você está no modo offline. Conecte-se à internet para sincronizar com a IA.' }), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // Stale-While-Revalidate for static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
