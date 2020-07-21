const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/assets/icons/favicon.png",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpeg|svg|gif)$/,
                use: ["url-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}