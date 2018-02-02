import nx from 'next-js-core2';
import NxAxios from 'next-axios';
import AppBase from 'components/scripts/index';

const Http = nx.declare({
  extends: NxAxios,
  statics: {
    instance: null,
    getInstance: function () {
      if (!Http.instance) {
        Http.instance = new Http();
      }
      return Http.instance;
    }
  },
  methods: {
    contentType: function () {
      return 'application/json; charset=utf-8';
    },
    transformParam: function (inData) {
      return JSON.stringify(inData);
    },
    toData: function (inResponse) {
      return inResponse.data;
    },
    error: function (inError) {
      console.log('error!');
      console.log(inError);
    }
  }
});

export default Http.getInstance();