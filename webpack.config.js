var path = require('path');
var webpack = require('webpack');
module.exports = {     
    entry: "./public/index.js",
    output: {      
      filename: "./public/bundle.js"        
    },
    module: {
      loaders: [
        {
          // "test" is commonly used to match the file extension
          test: /\.js$/,
          exclude: /node_modules/,  
          loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
          query: {presets:['react','es2015']}    
        },
        {
            test: /(\.css)$/, loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'
        },
        {
            test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }

      ]
  },
  plugins: [
              new webpack.ProvidePlugin({
                  jQuery: 'jquery',
                  jquery: 'jquery',
                  $: 'jquery'
              })
            ]
}


