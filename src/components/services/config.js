export default class {

  static VERSION = '__BUILD_VERSION__';
  static APIS = {
    baseUrl: `//${location.host}`,
    items: {
      '/admin': {
        'user_index': ['get', '/getAdminUserList'],
        'user_create': ['post', '/addAdminUser'],
        'user_update': ['put', '/updateAdminUser'],
      },
      '/system': {
        'banner_index': ['get', '/banners'],
        'banner_create': ['post', '/banner'],
        'banner_delete': ['delete', '/banner/{id}'],
        'banner_update': ['put', '/banner/{id}'],
      }
    }
  };

  static ROUTES = [
    '/admin/users/index',
    '/admin/orders/index'
  ];
}



