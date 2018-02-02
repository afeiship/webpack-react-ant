/*===default start===*/
const AppBase = require('./app-base').default;
export default AppBase;
export const $ = AppBase.$;
/*===default start===*/


/*===mixins start===*/
export const OnChangeMixin = require('react-mixin-on-change').default(AppBase);
export const AntTableFilterMixin=require('mixins/ant-table-filter').default;
/*===mixins end===*/


/*===services start===*/
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $app = require('services/app').default;
export const $http = require('services/http').default;
export const $route = require('services/route').default;
export const $store = require('next-store');
export const $date = require('next-date');

/*===services end===*/


/*===components start===*/
export const AntForm = require('./ant-form').default;
export const AntSelect = require('./ant-select').default;
export const AntAbstractControllerIndex = require('./ant-abstract-controller-index').default;
/*===components end===*/

