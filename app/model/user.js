'use strict';
const moment = require('moment');
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
    username: { type: STRING(30), allowNull: false, defaultValue: '', comment: '用户名称', unique: true },
    email: { type: STRING(160), allowNull: false, defaultValue: '', comment: '用户邮箱', unique: true },
    password: { type: STRING(200), allowNull: false, defaultValue: '' },
    avatarUrl: { type: STRING(200), allowNull: true, defaultValue: '' },
    mobile: { type: STRING(20), allowNull: false, defaultValue: '', comment: '用户手机', unique: true },
    prifix: { type: STRING(32), allowNull: false, defaultValue: '' },
    abstract: { type: STRING(255), allowNull: true, defaultValue: '' },
    // eslint-disable-next-line no-undef
    gender: { type: ENUM, values: [ '男', '女', '保密' ], allowNull: true, defaultValue: '男', comment: '用户性别' },
    createdAt: { type: DATE, get() { return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss'); } },
    updatedAt: { type: DATE, get() { return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss'); } },
  });

  return User;
};
