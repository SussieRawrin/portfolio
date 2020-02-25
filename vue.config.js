
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin');


const path = require('path');

module.exports = {

  // assetsDir: './static',
  productionSourceMap: false,

  configureWebpack: {

    plugins: [

      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
      }),
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, './static'),
          to: 'static',
          ignore: ['.*'],
        },
      ]),
    ],
  },

  chainWebpack(config) {
    config.plugins.delete('prefetch');

    config.plugin('CompressionPlugin').use(CompressionPlugin);
  },
};
