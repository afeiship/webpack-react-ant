import AppBase, {$api, $app, $date, $store} from 'components/scripts/index';
import {Table, Icon, Card, Button, Modal} from 'antd';


export default class extends React.Component {

  apiKey = 'user_index';
  size = 'middle';
  rowKey = 'id';
  pagination = {
    current: 'pageNum',
    rows: 'rows',
    total: 'total'
  };


  get defaults() {
    return {
      [this.pagination.current]: 1
    };
  }

  set request(inValue) {
    this._request = inValue;
  }

  get request() {
    return this._request || this.defaults;
  }

  get rowSelection() {
    return null;
  }

  get title() {
    return 'LIST_TABLE';
  }

  get extra() {
    return null;
  }

  get fields() {
    return [];
  }

  get actions() {
    return null;
  }


  constructor(props) {
    super(props);
    this.state = {
      columns: this.actions ? this.fields.concat(this.actions) : this.fields,
      data: [],
      selectedRowKeys: [],
      [this.pagination.current]: 1,
      [this.pagination.total]: 0
    };
    this.$config = require('./_config').default(this);
  }

  load(inData) {
    $api[this.apiKey](inData).then(({data, filter, total}) => {
      this.setState({data, total});
      AppBase.$.session = {currentList: data};
    });
  }

  refresh() {
    const {current} = this.pagination;
    this.load({
      [current]: this.state[current]
    });
  }

  componentDidMount() {
    this.load(this.request);
  }

  topView() {
    return null;
  }

  bottomView() {
    return null;
  }

  _onChange = (inCurrentPage) => {
    const pagination = {[this.pagination.current]: inCurrentPage};
    AppBase.$.session = pagination;
    this.load(pagination);
  };

  render() {
    const { columns, data, selectedRowKeys }  = this.state;
    const { total, current } = this.pagination;

    return (
      <Card title={ this.title } extra={this.extra}>
        { this.topView() }
        <Table
          size={this.size}
          rowSelection={this.rowSelection}
          bordered
          selectedRowKeys={selectedRowKeys}
          columns={columns}
          dataSource={data}
          rowKey={this.rowKey}
          pagination={{
            total: this.state[total],
            current: this.state[current],
            onChange: this._onChange
          }}/>
        { this.bottomView() }
      </Card>
    );
  }
}
