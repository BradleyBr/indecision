const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/main.js'],
    output: {
        path: path.resolve(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env'],
                    plugins: ['transform-object-rest-spread', 'transform-class-properties']
                }
            }
        },
        {
            test: /\.s?css$/,
            use : [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    devServer: {
        contentBase:[
            path.resolve(__dirname, 'public'),
            path.resolve(__dirname, 'public/css')
        ],
        publicPath: '/scripts/'
    },
    devtool: 'cheap-module-eval-source-map'
}