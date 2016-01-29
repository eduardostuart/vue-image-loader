var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'dist/vue-image-loader.js',
        library: 'VueImageLoader',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
}