import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class extends React.Component {
  render() {
    return (
      <Layout className="h100">
        <Layout>
          <Sider>
            <div className="p20 row row-center lh-20">
              <div className="img">
                <img
                  width="40"
                  src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg"
                  alt="Avatar"
                />
              </div>
              <div className="ml10 col">
                <strong className="f20 c-f">LOGO</strong>
                <p className="f12 c-9">Simple, pure.</p>
              </div>
            </div>
            <div className="blank-10" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">属性管理</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">主题管理</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>MainContent</Content>
        </Layout>
      </Layout>
    );
  }
}
