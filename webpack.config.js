var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProduction = process.env.NODE_ENV === "production";

console.log(process.env.NODE_ENV);
var entry = './app/main.js';

var basePlugins = [
    new ExtractTextPlugin("styles/[name].[chunkhash].css",{
        allChunks: true
    }),
    new HTMLWebpackPlugin({
        //title: 'tigermit crm React',
        template: 'app/index.html',
        //inject: 'body',
        //UICDN: isProduction ? 'http://cdn.test.com/' : '',
        ////assets: isProduction ? 'http://s.amazeui.org/assets/react' : '',
        //stat: isProduction,
        minify: isProduction ? {
            removeComments: true,
            collapseWhitespace: true
        } : null
    }),
    //new CopyWebpackPlugin([{
    //    from : path.join('app','views'),
    //    to : path.join(__dirname,'views')
    //}])
];
var buildPlugins = [
    new CleanWebpackPlugin('dist/'),
    //new webpack.optimize.CommonsChunkPlugin('common', 'common.js')

];
var devPlugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];
module.exports = {
    debug : !isProduction,
    devtool : !isProduction ? "source-map" : null,
    entry : entry,
    output : {
        path : path.join(__dirname,'dist'),
        filename : 'scripts/[name].[hash].js',
        chunkFilename : '[id].chunk.js',
        publicPath : !isProduction ? '' : '//cnd.test.com/dist'
    },
    module : {
        //preLoaders: [
        //    {
        //        test: /\.(js|jsx)$/,
        //        loader: 'eslint',
        //        exclude: /node_modules/
        //    }
        //],
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loaders: ['babel?presets[]=es2015']
            },
            //{
            //    test : /\.html$/,
            //    exclude : /node_modules/,
            //    loader : 'raw'
            //},
            {
                test: /\.(png|jpeg|gif|jpg)$/,
                loader: 'url?limit=8192&name=images/[name].[hash].[ext]'
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[hash].[ext]'
            },
            {
                test : /\.css/,
                loader : ExtractTextPlugin.extract("style",!isProduction ? "css?sourceMap!postcss?sourceMap!less?sourceMap" : 'css!postcss!less')
            },
            {
                test : /\.less$/,
                loader : ExtractTextPlugin.extract("style",!isProduction ? "css?sourceMap!postcss?sourceMap!less?sourceMap" : 'css!postcss!less')
            }
        ]
    },
    plugins : isProduction ? buildPlugins.concat(basePlugins) : devPlugins.concat(basePlugins),
    postcss : [autoprefixer({browsers: ['> 1%', 'last 2 versions']})],
    externals: {//不被打包的项目
        "angular": "angular"
    }
    //eslint: {
    //    configFile: '.eslintrc'
    //}
};