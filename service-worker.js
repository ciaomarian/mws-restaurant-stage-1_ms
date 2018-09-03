const cacheName = 'v1';
const cacheFiles = [
    '/index.html',
    '/restaurant.html?id=1',
    '/restaurant.html?id=2',
    '/restaurant.html?id=3',
    '/restaurant.html?id=4',
    '/restaurant.html?id=5',
    '/restaurant.html?id=6',
    '/restaurant.html?id=7',
    '/restaurant.html?id=8',
    '/restaurant.html?id=9',
    '/restaurant.html?id=10',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restuarant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg'
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                return response;
            } else {
                return fetch(e.request)
                    .then(function (response) {
                        const responseClone = response.clone();
                        caches.open(cacheName).then(function (cache) {
                            cache.put(e.request, responseClone);
                        })
                        return response;
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
            }
        })
    );
});
