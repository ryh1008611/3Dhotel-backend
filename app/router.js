'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 用户登录，注册，邮箱验证注册相关
  require('./router/authRouter')(app);
  // 系统功能相关
  require('./router/systemRouter')(app);
};
