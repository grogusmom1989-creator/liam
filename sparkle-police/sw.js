const CACHE='sparkle-police-v2';
const ASSETS=['/sparkle-police/','/sparkle-police/index.html','/sparkle-police/manifest.json',
'/sparkle-police/icons/icon-192.png','/sparkle-police/icons/icon-512.png',
'/sparkle-police/icons/icon-maskable-512.png','/sparkle-police/icons/apple-touch-icon.png',
'/sparkle-police/pier60-launch.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;}).catch(()=>caches.match('/sparkle-police/index.html'))));});
