'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');

class UserService extends Service {
  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }
  async create(data) {
    try {
    //   const transaction = await this.ctx.model.transaction();
      const psd = this.getMd5Data('data.password');
      const res = await this.ctx.model.User.create({
        username: 'timik',
        password: psd,
      });
      return res;
    } catch (error) {
      this.ctx.throw(500, error);
    }

  }
}

module.exports = UserService;
