import AppBase, {
  $api
} from 'components';

export default class {
  syncActiveState(e, index) {
    const {match} = this.props;
    const { state } = match.params;
    AppBase.$.memory = {
      activeState: state
    };
  }
}
