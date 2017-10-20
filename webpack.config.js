/**
 * Created by shefenfei on 2017/10/19.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    //1, 单个入口
    entry: './src/index.js',

    // entry: {
    //     app: './src/index.js',
    //     print: './src/print.js'
    // },

    //输出
    output: {
        // filename: "bundle.js",
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    } ,

    //建立一个开发环境，使我们的开发变得更容易一些。 inline-source-map 不要用在生产环境
    devtool: 'inline-source-map',
    //配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    devServer: {
        contentBase: './dist',
        compress : true,
        port: 9999
    },


    //加载器
    module: {
        rules: [
            //加载css样式
            {
                test: /\.css$/,
                use: [
                    'style-loader' ,
                    'css-loader'
                ]
            },

            //加载.js 或 jsx 的数据
            {
                test : /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['react' , 'es2015']
                        }
                    },
                ]

            },

            //加载图片
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use : {
                    loader: "file-loader"
                }
            },

            //加载字体
            {
                test : /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: "file-loader"
                }
            },

            //加载数据 json , xml ,tsv
            {
                test: /\.xml$/,
                use:{
                    loader: "xml-loader"
                }
            }
        ]
    },

    plugins: [
        //清理 输出目录中的不需要的资源
        new CleanWebpackPlugin(['dist']),
        //自动加载bundle.js到 index.html中
        new HtmlWebpackPlugin({
            title: 'OutPut manager' ,
            template : './src/index.html'
        }),
        //清除没有使用到函数
        new UglifyjsWebpackPlugin()
    ],


};