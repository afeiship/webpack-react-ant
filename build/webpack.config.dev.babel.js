// development config
import {resove, join} from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import {resolve} from 'path';
import commonConfig from './webpack.config.common.babel';
import {dev, port} from '../config.json';

export default merge(commonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //devtools:
  devtool: 'source-map',
  devServer: {
    contentBase: [
      resolve(__dirname, '../dist'),
      resolve(__dirname, '../node_modules')
    ],
    hot: true,
    stats: 'errors-only',
    port,
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    host:'testadmin.treasurevision.cn',
    proxy: dev.proxy
  }
});
