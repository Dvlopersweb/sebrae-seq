'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "486fedd6588f14b0e9e53c8260e881d0",
"assets/AssetManifest.bin.json": "3a16bcf8948d51ab48fd51c67593369c",
"assets/AssetManifest.json": "c9bcaf486278a6e7fa3629760d8f4b7c",
"assets/assets/fonts/arial.ttf": "fa3228aadde0db988e1822c2f736c131",
"assets/assets/fonts/arialbd.ttf": "858f5a50a4c3e5e6559a0c9b128eee60",
"assets/assets/fonts/arialbi.ttf": "b04eb00031bf4d82265b30855d7a314f",
"assets/assets/fonts/ariali.ttf": "97f1aa85e8ce271cd2a65759cb230397",
"assets/assets/fonts/ariblk.ttf": "ec8b4d9c0e68604dfbeda73d0213c82e",
"assets/assets/images/01.png": "18e82c0bb1121eb3bdb88fa40dc7a0cd",
"assets/assets/images/01p.png": "a2bc729904f51e288dbe23cb4926f351",
"assets/assets/images/02.png": "73786f94a7cd71997bda0ea6152f1fa9",
"assets/assets/images/02p.png": "f060469b5105a274fa1ff3567d0d9051",
"assets/assets/images/03.png": "5167b36c8e45cf71781ea8e463550165",
"assets/assets/images/03p.png": "65d3f5fbceb7183628caaaedf063395f",
"assets/assets/images/04.png": "c257b1776a1c50f0a49f026da2d6b680",
"assets/assets/images/04p.png": "db3faaa5c81d842dd931b18cef5530e8",
"assets/assets/images/05.png": "903d112ef75751674587bbb897cbcda1",
"assets/assets/images/05p.png": "ba3f34cf0816cd5ba5aa251e1dd736cd",
"assets/assets/images/06.png": "6b4fa62e7a3b002170ff29714b37fc1a",
"assets/assets/images/06p.png": "bac43151afe752b68b2785864c1d9f5a",
"assets/assets/sounds/black.mp3": "890eed47a5c6ffc696de49b2be4553d3",
"assets/assets/sounds/blue.mp3": "e09986cf576f09eac518f8eb37ed13b7",
"assets/assets/sounds/green.mp3": "5dd1fe15ddbb60c8af46e75167c66182",
"assets/assets/sounds/purple.mp3": "4fee46a3605ee55d5a5646326f980183",
"assets/assets/sounds/red.mp3": "95104d591261714365e5b8229d1e9e4b",
"assets/assets/sounds/vitoria.mp3": "d0e71fbf846ba1428b2899cd121671dc",
"assets/assets/sounds/yellow.mp3": "7ee3f37c1adfb509bb75e8c3980957ed",
"assets/assets/videos/bg.mp4": "aa904d302009266a836b9040508153e3",
"assets/assets/videos/cd.mp4": "a4e900bb52bdc6a16d04221a6f4e699d",
"assets/assets/videos/form.mp4": "b8257c32f32e4c7bdaed794f98920dc4",
"assets/assets/videos/intro.mp4": "a827a03495d76e3c835ed44cc0efc32c",
"assets/FontManifest.json": "81146b81bf0038cedffbc4cf0ddcdc76",
"assets/fonts/MaterialIcons-Regular.otf": "e70d1077ea70f0160b1ac7b1653fc95f",
"assets/NOTICES": "1f30458aaf9cf6d68e29c34debd00d53",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "a386578f0467a7f459e2be30b462614e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c393eadc747089b332f1e08f18ce569e",
"/": "c393eadc747089b332f1e08f18ce569e",
"main.dart.js": "70643adca6e5fc5732bb58e0e91c83ae",
"manifest.json": "0ae55f686b5fd54348e055ce1cbfb06d",
"version.json": "97d1d27c1d3be47fb7739d14823cd0f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
