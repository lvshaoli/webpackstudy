const HtmlWebpackPlugin = require('html-webpack-plugin')
const allModules = [
    'eval',
    'cheap-eval-source-map',
    // 'cheap-module-eval-source-map',
    'eval-source-map',
    'cheap-source-map',
    'cheap-module-source-map',
    'inline-cheap-source-map',
    'inline-cheap-module-source-map',
    'source-map',
    'inline-source-map',
    'hidden-source-map',
    'nosources-source-map'
]

const modules = allModules.map(item => {
    return {
        devtool: item,
        mode: 'none',
        entry: './src/main.js',
        output: {
            filename: `js/${item}.js`
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: `${item}.html`
            })
        ]
    }
})

module.exports = modules