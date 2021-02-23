'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');
const nodemailer = require('nodemailer');
// 封装发送者信息
const transporter = nodemailer.createTransport({
  service: 'qq', // 调用qq服务器
  secureConnection: true, // 启动SSL
  port: 465, // 端口就是465
  auth: {
    user: '987896519@qq.com', // 账号
    pass: 'zlgxgslrbgcobgac', // 授权码,

  },
});
class MailService extends Service {
  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }

  async sendCheckCode(email) {
    //   使用nodemailer
    const code = randomString(6);
    const mailOptions = {
      from: '"3Dhotel酒店平台官方账号" <987896519@qq.com>', // 发送者,与上面的user一致
      to: email, // 接收者,可以同时发送多个,以逗号隔开
      subject: '', // 标题
      // text: '测试内容', // 文本
      html: '亲爱的用户您好！这是您用于注册的验证码，请输入验证码后注册。您的验证码为：' + code,
    };

    try {
      await transporter.sendMail(mailOptions);
      return {
        code: 200,
        checkCode: code,
      };
    } catch (err) {
      return {
        code: 201,
      };
    }

  }

  //   随机字符串

}
function randomString(len) {
  len = len || 32;
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  const maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

module.exports = MailService;
