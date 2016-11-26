import './activity.scss';

const activity = {
	mapActivityToDOM: mapActivityToDOM
};

function mapActivityToDOM(id, activity) {
	let section = document.getElementById(id);
	section.innerHTML = '';
	section.appendChild(_createActivityElement(activity));
}

function _createActivityElement(activity) {
	let placeElem = document.createElement('div');
	let capitalizedName = activity.customerFirstName.charAt(0).toUpperCase() + activity.customerFirstName.slice(1);
	placeElem.innerHTML =
		`
		<h2>${capitalizedName} is currently ${_randomPhraseGenerator()} ${activity.activityTitle}</h2>
		<img class="activity__picture" src="${activity.activityPictureUrl}" alt="${activity.activityTitle}">
		`;
	return placeElem;
}

function _randomPhraseGenerator() {
	let verbs = [
		'enjoying',
		'experiencing',
		'trying out',
		'having fun with',
		'exploring'
	];

	return verbs[Math.floor(Math.random() * (verbs.length - 0)) + 0];
}

export default activity;
