import map from './features/map/map';
import customer from './features/customer/customer';
import './styles/global.scss'

customer.fetchData().then(function (data) {
	let customerMap = map.init(
		{
			lat: data.activityCoordinateLatitude,
			lng: data.activityCoordinateLongitude
		}, 18);
	map.placeMarker(customerMap, data.activityCoordinateLatitude, data.activityCoordinateLongitude)
	map.getNearbyPlaces(customerMap, data.activityCoordinateLatitude, data.activityCoordinateLongitude).then(function (response) {
		window.places = response;
	})
});
