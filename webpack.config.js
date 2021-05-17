const path = require("path");
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, "static_src", "index.js"),
    output: {
        path: path.resolve(__dirname, "static", "build"),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.join(__dirname, "static_src"),
        port: 9000,
        watchContentBase: true,
        progress: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /.(scss|css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
};