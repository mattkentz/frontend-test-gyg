import map from './map';
import './google.mock';

describe('Map - ', function () {
	describe('init function', function () {

		beforeEach(function () {
			spyOn(window.google.maps, 'Map');
		});

		it('should create a map object with default parameters', function () {
			map.init();
			expect(window.google.maps.Map).toHaveBeenCalledWith(
				document.getElementById('map'),
				{
					zoom: 2,
					center: {lat: 50, lng: 20}
				}
			);
		});

		it('should create a map object with the specified parameters', function () {
			map.init({lat: 10, lng: 30}, 5);
			expect(window.google.maps.Map).toHaveBeenCalledWith(
				document.getElementById('map'),
				{
					zoom: 5,
					center: {lat: 10, lng: 30}
				}
			);
		});
	})
})
