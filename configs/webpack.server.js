var webpack = require("webpack");
var path = require("path");
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModules = {};

fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	target:  "node",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: "source-map",
	entry:   ["../src/server"],
	output:  {
		path:          path.join(__dirname, "../dist"),
		filename:      "server.js"
	},
	plugins: [
		new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
		new ExtractTextPlugin('app.css', {allChunks: true}),
	],
	module:  {
		loaders: [
			{
				test: /\.json$/,
				loaders: ["json"]
			},
			{
				test: /\.js$/,
				loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
	 			loader: ExtractTextPlugin.extract("style", "css")
			}
		],
		noParse: /\.min\.js/
	},
	externals: nodeModules,
	resolve: {
		modulesDirectories: [
			"src",
			"node_modules",
			"web_modules"
		],
		extensions: ["", ".json", ".js", ".css"]
	},
	node:    {
		__dirname: true,
		fs:        'empty'
	}
};
