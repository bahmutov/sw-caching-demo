console.log('this is service worker sw.js')

const urls = ['/', 'app.css']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('demo').then((cache) => cache.addAll(urls))
  )
})

self.addEventListener('fetch', event => {
  console.log('page is fetching', event.request.url)
  event.respondWith(
    caches.open('demo').then(cache => {
      return cache.match(event.request)
        .then(cached => {
          if (cached) {
            console.log('returning cached', event.request.url)
            return cached
          }
          return Promise.reject()
        })
    })
  )
})
