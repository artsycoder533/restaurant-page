const path = require("path");

module.exports = {
	mode: "Development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
};
