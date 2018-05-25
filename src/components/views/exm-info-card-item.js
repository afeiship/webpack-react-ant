import React, {Component} from 'react';
import classNames from 'classnames';
import {Row, Col, Menu, Icon} from 'antd';

export default class extends Component {

  render() {
    const {className, icon, title, count, apply, ...props} = this.props;
    return (
      <div data-depth="2" data-hover="true" className={ classNames("bdr-3 webkit-sassui-shadow-box bg-f rel exm-info-card-item", className) } {...props}>
        <div className="webkit-sassui-transform-center-xy">
          <h3 className="tc f14 mb14 c-9 b webkit-sassui-icon-text">
            <Icon type={icon}/>
            <span className="ml5">{title}</span>
          </h3>
          <p className="rel">
            <span className="f48 b">{count}</span>
            {apply && <em className="abs c-red wp-10">待审</em>}
          </p>
        </div>
      </div>
    )
  }
}
