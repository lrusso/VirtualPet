const filesToCache = [
	"VirtualPet.htm",
	"VirtualPet.json",
	"VirtualPet.png",
	"VirtualPetFavIcon_16x16.png",
	"VirtualPetFavIcon_192x192.png",
	"VirtualPetFavIcon_512x512.png",
	"VirtualPetGame.htm",
	"VirtualPetGame.js",
	"VirtualPetShare.png"
];

const staticCacheName = "virtualpet-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});