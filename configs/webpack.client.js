const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaderConfig = 'modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss';
const webpackPostcssTools = require('webpack-postcss-tools');
const map = webpackPostcssTools.makeVarMap('src/global/main.css');

module.exports = {
	target:  "web",
	cache:   false,
	context: __dirname,
	debug:   false,
	devtool: "eval-cheap-module-source-map",
	entry:   ["../src/client"],
	output:  {
		path:          path.join(__dirname, "../static/dist"),
		filename:      "client.js",
		chunkFilename: "[name].[id].js"
	},
	plugins: [
		new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: true, __DEV__: false}),
		new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
		new ExtractTextPlugin('app.css', {allChunks: true}),
	],
	module:  {
		loaders: [
			{
				test: /\.json$/,
				loaders: ["json"]
			}, {
				test: /\.js$/, loaders: ["babel?presets[]=es2015&presets[]=stage-0&presets[]=react"],
				exclude: /node_modules/
			}, {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', `css-loader?${cssLoaderConfig}`)
      }
		],
		noParse: /\.min\.js/
	},
	postcss: [
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
  ],
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
