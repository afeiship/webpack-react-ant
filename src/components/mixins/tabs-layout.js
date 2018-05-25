import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';
import AppBase, {
  $api, $app, $date, $store,
  ExmRouteTabs
} from 'components';

export default class {

  layout = 'tabs';

  get extra() {
    return null;
  }

  get tabItems() {
    return [];
  }

  tabsLayout() {
    return (
      <ExmRouteTabs {...this.props} />
    )
  }
}
