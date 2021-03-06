import importedComponent from 'react-imported-component';

import { Loading } from '#';
// https://github.com/gaearon/react-hot-loader/issues/678

export default class {
  static load(inCallback) {
    return importedComponent(inCallback, {
      LoadingComponent: Loading
    });
  }
}
