import AppBase, {
  $api
} from 'components';

export default class {

  get currentId() {
    return nx.path(AppBase.$.memory, 'currentRow.id');
  }

  syncCurrentRow(e, index) {
    AppBase.$.memory = {
      currentRow: e,
      currenIndex: index
    };
  }

}
