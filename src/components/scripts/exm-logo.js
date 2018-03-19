import React, {Component} from 'react';
import classNames from 'classnames';

export default class extends Component {
  static defaultProps = {
    title: '展会审核系统',
    sub: '北京国机联创广告有限公司'
  };

  render() {
    const {className, title, sub, ...props} = this.props;
    return (
      <section {...props} className={ classNames("tc c-f webkit-sassui-flex-lfixed-rauto exm-logo", className) }>
        <img src={require('images/logo.png')} className="left" width="48" alt=""/>
        <div className="tl right">
          <h3 className="f20 c-f b hd">{title}</h3>
          <p className="f10 mt3 ft">{sub}</p>
        </div>
      </section>
    )
  }
}
