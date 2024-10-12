const staticDevCoUee = 'dev-coUee-site-v1'

const assets = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/app.js',
    '../images/coffe_1.jpg',
    '../images/coffe_2.jpg',
    '../images/coffe_3.jpg',
    '../images/coffe_4.jpg',
    '../images/coffe_5.jpg',
    '../images/coffe_6.jpg',
    '../images/coffe_7.jpg',
    '../images/coffe_8.jpg',
    '../images/coffe_9.jpg',
]

self.addEventListener('install', (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticDevCoUee).then((cache) => {
            cache.addAll(assets)
        }),
    )
})

self.addEventListener('fetch', (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res ?? fetch(fetchEvent.request)
        }),
    )
})
