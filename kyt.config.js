
module.exports = {
    reactHotLoader: true,
    modifyWebpackConfig: (baseConfig) => {
        // Fixes issue preventing importing of fs node module
        // https://github.com/pugjs/pug-loader/issues/8#issuecomment-55568520
        baseConfig.node.fs = 'empty';
        return baseConfig;
    }
};
