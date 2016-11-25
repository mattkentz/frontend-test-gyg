var path = require('path');

module.exports = function (config) {
	config.set({
		browsers: ['Chrome'],
		coverageReporter: {
			reporters: [
				{type: 'html', subdir: 'html'},
				{type: 'lcovonly', subdir: '.'},
			],
		},
		files: [
			'tests.webpack.js',
		],
		frameworks: [
			'jasmine',
		],
		preprocessors: {
			'tests.webpack.js': ['webpack', 'sourcemap'],
		},
		reporters: ['progress', 'coverage'],
		webpack: {
			cache: true,
			devtool: 'inline-source-map',
			module: {
				preLoaders: [
					{
						test: /-test\.js$/,
						include: /src/,
						exclude: /(bower_components|node_modules)/,
						loader: 'babel',
						query: {
							cacheDirectory: true,
						},
					},
					{
						test: /\.js?$/,
						include: /src/,
						exclude: /(node_modules|bower_components|__tests__)/,
						loader: 'babel-istanbul',
						query: {
							cacheDirectory: true,
						},
					},
				],
				loaders: [
					{
						test: /\.js$/,
						include: path.resolve(__dirname, '../src'),
						exclude: /(bower_components|node_modules|__tests__)/,
						loader: 'babel',
						query: {
							cacheDirectory: true,
						},
					},
					{
						test: /\.scss$/,
						exclude: /(bower_components|node_modules|__tests__)/,
						loaders: ["style", "css", "sass"]
					},
				],
			},
		},
	});
};
