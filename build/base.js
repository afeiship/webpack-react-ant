import config from './config';
import {loaders, plugins, configs, inputs, outputs, utils} from 'webpack-app-kits';
import 'next-flatten';


export default (inEnv) => {
  const {mode, type} = inEnv;
  const {libs, publicPath} = config[type || mode];

  return {
    mode,
    entry: inputs.spa(),
    output: outputs.spa({publicPath}),
    resolve: {
      alias: configs.alias(),
      extensions: configs.extensions()
    },
    module: {
      rules: nx.flatten(
        [
          loaders.babel(),
          loaders.environment({mode}),
          loaders.css(),
          loaders.sass(),
          loaders.mp34(),
          loaders.image(),
          loaders.font()
        ]
      ),
    },
    externals: configs.externals.react(),
    optimization: configs.optimization(),
    performance: configs.performance(),
    plugins: nx.flatten(
      [
        plugins.moduleConcatenation(),
        plugins.singleHtml({libs}),
        plugins.extractText(),
        plugins.dllRefrence({publicPath}),
        plugins.loaderOptions({mode}),
        plugins.provide()
      ]
    )
  }
};