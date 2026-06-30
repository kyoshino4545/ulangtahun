const CACHE='birthday-v1';const ASSETS=["./", "./index.html", "./music.mp3", "./images/01.jpg", "./images/02.jpg", "./images/03.jpg", "./images/04.jpg", "./images/05.jpg", "./images/06.jpg", "./images/07.jpg", "./images/08.jpg", "./images/09.jpg", "./images/10.jpg", "./images/11.jpg", "./images/12.jpg", "./images/13.jpg", "./images/14.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
