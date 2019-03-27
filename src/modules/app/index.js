import { $api, $form, $route } from '#';
import ReactFullImage from 'react-full-image';
import bgImg from '@/assets/images/bg.jpg';
import { Button } from 'antd';

@mixin(['on-change'])
export default class extends React.Component {
  _toAdmin = (inEvent) => {
    console.log('to admin');
    $route.push('/admin/options/index');
  };
  render() {
    return (
      <div className="login-wrapper">
        <ReactFullImage src={bgImg} />
        <div className="tc mb10_ t375 webkit-sassui-transform-center-xy p20">
          <p>
            <Button type="primary" onClick={this._toAdmin}>
              进入后台管理
            </Button>
          </p>
          <p>
            <Button type="secondary">到处看看</Button>
          </p>
        </div>
      </div>
    );
  }
}
