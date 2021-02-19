'use strict';
const Service = require('egg').Service;
class roleService extends Service {
  async create(data) {
    return await this.ctx.model.Hotel.create(data);
  }
}

module.exports = roleService;
