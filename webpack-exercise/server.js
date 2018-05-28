const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const cc = webpack(config);

// code for middleware to work
app.use(webpackDevMiddleware(cc, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('HAL 9000 is listening on port 3000!\n');
});
