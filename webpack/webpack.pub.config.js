const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    //项目的入口与出口设置
    entry: path.join(__dirname, './src/index.js'),
    //app和vendors的key名称都是自己自定义的，随便取的
    // entry: {
    //     app: path.join(__dirname, './src/index.js'),
    //     vendors: ['jquery'] //把要抽离的第三方包放到这个数组中
    // }, 
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
        }),
        /*
            每次构建产物都要重新创建dist目录保存产物
        */
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:['dist']})
    ],

    /*
        抽离第三方包名称
        webpack3的在plugins数组中添加new webpack.optimize.CommonsChunkPlugin配置方式已经废弃，要在下面的方法进行实现
        webpack3实现方法
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', //指定抽离的入口
            filename: 'vendors.js' //抽离的所有第三方包的结果包名称。
        })
        webpack5设置无效，先注释
    */
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //         }
    //     }

    // },

    /*
        webpack默认只能打包处理以.js结尾的模块。其他非.js后缀名结尾的模块，webpack默认是不处理的。
        需要调用loader加载器才可以正常打包，loader加载器的作用：协作webpack打包处理约定的文件模块。比如：css-loader: 可以打包处理.css相关的文件。
        产物图片优化：
        把项目中的所有图片在产物中放到一个images文件夹下面
        { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]' },
        
    */
    module: {
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] },
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000&name=images/[hash:8]-[name].[ext]' },
            // { test: /\.js$/, use:'babel-loader', exclude: /node_modules/ },
        ]
    }
}


