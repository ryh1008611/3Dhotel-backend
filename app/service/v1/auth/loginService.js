'use strict';
const Service = require('egg').Service;
const crypto = require('crypto');

class LoginService extends Service {
  getMd5Data(data) {
    return crypto.createHash('md5').update(data).digest('hex');
  }

  async login(username, password) {
    const psd = this.getMd5Data(password);
    const data = await this.app.mysql.query(`SELECT * FROM users WHERE userName='${username}' and password='${psd}'`);
    const result = JSON.parse(JSON.stringify(data)); // 去除node中mysql查询数据产生的RowDataPacket
    return { result };
  }
}

module.exports = LoginService;
