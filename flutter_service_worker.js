'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8df79cf419b59c3918a3af2f0e9aa3c5",
"index.html": "a72b7d812b003bf9c06180122f1cb705",
"/": "a72b7d812b003bf9c06180122f1cb705",
"main.dart.js": "a50cafaf8440a38457f687ec5a26aa41",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6c5c5c5f263955dd44943a242d956cb9",
"assets/AssetManifest.json": "805e45a2c01496af956cd7142d16435b",
"assets/NOTICES": "8424446763fcd57f6cfd583c41f43d03",
"assets/FontManifest.json": "5167d2a397c80b4c7a9870d8a366f9df",
"assets/AssetManifest.bin.json": "3fcb7546e3cdc2b6a1405e491b4fb454",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fd489c164dfea27d9597d66979cc0ba9",
"assets/fonts/MaterialIcons-Regular.otf": "15f38a4d017b86e2c4a4887a55f731d2",
"assets/assets/images/eventpic.png": "34507ff7d2583f31f72b51af7abeefc4",
"assets/assets/images/homeholder.png": "61f2681627a18fb12637921bf662a28e",
"assets/assets/images/bandeau_globe.png": "906fa2d549ac4e97167905d3bbd66194",
"assets/assets/images/under_image.png": "fab1e55d12b8e86e070671879f841924",
"assets/assets/images/artist_holder.png": "7b4a866a234857c41a1eb664b0cd1d88",
"assets/assets/images/event_bg.png": "e7b9ca24a0ef9ef920349e19df075a92",
"assets/assets/logos/logo_google.png": "9d321c89c644c4484f228f0d97aabb3d",
"assets/assets/logos/logo_ame.png": "e311750de470180b3744e40eed73f92b",
"assets/assets/logos/logo_muska.png": "f7489451dceb85dc3e1ac166e062babd",
"assets/assets/icons/bookmarkun.png": "0be46ebc42689f1ec138e57a1c8a56ae",
"assets/assets/icons/telegram.png": "03bc0c19db2e899d895bbeba062e488b",
"assets/assets/icons/black_bubble.png": "5a77716693fe5576694ab8fff5f71aaa",
"assets/assets/icons/Lock.png": "34dec20388f21dbb7d139ac093103ff1",
"assets/assets/icons/bubble.png": "163852521a594b02018f0a4e200f58d3",
"assets/assets/icons/Profilebar.png": "4252f30d98b05e6a644121320002a61c",
"assets/assets/icons/Notif.png": "69987f395f7f9c7a9c012c225c885fc0",
"assets/assets/icons/search.png": "d1caea4443f1dfdbed202786ab4d1128",
"assets/assets/icons/Bookmark.png": "23e7fd0e33270d4a8668a90d2dbf59db",
"assets/assets/icons/Calendar.png": "072b92d4b34483b0ee6ba16b3447f931",
"assets/assets/icons/Profile.png": "36da57773d16f76286b9db8d538f7c10",
"assets/assets/icons/locationbar.png": "71e86fa965083694f125c983bf06dc99",
"assets/assets/icons/Location.png": "b0243de7fb59ded0d4de7c39d8e3c97d",
"assets/assets/icons/compass.png": "249e2f80df0f24053c4c514e6100ac31",
"assets/assets/icons/Profile2.png": "00c63d67d1a7c1dde186e992ec15cdab",
"assets/assets/icons/Message.png": "cdd36ec5e805199b584700c46d01b467",
"assets/assets/fonts/Alatsi-Regular.ttf": "20d646b8b7aa394d43a7e9397bbcb60b",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
