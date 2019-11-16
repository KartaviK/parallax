const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './index.ts',
    context: path.join(__dirname, 'src'),
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
        extensions: ['.ts'],
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./templates/index.html",
        }),
    ],
};
