import './activity.scss';

const activity = {
	mapActivityToDOM: mapActivityToDOM
};

function mapActivityToDOM(id, activity) {
	let section = document.getElementById(id);
	section.innerHTML = '';
	section.appendChild(_createActivityTemplate(activity));
}

function _createActivityTemplate(activity) {
	let activityElem = document.createElement('div');
	activityElem.className = 'activity';
	activityElem.style.backgroundImage =`url('${activity.activityPictureUrl}')`;
	let capitalizedName = activity.customerFirstName.charAt(0).toUpperCase() + activity.customerFirstName.slice(1);
	activityElem.innerHTML =
		`
		<h2 class="activity__text">${capitalizedName} is currently ${_randomPhraseGenerator()} ${activity.activityTitle}</h2>
		`;
	return activityElem;
}

function _randomPhraseGenerator() {
	let verbs = [
		'enjoying',
		'checking out',
		'experiencing',
		'trying out',
		'having fun with',
		'exploring'
	];

	return verbs[Math.floor(Math.random() * (verbs.length - 0)) + 0];
}

export default activity;
