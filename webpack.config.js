
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
//exprot 
module.exports = {
    entry:'./js/main.js',
    output:{
        // path:path.resolve(__dirname,'public'),
        // filename:'main.js',
        clean:true
    },

    module:{
        rules:[
            {
                test: /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test:/\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns:[
                { from:'static' }
            ]
        })
    ],
    devServer:{
        host:'localhost'
    }
}