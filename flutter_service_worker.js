'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "188b8888d017278b32ef806219f8649b",
"version.json": "fb8d4678888024cd5f83d8522bb3a722",
"index.html": "da8684ecf5145df04d5084b2d039cadc",
"/": "da8684ecf5145df04d5084b2d039cadc",
"main.dart.js": "637ccf1f141868795065561128b06d9d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "884ed368dd3439ac9fa178253ae152d9",
"assets/AssetManifest.json": "95f86ba023251b95ea6bb4edced8e63f",
"assets/NOTICES": "a3ca6d3dbe53785328e8fea9da7cd1bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5ad0b7d8edfdc853c1380376362072bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6b65092c74a386120771b9c9287a7734",
"assets/fonts/MaterialIcons-Regular.otf": "be12029cc947b0445e0972494838bbd9",
"assets/assets/images/jira.png": "947216a1d024d357bf86728fe00622e4",
"assets/assets/images/Vim.png": "63387885f84f7aa532b175d009a499e3",
"assets/assets/images/Notion.png": "5f88f99bb22c283ea4b17e4e746932e4",
"assets/assets/images/docker.png": "bc59d9348a22c6216859c04b9e566aa3",
"assets/assets/images/Python.png": "d8aee7b71fca6acd206257bf96f3480a",
"assets/assets/images/Flutter.png": "1859bc140be6d416af0af31a834df5c1",
"assets/assets/images/bash.png": "96c80c21b0e18b2502a68f36b28f67f2",
"assets/assets/images/Github.png": "173eb01d411f97c355b3932a6e51cc98",
"assets/assets/images/Firebase.png": "e47071247d69ff8b547b070b8b15965e",
"assets/assets/images/Gitlab.png": "d9f31144a552eeb31f3b73a6e1c39080",
"assets/assets/images/gmail.png": "6c9baa013f158d3e9fc323ecd7afad9b",
"assets/assets/images/ingush.png": "b8ab878befe25ef1b67ac61e4f7c2995",
"assets/assets/images/gmail2.png": "c39eb5d0837e784be98bfa6c53d27c5f",
"assets/assets/images/javascript.png": "9430ee99625f453c29a6c6ea063af43f",
"assets/assets/images/Figma.png": "8fa0896684b26ed0b4041553d42de4a5",
"assets/assets/images/Bootstrap.png": "dc5b3dbc7ade75dc9d0e05c7b84409b2",
"assets/assets/images/nginx.png": "548508fb704ead9ac90e20fe639312ce",
"assets/assets/images/GO.png": "1e9994db3761ed74ceb9fe02a20d5464",
"assets/assets/images/slack.png": "c4b4b1a790a3250b460a35851b6f2c98",
"assets/assets/images/CSS3.png": "441833b3e524c1d568e705c804650880",
"assets/assets/images/linkedin.png": "d2b6c44104204eb1644c41e0382b9656",
"assets/assets/images/profile.jpeg": "eb14014dfc551c5c13c093dbf1f79d58",
"assets/assets/images/Postman.png": "7a948a8b184283b4d3a9fc50363a5e16",
"assets/assets/images/Adobe%2520XD.png": "b866a60f541645243da194cc1ff0215c",
"assets/assets/images/Gunicorn.png": "9ceaac9f2336a1971363cf57f0936abf",
"assets/assets/images/salesforce_image.webp": "19e7a3a292a490e6ef7df2fd035ded1d",
"assets/assets/images/C++.png": "f7425d2be0c328fab4dfe9f0e585dfa1",
"assets/assets/images/github2.png": "a08ecb18e549fcc166d1eda10b1325d3",
"assets/assets/images/Adobe%2520Photoshop.png": "a35ed24f8bd07fe16e1fe99f41cbdb69",
"assets/assets/images/gargalo.png": "db5ca55893f5f2cfb30996ded48bcd66",
"assets/assets/images/poster_gargalo.png": "b6c87550a20177dc2dcc40bbce823642",
"assets/assets/images/Adobe%2520Lightroom.png": "191f91b2e04bf5b75738b7291d3b0126",
"assets/assets/images/django%25201.png": "33a047e3d22594fbc02a281496b04398",
"assets/assets/images/dart.png": "e72a2db0420865f1313543835978f19a",
"assets/assets/images/Flutter@2x.png": "afa75259f162b2c2d58c4376a5d15ee0",
"assets/assets/images/salesforce_image2.webp": "b0f6556ef987cf3bc79aeb14fa698669",
"assets/assets/images/HTML5.png": "4935eee0b5be84030e0803d6b2d5493d",
"assets/assets/images/postgresql.svg": "434a72c9d2ff6ac41970217eec26dedc",
"assets/assets/images/linkedin2.png": "f56b3ace7bacede6e4ade4b43384a5c7",
"assets/assets/images/Nodejs.png": "b01e13766f069584e63d1bac51b8294c",
"assets/assets/files/CV_Ibraguim_Albakov.pdf": "e8762e7a85e64dd39853f017a9fb980e",
"assets/assets/data/my_data_en.json": "a375a53e407c15c3b948b9637e538fb7",
"assets/assets/data/my_data_fr.json": "ce3f904a63c981265f2d6878f4b04733",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
