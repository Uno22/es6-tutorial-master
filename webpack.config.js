var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './js/main.js',
        ratefinder: './js/ratefinder.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader?cacheDirectory=true'
              }
            }
          ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}