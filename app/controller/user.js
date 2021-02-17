'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 验证登录并生成Token
  async getUser() {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    ctx.body = {
      code: '401',
      data: '',
      message: '账号或密码错误',
    };
  }
}
module.exports = UserController;
