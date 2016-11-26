# frontend-test-gyg
A development test given to Frontend Engineers.

## Instructions
- Open the zip file or clone the git repo
- From the project root folder, run the following in the terminal:
	- `npm install` to install dependencies
	- `npm run build` to build the project and start the http-server
	- `npm run test` to run the Unit Tests
	- `npm run build:dev` to build the project with unminified code
	- `npm run build:prod` to build the production version of the project

## Notes & Assumptions
`Developed and tested using Node v6.2.2 + npm v3.10.6`

Since the app is not very complex, I decided to build it without using any frameworks or libraries
in order to reduce the amount of code being shipped (minified 252B vs React's 133KB).
That being said, I have used ES6 and Webpack to structure the app into modules so that it
could easily be extended or even ported over to a framework at a later point.

Webpack was also used as a task runner as opposed to Grunt or Gulp using various loaders and plugins.

I implemented some basic unit tests for the `map` module to show how I would approach them.
After running `npm run test` you can view the generated coverage report by opening `index.html`
in the `coverage` directory. I did not add more tests so I could focus on adding more features for this demo.

## Features
* Getting customer data
	* On page load the customer data is retrieved from the GetYourGuide API
	* New customer details are retrieved every 60 seconds
* Activity
	* Customer name and activity are added to the header including a dynamic message to join them together
	* Activity image is added as background for header
* Map
	* Added map using the Google Map API
	* On customer retrieval marker is added to the map to show customer location
* Nearby POI
	* Nearby points of interest are retrieved using the Google Map / Places API
	* Since user cannot interact, list of POIs is scrolled automatically
	* Last updated time

## Technical Features
* Webpack for module bundling and file concatenation
* Minification for production builds
* Babel to allow for ES6 integration with support for older browsers
* Used the Fetch API with XHR fallback plus ES6 Promises in order to get data from the APIs
* SASS used for styling
* Added normalize.css to reset styles
* Cache busted resources - JS and CSS files are appended with unique hash whenever file changes to bust browser cache
* Basic responsive code for smaller screens (try resizing Chrome window p.s. not working with responsive emulation)

## Further Improvements
* Caching using service workers and appcache as a fallback
* Add integration tests
* Better error handling for XHR requests
* Use server push technologies to push data to clients instead of polling every X seconds
* Loader or other fallback in case XHR requests are taking long or fail

