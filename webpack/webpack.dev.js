const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devserver: {
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshPlugin()],
};
