/**
 * Created by wenming on 26/01/2017.
 */
module.exports = {
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /\.json$/, exclude: /node_modules/, loader: 'json'}
        ]
    }
}
