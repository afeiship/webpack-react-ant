import AppBase, {
  $api
} from 'components';

export default class {
  get params() {
    const {match} = this.props;
    return match.params;
  }
}
