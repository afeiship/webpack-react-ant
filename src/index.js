import 'assets/styles/index.scss';
import {ReduxBoot} from 'next-react-redux';
import App from './app';
import {$config} from 'components';


ReduxBoot.run(App, 'app', {
  prefix: $config.STORE_PREFIX
});
