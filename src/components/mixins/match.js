import AppBase, {
  $api
} from 'components/scripts/index';

export default class {
  get params() {
    const {match} = this.props;
    return match.params;
  }
}
