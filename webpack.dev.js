const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
	mode: "development",
	devtool: "eval-source-map",
	devServer: {
		static: "./dist",
		open: true,
		hot: true,
		port: 8080,
		watchFiles: ["src/**/*"],
		liveReload: false,
	},

	plugins: [new webpack.HotModuleReplacementPlugin()],
});
