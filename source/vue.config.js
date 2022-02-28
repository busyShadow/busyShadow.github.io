const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    transpileDependencies: ['webpack-dev-server/client'],
    chainWebpack: config => {
        config.entry.app = ['babel-polyfill', './src/main.js'];
    },
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    productionSourceMap: false,
    configureWebpack: (config) => {
        if (process.env.NODE_ENV == "production") {
            config.mode = "production";
            let optimization = {
                minimizer: [
                    new UglifyPlugin({
                        uglifyOptions: {
                            warnings: false,
                            compress: {
                                drop_console: false,
                                drop_debugger: false,
                            },
                            safari10: true
                        },
                    }),
                ],
            };
            Object.assign(config, {
                optimization,
            });
        } else {
            config.mode = "development";
        }
    },
    devServer: {
        open: false
    },
};
