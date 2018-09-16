
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude:/(node_modules)/,
            loader: 'babel-loader'
        }],
    }
}