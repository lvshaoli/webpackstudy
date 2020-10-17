const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

class MyPlugin {
    apply(compiler) {
        console.log('My Plugin 启动')
        compiler.hooks.emit.tap('MyPlugin', compilation => {
              for (const name in compilation.assets) {
                if (name.endsWith('.js')) {
                    const content = compilation.assets[name].source()
                    const withoutComments = content.replace(/\*\*+\*\*/g, '')
                    compilation.assets[name] = {
                        source: () => withoutComments,
                        size: () => withoutComments.length
                    }
                }
              }

        })
    }
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'main.js',
    },
    devtool: 'sourcemap',
    devServer: {
        contentBase: './public',
        proxy: {
            '/api': 'https://www.baidu.com',
            rewrite: {
                '^api': ''
            },
            changeOrigin: true
        }
    },
    module: {
        rules: [
            {
                test: /.md$/,
                use: [
                    'html-loader',
                    './markdown-loader'
                ]
            },
            {
                test: '/.html$/',
                use: 'html-loader'
            }
        ],
    },
    mode: 'none',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack lvshaoli',
            template: './template.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: './public/**'
        //         }
        //     ]
        // }),
        new MyPlugin()
    ]
}