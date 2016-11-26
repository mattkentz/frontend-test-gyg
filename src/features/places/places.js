const places = {
	mapPlacesToDOM: mapPlacesToDOM
};

function mapPlacesToDOM(id, places) {
	let section = document.getElementById(id);
	section.innerHTML = '';
	places.forEach( place => {
		section.appendChild(_createPlaceTemplate(place))
	});
}

function _createPlaceTemplate(place) {
	let placeElem = document.createElement('div');
	placeElem.innerHTML =
		`
		<h2>Nearby Points of Interest</h2>
		<h3>${place.name}</h3>
		<p>Rating: ${place.rating ? place.rating : 'Not yet rated'}</p>
		<p>Open now: ${place.opening_hours && place.opening_hours.open_now ? 'Open' : 'Closed'}</p>
		`;
	return placeElem;
}
export default places;
