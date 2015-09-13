import webpack from "webpack";
import pkg from "./package.json";
var banner = `
	${pkg.name} - ${pkg.description}
	Author: ${pkg.author}
	Version: v${pkg.version}
	Url: ${pkg.homepage}
	License(s): ${pkg.license}
`;

export default {
	output: {
		library: pkg.name,
		libraryTarget: "umd",
		filename: `${pkg.name}.js`
	},
	devtool: "#inline-source-map",
	externals: [
		{
			lodash: {
				root: "_",
				commonjs: "lodash",
				commonjs2: "lodash",
				amd: "lodash"
			}
		}
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					compact: false
				}
			}
		]
	},
	plugins: [
	 new webpack.BannerPlugin( banner )
	]
};
