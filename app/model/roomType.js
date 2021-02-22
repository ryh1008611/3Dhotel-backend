'use strict';
// const moment = require('moment');
module.exports = app => {
  // eslint-disable-next-line no-unused-vars
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const RoomType = app.model.define('room_type', {
    room_type_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true, comment: '房间类型' },
    room_type_name: { type: STRING(255), comment: '类型名称' },
    created_user_id: { type: INTEGER(20), allowNull: false, comment: '创建者' },
    update_user_id: { type: INTEGER(20), allowNull: false, comment: '修改者' },
  });
  // RoomType.sync({ force: true });
  return RoomType;
};
