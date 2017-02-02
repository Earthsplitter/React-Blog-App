/**
 * Created by wenming on 26/01/2017.
 */
const webpack = require('webpack');

module.exports = {
    entry: './index.js',

    output: {
        path: "public",
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json'}
        ],
        plugins: process.env.NODE_ENV === 'production' ? [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin()
        ] : []
    }
};
