export default class {

  static VERSION = '__BUILD_VERSION__';
  static APIS = {
    baseUrl: `//${location.host}`,
    items: {
      'user_index': ['get', '/admin/getAdminUserList'],
      'user_create': ['post', '/admin/addAdminUser'],
      'user_update': ['put', '/admin/updateAdminUser'],

      'banner_index': ['get', '/system/banners'],
      'banner_create': ['post', '/system/banner'],
      'banner_delete': ['delete', '/system/banner/{id}'],
      'banner_update': ['put', '/system/banner/{id}'],
    }
  };
}



