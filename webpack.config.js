const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");

const pages = path.resolve(__dirname, "src/pages");
const plugins = [
    new CopyPlugin({
        patterns: [
        { from: "./assets", to: "assets" }
        ],
      }),
    new MiniCssExtractPlugin({
        filename : "css/[name].css"
    })
];
const templates = [];

fs.readdirSync(pages).forEach((page) => {
    fs.readdirSync(path.resolve(__dirname, pages, page)).forEach((item) => {
        if (item.match(/\.pug$/i)) {
            const folder = item.replace(/\.pug$/i, "");
            templates.push(new HtmlWebpackPlugin({
                filename: item.replace(/\.pug$/i, '.html'),
                template: pages + `/${folder}/` + item,
                inject: false,
                minify: {
                    collapseWhitespace: false
                },
          }));
        }  
    })
  });

module.exports = {
    target : "web",
    context : path.resolve(__dirname, "src"),
    mode : "development",
    entry : {
        main : "./index.js",
        index : {
            import : "./pages/index/index.js",
            filename : "./js/pages/index/index.js"
        },
        roomDetails : {
            import : "./pages/room-details/room-details.js",
            filename : "./js/pages/room-details/room-details.js"
        },
        searchRoom : {
            import : "./pages/search-room/search-room.js",
            filename : "./js/pages/search-room/search-room.js"
        },
        signIn : {
            import : "./pages/sign-in/sign-in.js",
            filename : "./js/pages/sign-in/sign-in.js"
        },
        signUp : {
            import : "./pages/sign-up/sign-up.js",
            filename : "./js/pages/sign-up/sign-up.js"
        }
    },
    output : {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname, "dist"),
        clean : true
    },
    devServer : {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        port : 5500,
        hot: false,
        open: true
    },
    plugins : templates.concat(plugins),
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
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [
                                [
                            "postcss-preset-env",
                                ],
                            ],
                        },
                    },
                },
                {
                    loader : "sass-loader",
                }]
            },
            {
                test: /\.pug$/,
                use : [
                    {
                        loader: 'pug-loader',
                        options : {
                            pretty: true 
                        }
                    }
                ]
            },
            {
                test: /\.js?$/,
                use : [
                    {
                        loader: 'babel-loader',
                        options : {
                            exclude: /node_modules/,
                        }
                    }
                ]
            }
        ],
    },
};