import {Form, Button} from 'antd';
import classNames from 'classnames';

export default Form.create()(
  class extends React.Component {

    static defaultProps = {
      onSubmit: nx.noop,
      onComplete: nx.noop,
      onComponentDidMount: nx.noop,
      formLayout: {
        labelCol: {span: 6},
        wrapperCol: {span: 16},
      },
      items: [],
      submitText: 'Submit'
    };

    onSubmit = e => {
      e.preventDefault();
      const {onComplete, onSubmit, form} = this.props;
      form.validateFields((err, values) => {
        if (!err) {
          onSubmit(values).then(response => {
            onComplete(response);
          });
        }
      });
    };

    componentDidMount() {
      const {onComponentDidMount, form} = this.props;
      const {getFieldDecorator, setFields} = form;
      nx.mix(this, {getFieldDecorator, setFields});
      onComponentDidMount();
    }

    render() {
      const {className, items, formLayout, submitText} = this.props;
      const {getFieldDecorator} = this.props.form;
      return (
        <Form
          onSubmit={this.onSubmit}
          className={classNames("ant-form", className)}>
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
              onClick={this.onSubmit}>{submitText}</Button>
          </Form.Item>
        </Form>
      );
    }
  }
);
