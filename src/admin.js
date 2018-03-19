import {Layout, Menu, Icon, Badge} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import ReactDynamicRouter from 'react-dynamic-router';

import AppBase, {
  $api, $app, $config,
  ExmLogo,
  ExmSideMenu,
  ExmHeader,
  ExmPageException
} from 'components/scripts/index';


export default class extends React.Component {
  render() {
    const {sidebarCollapsed} = AppBase.$.memory;
    return (
      <Layout className="main-view">
        <Sider
          breakpoint="lg"
          width="250"
          trigger={null}
          collapsible
          collapsed={sidebarCollapsed}
          collapsedWidth="0">
          <div className="slogen mb10 bg-blue-a tc py30">
            <ExmLogo />
          </div>
          <ExmSideMenu />
        </Sider>
        <Layout>
          <ExmHeader/>
          <Content className="rel">
            <Switch>
              { ReactDynamicRouter.build(Route, $config.ROUTES) }
              <Route component={ExmPageException}/>
            </Switch>
          </Content>
          <Footer className="tc shadow-6">
            Admin @Power by Fei.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
