const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.imooc$/,
                use: [path.resolve(__dirname, './loader/imooc-loader.js')]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner: '鲁a济南车，鲁b青岛的，鲁屙不晓得'
        })
    ]
};