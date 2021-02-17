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
  async createUser() {
    const { ctx } = this;
    // ctx.body = {
    //   code: '401',
    //   data: 'ctx.request.body',
    //   message: '账号或密码错误',
    // };

    const { result } = await ctx.service.userService.create(ctx.request.body);
    if (result) {
      this.ctx.body = {
        code: 200,
        msg: '注册成功!',
      };
    } else {
      this.ctx.body = {
        code: 201,
        msg: '注册失败!',
      };
    }
  }
}
module.exports = UserController;
