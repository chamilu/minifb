const { resolve } = require('path');

const sourceDir = resolve(__dirname, './src');
const publicDir = resolve(__dirname, './public');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: resolve(sourceDir, 'index.js'),
  output: {
    path: resolve(publicDir, './dist'),
    filename: 'bundle.js'
  }
};
