const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, "static_src", "index.js"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, "static_src"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/env'],
                }
            },
        ],
    },
};