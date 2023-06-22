module.exports = {
  /**
   * This is a placeholder entry point for Cypress CT
   */
  entry: './src/test.js',
  module: {
    rules: require('./webpack.test.rules'),
  },
};
