export default function (inContext) {
  return {
    name: 'order',
    actions: [
      'add', 'edit', 'index', 'show', 'delete'
    ],
    fields: {
      map: {
        created_time: '创建时间',
        phone: '手机号码',
        email: '邮箱',
        company: '公司名称',
        job: '职位',
        login_count: '登录总计',
        last_active: '最近登录时间',
        consumptionLastTime: '最近消费时间',
        consumptionTotal: '消费总额(￥)',
        date_joined: '注册时间'
      },
      filters: {
        phone: (text, record) => {
          return <span onClick={inContext._onPhoneClick}>{`TEL:->${record.phone}`}</span>
        },
        //You can predefine some filters:
        created_time: '$antFilters.DATE'
      }
    }
  };
};
