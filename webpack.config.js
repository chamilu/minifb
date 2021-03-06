const { resolve } = require('path');

const sourceDir = resolve(__dirname, './src/app');
const publicDir = resolve(__dirname, './public');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: resolve(sourceDir, 'index.js'),
    output: {
        path: resolve(publicDir, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 3000,
        contentBase: './public',
        historyApiFallback: true,
    },
};
