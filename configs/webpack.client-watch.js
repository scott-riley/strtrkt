var webpack = require("webpack");
var config = require("./webpack.client.js");
var hostname = process.env.HOSTNAME || "localhost";
var port     = 8080;
const cssLoaderConfig = 'modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader';

config.cache   = true;
config.debug   = true;
config.devtool = "eval-cheap-module-source-map";

config.entry.unshift(
	"webpack-dev-server/client?http://" + hostname + ":" + port,
	"webpack/hot/only-dev-server"
);

config.output.publicPath = "http://" + hostname + ":" + port + "/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false, __PRODUCTION__: false, __DEV__: true}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
];

config.module.loaders = [
	{
		test: /\.js$/,
		loaders: ["babel?cacheDirectory&presets[]=es2015&presets[]=stage-0&presets[]=react&presets[]=react-hmre"],
		exclude: /node_modules/
	}, {
			test: /\.css$/,
			loader: `style-loader!css-loader?${cssLoaderConfig}`,
	}
];

config.devServer = {
	publicPath: config.output.publicPath,
	hot:        true,
	inline:     false,
	lazy:       false,
	quiet:      true,
	noInfo:     true,
	headers:    {"Access-Control-Allow-Origin": "*"},
	stats:      {colors: true},
	host:       hostname
};

module.exports = config;
