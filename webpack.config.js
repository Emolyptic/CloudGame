'use strict';

var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

var config = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        hot: true,
        inline: true
    },
    performance: {
        hints: false
    },
    context: __dirname,
    entry: {
        index: [
            'babel-polyfill',
            './Src/index.js'
        ]
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
        path: __dirname + "/Bundles",
        publicPath: "http://localhost:8080/Bundles/"
    },
    externals: {},
    module: {
        rules: [
            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'raw-loader'
            },
            {
                test: /\.(glsl|frag|vert)$/,
                loader: 'glslify-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        baseConfig: {
                            extends: [require.resolve('./esLintConfig.js')],
                        },
                        ignore: false,
                        useEslintrc: false
                    }
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: ['lodash'],
                        presets: ['react-app', 'stage-3']
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [require('autoprefixer')()]
                        }
                    }
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [require('autoprefixer')()]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules/']
                        }
                    }
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    'url-loader?limit=10000'
                ],
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            }
        }),

        new WebpackNotifierPlugin()
    ],

};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    );
    /*
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
    */
} else {
    config.devtool = 'cheap-module-source-map';
}

module.exports = config;
