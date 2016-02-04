var webpack = require("webpack");
var config = require("./webpack.server.js");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderConfig = '-autoprefixer&modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader';

config.cache   = true;
config.debug   = true;

config.entry.unshift(
	"webpack/hot/poll?1000"
);

config.plugins = [
	new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: false, __DEV__: true}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new ExtractTextPlugin('app.css', {allChunks: true}),
];

config.module.loaders = [
	{
		test: /\.js$/,
		loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=stage-0&presets[]=react&presets[]=react-hmre"],
		exclude: /node_modules/
	}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('css-loader?' + cssLoaderConfig),
	}
];

module.exports = config;
