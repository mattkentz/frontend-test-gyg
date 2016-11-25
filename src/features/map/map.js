import './map.scss';

const map = {
	init: initMap
};

function initMap(center = {lat: 50, lng: 20}, zoom = 2) {
	return new google.maps.Map(document.getElementById('map'), {
		zoom,
		center
	});
}

export default map;
