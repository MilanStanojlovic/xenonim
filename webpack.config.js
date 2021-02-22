const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js$|jsx|ts|tsx)/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [{ loader: "file-loader" }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ],
  },

  mode: 'development',

  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true
  },

  performance: {
    hints: false
  },
}