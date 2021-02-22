'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING, DATE } = Sequelize;
    const data = {
      id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true, comment: '图片id' },
      images_type: { type: INTEGER(3), allowNull: true, comment: '图片类型，1-头像，2-酒店封面，3-酒店展览图，4-房间封面，5-房间展览图, 6-评论图片' },
      user_id: { type: INTEGER(20), allowNull: true, comment: '用户id' },
      room_id: { type: INTEGER(20), allowNull: true, comment: '酒店房间id' },
      hotel_id: { type: INTEGER(20), allowNull: true, comment: '酒店id' },
      comment_id: { type: INTEGER(20), allowNull: true, comment: '评论id' },
      url: { type: STRING(255), allowNull: true, comment: '图片url' },
      file_name: { type: STRING(255), allowNull: true, comment: '原文件名' },
      operator: { type: INTEGER(20), allowNull: true },
      created_at: DATE,
      updated_at: DATE,
    };
    await queryInterface.createTable('images', data);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('images');
  },
};
