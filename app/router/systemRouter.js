'use strict';
module.exports = app => {
  /**
     * 后台管理系统模块
    */
  const { router, controller, middleware } = app;
  const jwtErr = middleware.jwtErr(app.config.jwt);
  // 用户登录
  //   router.post(`/api/${app.config.version}/login`, controller[app.config.version].auth.loginController.login);
  //   router.post('/user/create', controller.user.createUser);
  //   router.get('/getUser', jwtErr, controller.user.getUser);
  router.post(`/api/${app.config.version}/hotel`, controller[app.config.version].hotel.hotelController.create);

  // 文件上传
  router.post(`/api/${app.config.version}/upload`, controller[app.config.version].hotel.fileController.uploadFiler);

};
