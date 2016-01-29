var webpack = require('webpack');
var version = require("./package.json").version;
var banner =
    "/**\n" +
    " * vue-image-loader v" + version + "\n" +
    " * https://github.com/eduardostuart/vue-image-loader\n" +
    " * MIT License\n" +
    " */\n";

module.exports = {
    entry: './src/main.js',
    output: {
        path:'./dist',
        filename: 'vue-image-loader.js',
        library: 'VueImageLoader',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin(banner, {raw: true})
    ],
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