const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: './index.ts',
    context: path.join(__dirname, 'src'),
    devServer: {
        host: 'localhost',
        publicPath: "/",
        contentBase: "./build",
        watchContentBase: true,
        noInfo: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 8087,
        stats: {
            colors: true
        }
    },
    output: {
        path: path.join(__dirname, "./"),
        filename: "bundle.js",
    },
    resolve: {
        modules: [
            path.resolve('./src/*'),
            path.resolve('./node_modules'),
        ],
        alias: {
            '~': path.resolve('./src'),
        },
        extensions: ['.js', '.ts',],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    "babel-loader",
                    "awesome-typescript-loader",
                ],
            },
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new MinifyPlugin(),
        new HtmlWebpackPlugin({template: "./templates/index.html",})
    ],
};
