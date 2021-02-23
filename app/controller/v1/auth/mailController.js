
'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('../../base');
class MailController extends BaseController {
  // 发送验证码
  async sendCheckCode() {
    const { ctx, app } = this;
    const { email } = ctx.request.body;
    const res = await ctx.service[app.config.version].auth.mailService.sendCheckCode(email);
    if (res.code === 200) {

      // 发送成功!存到session
      ctx.session.email = {
        email,
        checkCode: res.checkCode,
      };
      await ctx.render('setsession');
      ctx.body = {
        code: res.code,
        msg: '发送成功!',
        checkCode: res.checkCode,
      };
    } else {
      ctx.body = {
        code: res.code,
        msg: '发送失败!',
      };
    }
  }

  async getSession() {
    const { ctx } = this;
    // const { email } = ctx.request.body;
    const userinfo = this.ctx.session.email;
    const res = await this.ctx.render('getsession', {
      userinfo,
    });
    ctx.body = {
      res,
    };
  }
}

module.exports = MailController;

