const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"), // Entry point
  output: {
    path: path.resolve(__dirname, "build"), //output folder for budle.js
    filename: "bundle.js", //filename
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //do not require to add extension while importing
  },
  mode: "development", //mode development | production
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
