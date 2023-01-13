const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry:["@babel/polyfill","./src/index.jsx"],
    mode:"development",
    output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].[hash].js"
},
resolve:{
  extensions:['.json','.js','.jsx']
},
plugins:[
new HtmlWebpackPlugin({template:"./src/index.html"}),
new CleanWebpackPlugin()
],
module:{
    rules:
    [
        {
            test:/\.(css|sass|scss)$/,
            use:['style-loader','css-loader','sass-loader']
        },
        {
            test:/\.(jpg|jpeg|png)$/i,
            use:['file-loader']
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.m?jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },

    ]
},
devServer:{
port:3000,
compress:true,
hot:true
}
}