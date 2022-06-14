module.exports = {
    webpack: (config) => {
        config.output.library = 'app-react';
        config.output.libraryTarget = 'umd';
        // config.output.publicPath = '//localhost:8003/';
        return config;
    },
    devServer: (config) => {
        config.headers = {
            'Access-Control-Allow-Origin': '*'
        }
        return config;
    }
}
