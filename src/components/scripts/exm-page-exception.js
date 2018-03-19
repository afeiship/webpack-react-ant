import React, {Component} from 'react';
import classNames from 'classnames';
import ReactPageException from 'react-page-exception';
import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';


export default class extends Component {
  render() {
    const {className, children, ...props} = this.props;
    return (
      <ReactPageException
        title='404'
        align='middle'
        className="t375 webkit-sassui-transform-center-xy"
        img='https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg'
        actions={<Button type="primary" className="mt10">返回首页</Button>}/>
    );
  }
}
