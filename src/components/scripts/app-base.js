import {ReduxAppBase} from 'next-react-redux';
import {message, notification} from 'antd';

// next plugins:
import 'next-camelize';

export default class extends ReduxAppBase {
  static notify(inMsg, inType) {
    notification[inType || 'info']({
      message: 'notify',
      description: inMsg
    });
  }

  static msg(inMsg, inType) {
    message[inType || 'info'](inMsg);
  }
}