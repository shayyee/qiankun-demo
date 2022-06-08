const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        port: 8003,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    output: {
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
    },
};