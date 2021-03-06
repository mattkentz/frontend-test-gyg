import './activity.scss';
import '../../styles/layout.scss';

const activity = {
	mapActivityToDOM: mapActivityToDOM
};

function mapActivityToDOM(id, activity) {
	let section = document.getElementById(id);
	section.innerHTML = '';
	section.appendChild(_createActivityTemplate(activity));
}

function _createActivityTemplate(activity, pill = 'GetYourGuide') {
	let activityElem = document.createElement('div');
	activityElem.className = 'activity flex__container flex__centerContent flex__direction--column';
	activityElem.style.backgroundImage =`url('${activity.activityPictureUrl}')`;
	let capitalizedName = activity.customerFirstName.charAt(0).toUpperCase() + activity.customerFirstName.slice(1);
	activityElem.innerHTML =
		`
		<h3 class="activity__pill">${pill}</h3>
		<h1 class="activity__text">${capitalizedName} is ${_randomPhraseGenerator()} ${activity.activityTitle}</h1>
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
