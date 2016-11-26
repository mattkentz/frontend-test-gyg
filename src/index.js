//Styles
import '../node_modules/normalize.css/normalize.css';
import './styles/global.scss';
import './styles/header.scss';
import './styles/content.scss';

//Components
import map from './features/map/map';
import customer from './features/customer/customer';
import places from './features/places/places';
import activity from './features/activity/activity';
import updates from './features/updates/updates';

// Initialize default map before call to GetYourGuide in case call takes long or returns error
map.init();
getAppData();
setInterval(getAppData, 60000)

function getAppData() {
	customer.fetchData().then(function (data) {
		activity.mapActivityToDOM('header',data);
		let customerMap = map.init(
			{
				lat: data.activityCoordinateLatitude,
				lng: data.activityCoordinateLongitude
			}, 18);
		map.placeMarker(customerMap, data.activityCoordinateLatitude, data.activityCoordinateLongitude)
		map.getNearbyPlaces(customerMap, data.activityCoordinateLatitude, data.activityCoordinateLongitude).then(function (response) {
			let placesElem = places.mapPlacesToDOM('places-list', response);
			places.scrollPlaces(placesElem, 60);
		});

		updates.mapUpdatesToDOM('updates', new Date());
	});
}
