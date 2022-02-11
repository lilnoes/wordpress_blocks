// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaultConfig,
  entry: {
    paragraph: "./src/extends/paragraph/index.js",
    codeHighlight: "./src/blocks/code_highlight/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
};
