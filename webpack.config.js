const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    context : path.resolve(__dirname, "src"),
    mode : "development",
    entry : {
        main : "./index.js"
    },
    output : {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname, "dist"),
        clean : true
    },
    devServer : {
        static: {
            directory: path.join(__dirname, 'src'),
          },
        port : 5500
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : "index.html" ,
            template : "./index.pug",
            inject : false,
            minify: {
                collapseWhitespace: false
            }
        }),
        new CopyPlugin({
            patterns: [
              { from: "./assets", to: "assets" },
              { from: "./js/components", to: "js/components" },
            ],
          }),
        new MiniCssExtractPlugin({
            filename : "css/[name].css"
        })
    ],
    module : {
        rules : [
            {
                test : /\.scss$/,
                use : [
                MiniCssExtractPlugin.loader, 
                {
                    loader : "css-loader",
                    options : {
                        url : false
                    }
                },
                {
                    loader : "sass-loader",
                }]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options : {
                    pretty: true 
                }
            },
        ],
    },
};