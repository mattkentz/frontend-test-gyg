var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(bower_components|node_modules)/,
				loader: 'babel',
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass')
			},

			// JSON is not enabled by default in Webpack but both Node and Browserify
			// allow it implicitly so we also enable it.
			{
				test: /\.json$/,
				loader: 'json'
			},
			// "file" loader makes sure those assets end up in the `build` folder.
			// When you `import` an asset, you get its filename.
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				loader: 'file',
				query: {
					name: 'static/media/[name].[hash:8].[ext]'
				}
			},
			// "url" loader works just like "file" loader but it also embeds
			// assets smaller than specified size as data URLs to avoid requests.
			{
				test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: 'static/media/[name].[hash:8].[ext]'
				}
			}
		],
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	output: {
		libraryTarget: 'umd',
		library: 'getyourguide',
	},
	resolve: {
		extensions: [
			'',
			'.js',
		],
	},
};
