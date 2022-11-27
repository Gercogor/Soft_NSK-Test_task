const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({develop}) => ({
  mode: develop ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  optimization: {
    minimizer: [
        new CssMinimizerPlugin({
            test: /\.foo\.s?css$/i,
          }),
      ],
    },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
      }),
      new MiniCssExtractPlugin({
          filename: './src/styles/[name].css',
          chunkFilename: './src/styles/[id].css',
      }),
  ],
  module: {
      rules: [
          {
              test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
              type: 'asset/inline'
          },
          {
              test: /\.html$/i,
              loader: 'html-loader'
          },
          {
              test: /\.s?css$/i,
              use: [
                MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
              ]
          }
        ]
    },
  ...devServer(develop),
});