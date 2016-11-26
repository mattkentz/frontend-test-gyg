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
	});

	describe('place function', function () {

		beforeEach(function () {
			spyOn(window.google.maps, 'Marker');
		});

		it('should create place a market on the map', function () {
			let mapObj = {
				coordinates: [23, 45]
			};
			map.placeMarker(mapObj, 25, 30)
			expect(window.google.maps.Marker).toHaveBeenCalledWith({
					position: {lat: 25, lng: 30},
					map: mapObj
				}
			);
		});
	})
})
