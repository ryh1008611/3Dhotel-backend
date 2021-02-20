'use strict';
// const moment = require('moment');
module.exports = app => {
  const { STRING, INTEGER, DATE, ENUM } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
    username: { type: STRING(30), allowNull: false, defaultValue: '', comment: '用户名称', unique: true },
    email: { type: STRING(160), allowNull: false, defaultValue: '', comment: '用户邮箱', unique: true },
    password: { type: STRING(200), allowNull: false, defaultValue: '' },
    avatarUrl: { type: STRING(200), allowNull: true, defaultValue: '' },
    mobile: { type: STRING(20), allowNull: false, defaultValue: '', comment: '用户手机', unique: true },
    prifix: { type: STRING(32), allowNull: false, defaultValue: '' },
    abstract: { type: STRING(255), allowNull: true, defaultValue: '' },
    gender: { type: ENUM, values: [ '男', '女', '保密' ], allowNull: true, defaultValue: '男', comment: '用户性别' },
    roles: { type: INTEGER(5), defaultValue: 1, comment: '1-访客，2-店家， 3-管理员' },
    createdAt: DATE,
    updatedAt: DATE,
  });
  User.sync({ force: true });
  return User;
};
