const path = require('path');

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: 'production',
  entry: {
    main: './src',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    // Instruct webpack not to obfuscate the resulting code
    minimize: false,
    // splitChunks: false,
    splitChunks: {
      minSize: 0,
    },
  },
  context: __dirname,
};

module.exports = config;
