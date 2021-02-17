'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwtErr = middleware.jwtErr(app.config.jwt);
  router.get('/', controller.home.index);
  router.post('/login', controller.login.login);
  router.get('/getUser', jwtErr, controller.user.getUser);
};
