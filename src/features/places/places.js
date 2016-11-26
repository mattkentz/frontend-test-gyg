import './places.scss';

const places = {
	mapPlacesToDOM: mapPlacesToDOM,
	scrollPlaces: scrollPlaces
};

function mapPlacesToDOM(id, places) {
	let section = document.getElementById(id);
	section.innerHTML = '';
	places.forEach( place => {
		section.appendChild(_createPlaceTemplate(place))
	});

	return section;
}

function scrollPlaces(elem, duration) {
	elem.scrollTop = 0.0;
	let step = elem.scrollHeight / duration / 20;
	let counter = 0;
	let scrollInterval = setInterval(() => {
		if(counter === duration * 20) {
			clearInterval(scrollInterval);
			return;
		}
		elem.scrollTop += step;
		counter++;
	}, 50)
}

function _createPlaceTemplate(place) {
	let placeElem = document.createElement('div');
	placeElem.className = 'places__place';
	placeElem.innerHTML =
		`
		<h3>${place.name}</h3>
		<p>Rating: ${place.rating ? place.rating : 'Not yet rated'}</p>
		<p>Open now: ${place.opening_hours && place.opening_hours.open_now ? 'Open' : 'Closed'}</p>
		`;
	return placeElem;
}

export default places;
