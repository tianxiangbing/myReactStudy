var path = require("path");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//app:'./app/app.jsx'
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractSass = new ExtractTextPlugin('css/[name].css');
module.exports = {
    devtool: "source-map",
    entry: {
        app: ['./app/app.jsx']
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"],
        extensions: ['', '.js', '.jsx', 'css', 'scss']
    },
    module: {
        loaders: [
            {
                jsx: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.scss$/,
                loader:ExtractSass.extract('style-loader','css?sourceMap!sass?includePaths[]='+ path.resolve(__dirname, 'app/scss'))
            }
        ]
    },
    plugins: [
        //commonsPlugin
        ExtractSass
    ]
}