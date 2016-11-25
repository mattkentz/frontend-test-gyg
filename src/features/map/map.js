import './map.scss';

const map = {
	getNearbyPlaces: getNearbyPlaces,
	init: initMap,
	placeMarker: placeMarker
};

function initMap(center = {lat: 50, lng: 20}, zoom = 2) {
	return new google.maps.Map(document.getElementById('map'), {
		zoom,
		center
	});
}

function placeMarker(map, lat, lng) {
	new google.maps.Marker({
		position: {lat, lng},
		map: map
	});
}

function getNearbyPlaces(map, lat, lng) {
	return new Promise(function (resolve, reject) {
		let request = {
			location: { lat, lng },
			radius: '500'
		};
		let service = new google.maps.places.PlacesService(map);
		service.nearbySearch(request, callback);

		function callback(results, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				let places = [];
				for (var i = 0; i < results.length; i++) {
					places.push(results[i])
				}
				resolve(places);
			} else {
				reject('An error has occurred');
			}
		}
	});
}

export default map;
