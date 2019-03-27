import { $loadable } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./modules/app'))
  },
  {
    path: '/dashboard',
    component: $loadable.load(() => import('./modules/app/dashboard'))
  }
];
