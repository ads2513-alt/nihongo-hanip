const VERSION='nihongo-hanip-v2-8';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./scene-catalog.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('nihongo-hanip-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==self.location.origin)return;
  // Navigation uses network when available; cached app works without network.
  if(req.mode==='navigate'){e.respondWith(fetch(req).then(resp=>{if(resp.ok){const cp=resp.clone();caches.open(VERSION).then(c=>c.put('./index.html',cp)).catch(()=>{})}return resp}).catch(()=>caches.match('./index.html')));return}
  // App assets from cache; non-shell same-origin requests stay network-first.
  const shellFiles=['index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','scene-catalog.json'];
  if(shellFiles.some(f=>url.pathname.endsWith('/'+f))){e.respondWith(caches.match(req).then(hit=>hit||fetch(req)));return}
  e.respondWith(fetch(req).catch(()=>caches.match(req)));
});
