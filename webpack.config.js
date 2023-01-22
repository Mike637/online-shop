const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ESWebpackLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry:["@babel/polyfill","./src/index.jsx"],
    mode:"development",
    output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name][hash].js",
    assetModuleFilename:"[name][hash][ext]"
},
performance:{
  hints:false,
  maxAssetSize:512000,
  maxEntrypointSize:512000
},
resolve:{
  extensions:['.json','.js','.jsx']
},
plugins:[
new HtmlWebpackPlugin({template:"./src/index.html"}),
new CleanWebpackPlugin(),
new ESWebpackLintPlugin()
],
module:{
    rules:
    [
        {
            test:/\.(css|sass|scss)$/,
            use:['style-loader','css-loader','sass-loader']
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
          {
            test: /\.(png|jpg|gif|ico|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                context: ''
            }
        },
{
  test: /\.ttf$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name][hash].[ext]',
      },
    },
  ]
}
    ]
},
devServer:{
port:3000,
compress:true,
hot:true
}
}