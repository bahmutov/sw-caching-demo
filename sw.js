console.log('this is service worker sw.js')

const urls = ['/', 'app.css']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('demo').then((cache) => cache.addAll(urls))
  )
})
