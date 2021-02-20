
'use strict';
const Controller = require('egg').Controller;
class LoginController extends Controller {
  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const { result } = await ctx.service.loginService.login(username, password);
    if (result.length > 0) {

      const token = app.jwt.sign({
        username, // 需要存储的 token 数据
      }, app.config.jwt.secret, { expiresIn: '30m' }); // 2分钟token过期

      ctx.set({ token });// 设置headers
      ctx.body = {
        code: 200,
        data: [{
          token,
          userName: result[0].userName,
          userId: result[0].userId,
        }],
        message: 'success',
      };

    } else {

      ctx.body = {
        code: '401',
        data: result,
        message: '账号或密码错误',
      };

    }
  }
}

module.exports = LoginController;

