const { defineConfig } = require("cypress");
const webpackConfig = require('./webpack.test.config')

module.exports = defineConfig({
  component: {
    fixturesFolder: false,
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig
    },
  },
});
