module.exports = {
    entry: './static/js/app//components/contentItem/store.js',
    output: {
        path: __dirname + '/static/js',
        filename: "bundle.js"
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}