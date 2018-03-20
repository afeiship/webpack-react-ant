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

  bodyView() {
    return null;
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
