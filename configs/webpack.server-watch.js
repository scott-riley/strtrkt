const webpack = require("webpack");
const config = require("./webpack.server.js");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderConfig = 'modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss';
const webpackPostcssTools = require('webpack-postcss-tools');
const map = webpackPostcssTools.makeVarMap('src/global/main.css');

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

config.postcss = [
	webpackPostcssTools.prependTildesToImports,

	require('lost'),

	require('postcss-custom-properties')({
		variables: map.vars
	}),

	require('postcss-custom-media')({
		extensions: map.media
	}),

	require('postcss-custom-selectors')({
		extensions: map.selector
	}),

	require('postcss-calc')()
];

module.exports = config;
