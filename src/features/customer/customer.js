const customer = {
	fetchData: fetchData
};

function fetchData() {
	if (false) {
		return fetch('https://www.getyourguide.com/touring.json?key=2Gr0p7z96D')
			.then(
				function (response) {
					if (response.ok) {
						return response.json();
					} else {
						console.log('Response returned: ' + response.status);
					}
				}
			)
			.catch(function (error) {
				console.log('There has been a problem with your fetch operation: ' + error.message);
			}
		);
	} else {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://www.getyourguide.com/touring.json?key=2Gr0p7z96D');
			xhr.onload = function() {
				if (xhr.status == 200) {
					resolve(JSON.parse(xhr.response));
				}
				else {
					reject('An error has occurred: ' + xhr.status);
				}
			};
			xhr.send();
		})

	}
}

export default customer;
