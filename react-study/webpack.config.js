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
        /*
            html-webpack-plugin的作用有2个：
            1.自动将./src/index.html页面复制一份到项目根目录，放到了内存中。
            2.在内存中自动生成的index.html页面里，自动注入webpack打包的存在于内存中的bundle.js文件
        */
        new htmlWebpackPlugin({
            //页面模板
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    /*
        webpack默认只能打包处理以.js结尾的模块。其他非.js后缀名结尾的模块，webpack默认是不处理的。
        需要调用loader加载器才可以正常打包，loader加载器的作用：协作webpack打包处理约定的文件模块。比如：css-loader: 可以打包处理.css相关的文件。
    */
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=500000' },
            // { test: /\.js$/, use:'babel-loader', exclude: /node_modules/ },
        ]
    }
}


