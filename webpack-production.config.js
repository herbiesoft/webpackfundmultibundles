var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config.js');
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
};

devConfig.module.rules.push(stripLoader)

module.exports = devConfig;

/*
pulls in the basic config file, and then sets up a new rule which is
pushed onto the devConfig under the rules node. 

Depending on how the config file is structured, you may have to traverse different node paths. 
*/