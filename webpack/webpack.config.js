const { merge } = require("webpack-merge");
const commonConfig = require("../webpack.common.js");

module.exports = (envvars) => {
  const { env } = envvars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(envConfig, commonConfig);
  return config;
};
