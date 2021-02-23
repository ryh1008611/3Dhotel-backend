
'use strict';
// const Controller = require('egg').Controller;
const BaseController = require('../../base');
const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');
class fileController extends BaseController {
  async uploadFiler() {
    // const { ctx, service } = this;
    /*
    * @papram
    * fileTyle
    * hotel_id
    * user_id
    */
    const { ctx, app } = this;

    // // 读取表单提交的文件流
    const stream = await ctx.getFileStream();

    // 获取上传的文件名  like.jpg dog.png
    const file_name = path.basename(stream.filename);

    // 拼接上传路径
    const upload_path = '/public/admin/uploads/' + file_name;

    // 创建一个可以写入的流
    const writeStream = fs.createWriteStream(upload_path);

    let result;
    try {
      // 把读取到的表单信息流写入创建的可写流
      result = await stream.pipe(writeStream);
      if (result) {
        ctx.body = {
          code: 200,
          msg: '上传成功！',
          url: app.config.host + upload_path, // 上传路径
          fields: stream.fields, // 所有表单字段都能通过 `stream.fields` 获取到
        };
      }
    } catch (err) {
      // 上传失败销毁流
      await sendToWormhole(stream);

      throw err;
    }


  }
}

module.exports = fileController;

