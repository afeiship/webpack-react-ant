import React, {Component} from 'react';
import {Select} from 'antd';

export default class extends Component {

  static defaultProps = {
    allowClear: true,
    items: []
  };

  render() {
    const {items, allowClear, ...props} = this.props;
    return (
      <Select {...props} allowClear={allowClear}>
        {
          items.map((item, key) => {
            return (
              <Select.Option key={item.value} value={item.value}>{ item.text }</Select.Option>
            );
          })
        }
      </Select>
    );
  }

}
