var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'build.js'
    },
    module: {
        rules: [
            { test: /\.json/, loader: 'json-loader' },
            {
                test: /\.(jade|pug)$/,
                loader: 'pug-html-loader',
                // loaders: ['html-loader', 'pug-html-loader?exports=false']
            },
            {
                test:   /\.html$/,
                loader: 'html-loader',
                query:  {
                    minimize: true,
                    root: path.resolve(__dirname, 'static'),
                },
            },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test:    /\.js$/,
                loader:  'babel-loader',
                exclude: /node_modules/
            },
            {
                test:    /\.(png|jpg|gif|svg)$/,
                loader:  'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo:             true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8081/',
                secure: false
            }
        }
    },

    plugins: [
        // new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'ENV': ENV,
        }),
        new webpack.ProvidePlugin({
            ng2now: 'ng2now',
            moment: 'moment',
            angular: 'angular'
        }),
    ],

    performance: {
      hints: process.env.NODE_ENV === 'production' ? "warning" : false
    },

    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}