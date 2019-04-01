import config from './config';
import path from 'path';
import { loaders, plugins, configs, inputs, outputs } from 'webpack-app-kits';
import 'next-flatten';

export default (inEnv) => {
  const type = inEnv ? inEnv.type : null;
  const mode = process.env.NODE_ENV;
  const { libs, publicPath } = config[type || mode];

  return {
    mode,
    entry: inputs.spa(),
    output: outputs.spa({
      publicPath
    }),
    resolve: {
      alias: configs.alias({
        '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../src/modules/app/icons.js')
      }),
      extensions: configs.extensions()
    },
    module: {
      rules: nx.flatten([
        loaders.babel(),
        loaders.environment(),
        loaders.css(),
        loaders.sass(),
        loaders.mp34(),
        loaders.image({ limit: 10 }),
        loaders.font()
      ])
    },
    externals: nx.mix(
      configs.externals.react(),
      configs.externals.moment(),
      configs.externals.antd()
    ),
    optimization: configs.optimization(),
    performance: configs.performance(),
    plugins: nx.flatten([
      plugins.bundleAnalyzer(),
      plugins.imagemin({
        mozJpeg: { quality: 75 },
        pngquant: { quality: '70-80' }
      }),
      plugins.banner(),
      plugins.semver(),
      plugins.moduleConcatenation(),
      plugins.singleHtml({ libs }),
      plugins.extractText(),
      plugins.dllRefrence({ publicPath }),
      plugins.loaderOptions(),
      plugins.provide()
    ])
  };
};
