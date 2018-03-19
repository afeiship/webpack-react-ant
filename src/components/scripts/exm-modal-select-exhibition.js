import React,{ Component } from 'react';
import classNames from 'classnames';

export default class extends Component {
  render() {
    const { className, children, ...props } = this.props;
    return (
      <section {...props} className={ classNames("exm-modal-select-exhibition", className) }>
        {children}
      </section>
    )
  }
}
