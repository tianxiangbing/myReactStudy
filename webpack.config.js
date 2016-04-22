var path = require("path");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//app:'./app/app.jsx'
module.exports= {
    entry:
    {
        app:['./app/app.jsx']
    },
    output:{
        path: path.resolve(__dirname, "dist"),
        publicPath: "/assets/",
        filename:'[name].js'
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components"],
        extensions: ['', '.js', '.jsx','css']
    },
    module:{
        loaders:[
            {
                jsx:/\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader:["babel"],
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    plugins: [
        //commonsPlugin
    ]
}