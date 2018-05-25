import React, {Component} from 'react';
import classNames from 'classnames';
import {
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import {Table, Icon, Card, Button, Tabs, Input, Modal} from 'antd';

export default class extends Component {

  static defaultProps = {
    route: {
      path: '/admin/building-businesses/index/:state',
      component: require('admin/building-businesses/show').default
    },
    header: [
      {
        state: '1',
        component: <span>我的账户</span>
      },
      {
        state: '2',
        component: <span>我的权限</span>
      }
    ],
    extra: (
      <div className="lfix_ ml10_ ml__ extra">
        <Button type="primary">ADD</Button>
        <Input.Search placeholder="Search.." enterButton style={{width: 220}}/>
      </div>
    )
  };

  render() {
    const {className, extra, route, header, match, ...props} = this.props;
    const matchUrl = match.url;
    return (
      <div className={ classNames("ml4 abs trbl0 webkit-sassui-flex-hdfixed-bdauto exm-route-tabs", className) }  data-scroll="true">
        <nav className="rel px14 lrfix_ hd">
          <ul className="left">
            {
              header.map((item) => {
                return (
                  <li key={item.state}><NavLink activeClassName='active'
                                                to={`${matchUrl}/${item.state}`}>{item.component}</NavLink></li>
                )
              })
            }
          </ul>
          <aside className="r0 mr14 webkit-sassui-transform-center-y right">
            { extra }
          </aside>
        </nav>

        <section className="p14 bd">
          <Route {...route}/>
        </section>

      </div>
    )
  }
}
