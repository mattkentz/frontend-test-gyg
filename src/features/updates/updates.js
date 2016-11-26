import './updates.scss';

const updates = {
	mapUpdatesToDOM: mapUpdatesToDOM
};

function mapUpdatesToDOM(id, time) {
	let section = document.getElementById(id);
	section.innerHTML = '';
	section.appendChild(_createLastUpdatedTemplate(time));
}

function _createLastUpdatedTemplate(time) {
	let lastUpdatedElem = document.createElement('div');
	lastUpdatedElem.innerHTML = `<p class="updates__lastUpdated">Last Updated: ${time}</p>`;
	return lastUpdatedElem;
}

export default updates;
