import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/x', controller.home.index);
  router.get('/api/mall/goods', controller.goods.index);
};
