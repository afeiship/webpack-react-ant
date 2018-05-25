// shared config (dev and prod)
import webpack from 'webpack';
import {resolve, join} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import ScriptsInjectorPlugin from 'scripts-injector-webpack-plugin';
import AntdSorterWebpackPlugin from 'antd-sorter-webpack-plugin';
import {argv} from 'yargs';
import config from '../config.json';

const argEnv = argv.env || 'dev';
const extractCss = new ExtractTextPlugin('styles/[name]-[hash].css');
const extractAntd = new ExtractTextPlugin('antd/[name]-[hash].css');

export default {
  context: resolve(__dirname, '../src'),
  entry: {
    'app': './index.js',
    'antd': `./assets/styles/antd/customize_${argEnv}.less`
  },
  output: {
    filename: '[name]-[hash:6].bundle.js',
    path: resolve(__dirname, '../dist'),
    publicPath: config[argEnv].publicPath,
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
    alias:{
      admin: resolve(__dirname, '../src/admin')
      assets: resolve(__dirname, '../src/assets'),
      images: resolve(__dirname, '../src/assets/images'),
      data: resolve(__dirname, '../src/assets/data'),
      components: resolve(__dirname, '../src/components'),
      styles: resolve(__dirname, '../src/components/styles'),
      views: resolve(__dirname, '../src/components/views'),
      interceptors: resolve(__dirname, '../src/components/interceptors'),
      services: resolve(__dirname, '../src/components/services'),
      scripts: resolve(__dirname, '../src/components/scripts'),
      mixins: resolve(__dirname, '../src/components/mixins'),
      modals: resolve(__dirname, '../src/components/modals'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: [
          resolve(__dirname, "../src"),
          resolve(__dirname, "../node_modules/mixin-decorator"),
          resolve(__dirname, "../node_modules/react-dynamic-router")
        ]
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.scss$/,
        loader: 'import-glob-loader',
        enforce: "pre"
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: extractAntd.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'less-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          name: 'assets/images/[name]-[hash:4].[ext]',
          limit: 8192
        }
      },
      {
        test: /\.(woff|eot|ttf)\??.*$/,
        loader: 'url-loader',
        options: {
          name: 'assets/fonts/[name]-[hash:4].[ext]',
          limit: 8192
        }
      },
      {
        test: /\.(json)\??.*$/,
        loader: 'url-loader',
        options: {
          name: 'assets/data/[name]-[hash:4].[ext]',
        }
      }
    ],
  },
  plugins: [
    new ScriptsInjectorPlugin({
      replacer: '<!--APP_LOADER-->',
      path: resolve(__dirname, '../src/components/others/app-loader.html')
    }),
    extractAntd,
    extractCss,
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      nx: 'next-js-core2',
      mixin: 'mixin-decorator',
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve(__dirname, '../dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.ejs'),
      favicon: resolve(__dirname, '../src/assets/images/favicon.ico'),
      title: 'Hot Module Replacement',
      libs: config[argEnv].libs
    }),
    new AntdSorterWebpackPlugin(),
    new AddAssetHtmlPlugin({
      includeSourcemap: false,
      filepath: resolve(__dirname, '../dist/vendors/vendors.*.js')
    }),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common-[hash].min.js',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: [
            autoprefixer({
              browsers: [
                'last 2 version',
                'Explorer >= 10',
                'Android >= 4'
              ]
            })
          ]
        },
        img: {
          gifsicle: {
            interlaced: false
          },
          mozjpeg: {
            progressive: true,
            arithmetic: false
          },
          optipng: false, // disabled
          pngquant: {
            floyd: 0.5,
            speed: 2
          },
          svgo: {
            plugins: [
              {
                removeTitle: true
              },
              {
                convertPathData: false
              }
            ]
          }
        }
      }
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
