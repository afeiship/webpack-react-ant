import React, {Component} from 'react';
import classNames from 'classnames';
import {Layout, Menu, Icon, Badge} from 'antd';
import AppBase, {$config, $route} from 'components';


export default class extends Component {

  _onMenuClick = e => {
    AppBase.$.memory = {activeRoute: e.key};
    $route.push(e.key);
  };

  render() {
    const {className, children, ...props} = this.props;
    const {activeRoute, activeState} = AppBase.$.memory;
    return (
      <Menu theme="dark" mode="inline" className="f14"
            defaultSelectedKeys={[activeRoute]}
            onClick={this._onMenuClick}>
        <Menu.Item key="/admin/dashboards/index">
          <Icon type="appstore-o"/>
          <span className="nav-text">首页</span>
        </Menu.Item>
        <Menu.ItemGroup title="搭建商申报" theme="dark">
          <Menu.Item key={`/admin/building-businesses/index/${activeState || 1}`}>
            <Icon type="hdd"/>
            <Badge count={5} offset={[0, 20]}>
              <span className="nav-text">搭建商</span>
            </Badge>
          </Menu.Item>
          <Menu.Item key="/admin/newspaper-offices/index">
            <Icon type="database"/>
            <span className="nav-text">报馆</span>
          </Menu.Item>
          <Menu.Item key="/admin/builders/index">
            <Icon type="tool"/>
            <span className="nav-text">施工人员</span>
          </Menu.Item>
          <Menu.Item key="/admin/truck-infomations/index3">
            <Icon type="rocket"/>
            <span className="nav-text">货车信息</span>
          </Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup title="管理" theme="dark">
          <Menu.Item key="/admin/illegal-records/index">
            <Icon type="exception"/>
            <span className="nav-text">违规记录</span>
          </Menu.Item>
          <Menu.Item key="/admin/certificate-records/index">
            <Icon type="calculator"/>
            <span className="nav-text">发证记录</span>
          </Menu.Item>
          <Menu.Item key="/admin/notifications/index">
            <Icon type="mail"/>
            <span className="nav-text">通知管理</span>
          </Menu.Item>
          <Menu.Item key="/admin/account-settings/index">
            <Icon type="setting"/>
            <span className="nav-text">账号设置</span>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    )
  }
}
