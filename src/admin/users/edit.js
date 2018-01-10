import UserForm from './_form';
import {Form, Icon, Input, Button, Modal} from 'antd';
import AppBase, {$api, $config, $http, $store} from 'components/scripts/index';

export default Form.create()(
  class extends UserForm {
    title = '编辑用户';
    action = 'edit';

    onSubmit(inValue) {
      return new Promise((resolve, reject) => {
        let data = nx.mix(inValue, this.props.params);
        const id = data.id;
        delete data.id;
        delete data.password;
        $http.post(`${$config.APIS.baseUrl}/auth/admin/user/${id}`, data).then(resp => {
          AppBase.command('modal.user', false);
          resolve(resp);
        });
      });
    }
  }
);