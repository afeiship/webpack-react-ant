import {Card, Form, Icon, Input, Button} from 'antd';
import ReactFullImage from 'react-full-image';
import bgImg from 'images/bg.jpg';
import ReactAntForm from 'react-ant-form';
import AppBase, {
  $api, $route, $app,
  ExmLogo
} from 'components';
export default Form.create()(class extends React.Component {

  state = {
    formItems: [
      {
        field: 'username',
        component: Input,
        props: {
          size: 'large',
          placeholder: '用户名'
        }
      },
      {
        field: 'password',
        component: Input,
        props: {
          size: 'large',
          type: 'password',
          placeholder: '密码'
        }
      }
    ]
  };

  _onSubmit = (e) => {
    console.log(e);
    $app.successPush('登录成功', '/admin/dashboards/index');
  };

  render() {
    const formLayout = null;

    return (
      <section className="login-view h100">
        <ReactFullImage src={bgImg}/>
        <div className="p20 bdr-10 body shadow-6 webkit-sassui-transform-center-xy t375">
          <ExmLogo className="py20"/>
          <div className="bg-f bdr-5 p30">
            <ReactAntForm formLayout={null}
                          submitLabel={null}
                          submitProps={{
                            className: 'wp-10 mb0',
                            children: '登录',
                            size: 'large',
                            type: 'primary',
                            htmlType: 'submit'
                          }}
                          onSubmit={this._onSubmit}
                          items={this.state.formItems}/>
            <footer hidden className="tc mt10 lrfix_ ft">
              <span>还没有账号 <a href="#">注册</a></span>
              <a href="#">忘记密码？</a>
            </footer>
          </div>
        </div>
      </section>
    );
  }

});