/**
 * Created by shefenfei on 2017/10/19.
 * 开发环境
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common , {
    devtool : 'inline-source-map',
    devServer: {
        contentBase : './dist',
        port : 9999
    }
});