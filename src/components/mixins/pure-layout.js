import AppBase, {$api, $app, $date, $store} from 'components';
import {Table, Icon, Card, Button, Tabs, Modal} from 'antd';

export default class {

  layout = 'pure';

  childView() {
    return null;
  }

  pureLayout() {
    return (
      <section className="ml4 abs trbl0 webkit-sassui-flex-hdfixed-bdauto exm-route-tabs pure-layout-view ovs">
        {this.childView()}
      </section>
    )
  }
}
