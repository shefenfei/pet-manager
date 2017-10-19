/**
 * Created by shefenfei on 2017/10/19.
 * 通用的配置
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    //入口文件
    entry: {
        app: './src/index.js'
    },

    //输出
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist")
    } ,

    //插件
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Pet-Manager'
        })
    ],

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
    }
};