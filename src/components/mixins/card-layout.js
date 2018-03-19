import AppBase, {$api, $app, $date, $store} from 'components/scripts/index';
import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';

export default class {

  layout = 'card';

  get title() {
    return 'TITLE';
  }

  get extra() {
    return null;
  }

  topView() {
    return null;
  }

  bottomView() {
    return null;
  }

  tableView() {
    const {columns, data, selectedRowKeys}  = this.state;
    const {total, current} = this.pagination;

    return (
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
    )
  }

  cardLayout() {
    return (
      <Card title={ this.title } extra={ this.extra }>
        { this.topView() }
        { this.bodyView() }
        { this.bottomView() }
      </Card>
    );
  }
}
