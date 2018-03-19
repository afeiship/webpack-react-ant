import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Badge} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import AppBase, {$api, $store} from 'components/scripts/index';

export default class extends Component {

  _onToggle = () => {
    const {sidebarCollapsed} = AppBase.$.memory;
    AppBase.$.memory = {
      sidebarCollapsed: !sidebarCollapsed
    }
  };

  render() {
    const {sidebarCollapsed} = AppBase.$.memory;
    return (
      <Header className="rel lrfix_ bg-f">
        <div className="webkit-sassui-transform-center-y l0 abs left">
          <button
            className="bdn px14 bdr-5 radius-l0 abs webkit-sassui-transform-center-y opactiy-bg-text-5 hlh-40 bg-0 c-f f14"
            onClick={this._onToggle}>
            <Icon
              className="trigger"
              type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
            />
          </button>
        </div>
        <div className="right">
          <Icon type="user"/>
          <span className="mr10">Hello Admin</span>
          <a href="#">Logout</a>
        </div>
      </Header>
    )
  }
}
