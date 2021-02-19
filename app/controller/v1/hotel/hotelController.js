
'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('../../base');
class hotelController extends BaseController {
  async create() {
    const { ctx, service } = this;
    console.log(ctx);
    ctx.body = {
      code: 200,
      msg: ctx.model,
    };
    // const data = {
    //   hotel_name: ctx.request.hotel_name,
    //   hotel_adress: ctx.request.hotel_adress,
    //   created_userId: ctx.request.created_userId,
    //   update_userId: ctx.request.update_userId,
    // };
    // const res = service.roleService.create(data);
    // ctx.body = {
    //   code: 200,
    //   msg: res,
    // };
  }
}

module.exports = hotelController;

