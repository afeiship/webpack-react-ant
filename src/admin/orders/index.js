import AppBase, {
  $api, $store, $app, $config,
  AntForm,
  AntAbstractControllerIndex
} from 'components/scripts/index';

export default class extends AntAbstractControllerIndex {
  apiKey = 'user_index';
  pagination = {
    current: 'pageNum',
    rows: 'rows',
    total: 'total'
  };

  get title() {
    return super.title + '-1234';
  }

  get defaults() {
    return {
      [this.pagination.current]: 1,
      key: ''
    };
  }


  get fields() {
    return [
      {
        title: 'loginAccount',
        key: 'loginAccount',
        dataIndex: 'loginAccount'
      },
      {
        title: 'nickname',
        key: 'nickname',
        dataIndex: 'nickname'
      }
    ];
  }

  constructor(props){
    super(props);
    this.$config = require('./_config').default(this);
    console.log(this.$config);
  }
}
