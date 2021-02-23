'use strict';
module.exports = app => {
  /**
     * 后台管理系统模块
    */
  const { router, controller, middleware } = app;
  // eslint-disable-next-line no-unused-vars
  const jwtErr = middleware.jwtErr(app.config.jwt);
  // 用户登录
  router.post(`/api/${app.config.version}/login`, controller[app.config.version].auth.loginController.login);
  router.post('/user/create', controller.user.createUser);
  router.get('/getUser', controller.user.getUser);

  // 邮箱验证
  router.post(`/api/${app.config.version}/sendMail`, controller[app.config.version].auth.mailController.sendCheckCode);
  router.get(`/api/${app.config.version}/sendMail`, controller[app.config.version].auth.mailController.getSession);
};
