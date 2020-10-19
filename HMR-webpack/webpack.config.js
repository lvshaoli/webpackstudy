const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
   const config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        // hot: true
        hotOnly: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorial',
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin() 
    ]

   }

   if (env === 'production') {
       config.mode = 'production'
       config.devtool = false

       config.plugins = [
        ...config.plugins,
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: 'public'
                }
            ]
        })
       ]
   }

   return config
}