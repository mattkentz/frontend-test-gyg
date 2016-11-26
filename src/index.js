import map from './features/map/map';
import customer from './features/customer/customer';
import places from './features/places/places';
import activity from './features/activity/activity';
import updates from './features/updates/updates';
import './styles/global.scss';
import '../node_modules/normalize.css/normalize.css';

getAppData();
setInterval(getAppData, 60000)

function getAppData() {
	customer.fetchData().then(function (data) {
		activity.mapActivityToDOM('activity',data);
		let customerMap = map.init(
			{
				lat: data.activityCoordinateLatitude,
				lng: data.activityCoordinateLongitude
			}, 18);
		map.placeMarker(customerMap, data.activityCoordinateLatitude, data.activityCoordinateLongitude)
		map.getNearbyPlaces(customerMap, data.activityCoordinateLatitude, data.activityCoordinateLongitude).then(function (response) {
			places.mapPlacesToDOM('places', response);
		})
		updates.mapUpdatesToDOM('updates', new Date());
	});
}
