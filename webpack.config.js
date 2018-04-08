var webpack = require('webpack');


module.exports = {
    //插件项
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devtool: 'eval-source-map',
    //页面入口文件配置
    entry: {
        index: __dirname + '/public/javascripts/main.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/public/javascripts',
        filename: 'bundle.js'
    },
    module: {
        //loaders加载器
        rules: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                use: 'babel-loader'//loader的名称（必须）
            },
            { test: /\.css$/, use: 'style-loader!css-loader' },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=8192' },
        ]
    }
};