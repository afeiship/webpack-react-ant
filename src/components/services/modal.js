
import AppBase, {$config, $route} from 'components';

export default class {
  static show(inKey) {
    AppBase.command(`modal.${inKey}`, true);
  }

  static hide(inKey) {
    AppBase.command(`modal.${inKey}`, false);
  }
}
