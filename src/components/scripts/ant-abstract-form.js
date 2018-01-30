import {Form, Button} from 'antd';
import classNames from 'classnames';

export default Form.create()(
  class extends React.Component {

    static defaultProps = {
      onSubmit: nx.noop,
      onComplete: nx.noop,
      valueConvert: nx.noop,
      formLayout:{
        labelCol: {span: 6},
        wrapperCol: {span: 16},
      },
      items: []
    };

    onSubmit = e => {
      e.preventDefault();
      const { onComplete, onSubmit, valueConvert, form } = this.props;
      form.validateFields((err, values) => {
        if (!err) {
          onSubmit( valueConvert(values) ).then(response => {
            onComplete(response);
          });
        }
      });
    };

    render() {
      const {className, items, formLayout} = this.props;
      const {getFieldDecorator} = this.props.form;
      return (
          <Form
            onSubmit={this.onSubmit}
            className={classNames("ant-abstrct-form", className)}>
            {
              items.length > 0 && items.map((item, index) => {
                return (
                  <Form.Item {...formLayout} key={index} label={item.label}>
                    {getFieldDecorator(item.field, {
                      rules: item.rules
                    })(<item.component {...item.props}/>)}
                  </Form.Item>
                )
              })
            }
            <Form.Item {...formLayout} label="&nbsp;" colon={false}>
              <Button
                htmlType="submit"
                type="primary"
                onClick={this.onSubmit}>Submit@</Button>
            </Form.Item>
          </Form>
      );
    }
  }
);
