import {ReduxAppBase} from 'next-react-redux';
import {message, notification} from 'antd';

// next plugins:
import 'next-camelize';
import 'next-param';
import 'next-range';
import 'next-timeago';
import 'next-ant-build-items';
import 'next-ant-fields-value';
import 'next-key-map';

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