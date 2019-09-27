const path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: ["./utils.js", "./app.js"],
    output: {
        filename: "bundle.js",
        path: path.resolve('dist/') ,
        publicPath: 'public/assets/'
    },
    mode: 'development',
    optimization: {
        minimize: true  //Set to false to not minimize the bundle. Default is to bundle.
    },
    watch: true,
    devtool: 'eval-source-map',
    devServer: {
        port: 3000,
        host: `localhost`,
        disableHostCheck: true,
        contentBase: 'public'
    },
    module:{
        rules:[
            {
                test: [/\.es6$/,/\.js$/],
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                  emitWarning: true,
                  configFile: './.eslintrc'
                  
                }
              },
            {
                test: [/\.es6$/,/\.js$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: ['*','.js','.es6']
    }
}
