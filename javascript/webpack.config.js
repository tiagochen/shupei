

var webpack = require('webpack');


console.log("开始监听");


module.exports = {
  entry: {
    page1 : ["./src/index.js"],
  },
  output: {
    path: "./",
    filename: 'dest.js',
    libraryTarget: 'var',
    library: 'AddonSupei_create',
  },
  external: {
    //'jquery': 'jQuery'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
    ]
  },
  plugins: [
    new webpack.DefinePlugin({})
  ]
}

