var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ExtractTextPlugin('css/app.css'),
    new VueLoaderPlugin(),
  ],
  externals: {
    'vue': 'Vue',
  },
};
