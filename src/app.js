import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import AppBase, {
  $api, $store,
  ExmModalUserAdd,
  ExmModalSelectExhibition,
} from 'components/scripts/index';

import Login from './login';
import Admin from './admin';


export default class extends AppBase {

  static initialState() {
    const hash = location.hash;
    const {currentList} = $store.session;
    const {login} = $store.local;
    return {
      local: {
        login: login || null
      },
      memory: {
        currentRow: {},
        currentIndex: 0,
        sidebarCollapsed: false,
        activeRoute: hash.slice(1),
        activeState: null
      },
      session: {
        currentList: currentList || []
      }
    };
  }

  componentDidMount() {
    const {root} = this.refs;
    AppBase.$.memory = {
      history: root.history
    };
  }

  command(inName, inData) {
    AppBase.$.memory = {
      [nx.camelize(inName)]: inData
    };
  }

  render() {
    return (
      <Router ref="root">
        <section className="route-wrapper">
          <Route exact path="/" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <section className="modal-container">
            {/*<MODAL_START />*/}
            <ExmModalSelectExhibition />
            <ExmModalUserAdd />
            {/*<MODAL_END />*/}
          </section>
        </section>
      </Router>
    );
  }
}
