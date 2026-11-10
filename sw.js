// סידור משמרת · service worker מינימלי (בשביל "התקנה כאפליקציה"). לא שומר עותקים: תמיד הגרסה העדכנית.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (u.origin !== self.location.origin || e.request.method !== 'GET') return;   // Firebase וכל השאר: בלי התערבות
  e.respondWith(fetch(e.request));
});
