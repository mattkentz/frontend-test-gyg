const customer = {
	fetchData: fetchData
};

function fetchData() {
	if (self.fetch) {
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

	}
}

export default customer;
