import AppBase, {
  $api, $store, $app, $config,
  AntAbstractForm
} from 'components/scripts/index';
import {Table, Icon, Input, Card, Row, Col, Button, Menu, Dropdown, Select} from 'antd';

const Option = Select.Option;


export default class extends React.Component {

  state = {
    data: [],
    filters: {},
    total: 0,
    phone: '',
    pageNum: 0,
    pageSize: 10
  };

  load(inData) {
    const {filters} = this.state;
    $api.order_index(
      nx.mix({pageSize: this.state.pageSize}, filters, inData)
    ).then(resp => {
      this.setState(resp);
    });
  }

  componentDidMount() {
    window.$app = $app;
    this.load();
  }

  // _onPageChange = e => {
  //   console.log('page change!');
  //   this.setState({pageNum: e - 1}, () => {
  //     this.load({pageNum: e - 1});
  //   });
  // };

  _onPhoneChange = (inEvent) => {
    this.setState({phone: inEvent.target.value});
  };

  _onSearch = (inEvent) => {
    //todo: wait for interface!!
    const {phone} = this.state;
    $api.user_show_search({phone}).then(resp => {
      const {userId} = resp;
      const {pageNum, filters} = this.state;
      this.load(nx.mix(filters, {
        pageNum, userId
      }))
    });
  };

  _onTableChange = (pagination, filters, sorter) => {
    console.log(pagination,filters);
    let data = {};
    // console.log('_onTableChange change!',pagination);
    const {current} = pagination;
    nx.each(filters, (key, value) => {
      data[key] = value.join(',');
    });
    this.setState({filters: data, pageNum: current - 1});
    this.load(nx.mix(data, {
      pageNum: current - 1
    }));
  };

  _onClickTest = e =>{
    console.log('click test');
  };


  render() {
    const {data, total, pageNum, pageSize,} = this.state;
    const columns = [
      {
        title: '下单用户',
        dataIndex: 'username',
        key: 'username',
        filterDropdown: (
          <Row className="bg-f p10 filter-dropsearch">
            <Col span="12">
              <Input placeholder="手机号码"
                     ref={ele => this.phone = ele}
                     value={this.state.phone}
                     onChange={this._onPhoneChange}/>
            </Col>
            <Col span="12" className='tr'>
              <Button type="primary" onClick={this._onSearch}>根据手机筛选</Button>
            </Col>
          </Row>
        ),
      },
      {
        title: '年份',
        key: 'year',
        filters: [
          {text: '2014', value: '2014'},
          {text: '2015', value: '2015'},
          {text: '2016', value: '2016'},
        ],
        render: (text, record) => {
          const {goods} = record;
          return <span>{goods.year}</span>
        },
      },
      {
        title: '国家',
        key: 'country',
        render: (text, record) => {
          const {goods} = record;
          return <span>{goods.country}</span>
        },
      },
      {
        title: '关键字',
        key: 'keywords',
        render: (text, record) => {
          const {goods} = record;
          return <span>{goods.keywords}</span>

        },
      },
      {
        title: '订单类型',
        dataIndex: 'type',
        filters: [
          {text: '查询', value: 1},
          {text: '下载', value: 2},
        ],
        render: (text, record) => {
          const {goods} = record;
          return <span>{$config.PERMISSION_MAP[goods.type]}</span>
        },
      },
      {
        title: '下单时间',
        dataIndex: 'createTime',
        key: 'createTime'
      },
      {
        title: '支付状态',
        dataIndex: 'state',
        key: 'state',
        render: (text, record) => {
          return <span>{$config.ORDER_STATUS[record.state]}</span>
        },
        filters: [
          {text: '未支付', value: 1},
          {text: '已支付', value: 2},
          {text: '已完成', value: 3},
        ]
      },
      {
        title: '支付价格',
        key: 'price',
        render: (text, record) => {
          const {goods} = record;
          return <span>{goods.price}</span>
        },
      },
      {
        title: '支付方式',
        dataIndex: 'payType',
        key: 'payType',
        filters: [
          {text: '微信支付', value: 1},
          {text: '支付宝', value: 2}
        ],
        render: (text, record) => {
          return <span>{$config.PAY_TYPE[record.payType]}</span>
        },
      }
    ];

    const antFormItems = [
      {
        field:'name',
        component: Input,
        label:'名字',
        props:{
          placeholder:'name!'
        }
      },
      {
        field:'phone',
        component: Input,
        label:'电话',
        props:{
          placeholder:'phone!'
        }
      },
      {
        field:'my-area',
        label:'我的地盘',
        component: Input.TextArea,
        props:{
          placeholder:'my area!'
        }
      }
    ];

    return (
      <Card title={`订单（${total}）`} bordered={false}>
        <AntAbstractForm items={antFormItems} />
        <Button onClick={this._onClickTest}>Test Ant Form</Button>
        <Table columns={columns} dataSource={data} rowKey="id"
               onChange={this._onTableChange}
               pagination={{total, current: (pageNum + 1), pageSize}}/>
      </Card>
    );
  }
}
