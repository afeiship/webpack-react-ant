import AppBase, {
  $api, $store, $app, $config,
  AntAbstractControllerIndex
} from 'components/scripts/index';
import {Table, Icon, Card, Input, Button, Tabs} from 'antd';



@mixin(['tabs-layout'])
export default class extends AntAbstractControllerIndex {
  layout = 'tabs';

  get extra(){
    return (
      <section className="mb10 webkit-sassui-vim-center ml10_ ml__ extra">
        <Button type="primary">添加</Button>
        <Input.Search className="dib" style={{ width: 220 }} enterButton placeholder="do search" />
      </section>
    )
  }
}
