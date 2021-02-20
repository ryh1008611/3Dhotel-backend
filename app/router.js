'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  // 验证是否登录中间件
  const jwtErr = middleware.jwtErr(app.config.jwt);
  router.get('/', controller.home.index);
  router.post('/login', controller.login.login);
  router.post('/user/create', controller.user.createUser);
  router.get('/getUser', jwtErr, controller.user.getUser);
  // router.get('/test', )
};
