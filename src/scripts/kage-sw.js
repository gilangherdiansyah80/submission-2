import 'regenerator-runtime';
import KageCacheHelper from './utils/kage-cache-halper';

// Daftar asset yang akan di-caching
const kageAssetsToCache = [
  './',
  './icons/kage-restaurant 64x64.png',
  './icons/kage-restaurant 96x96.png',
  './icons/kage-restaurant 128x128.png',
  './icons/kage-restaurant 192x192.png',
  './icons/kage-restaurant 256x256.png',
  './icons/kage-restaurant 512x512.png',
  './index.html',
  './app.bundle.js',
  './kage-app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(KageCacheHelper.cachingAppShell([...kageAssetsToCache]));

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(KageCacheHelper.deleteOldCache());

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(KageCacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});
