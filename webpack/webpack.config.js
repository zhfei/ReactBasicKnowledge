const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    //项目的入口与出口设置
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [ //插件
        //在内存中生成一个页面，默认在项目的根目录下的内存中
        new htmlWebpackPlugin({
            //页面模板
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ]
}


