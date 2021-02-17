'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE } = Sequelize;
    const data = {
      comment_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true, comment: '评论id' },
      order_num: { type: INTEGER(20), allowNull: false, comment: '订单编号' },
      user_id: { type: INTEGER(20), allowNull: true, comment: '评论用户id' },
      business_id: { type: INTEGER(20), allowNull: true, comment: '评论酒店id' },
      content: { type: Sequelize.TEXT, allowNull: true, comment: '评论内容' },
      score: { type: INTEGER(5), defaultValue: 5, comment: '评分' },
      is_anonymous: { type: Sequelize.BOOLEAN, defaultValue: true, comment: '是否匿名' },
      createdAt: DATE,
      updatedAt: DATE,
    };
    await queryInterface.createTable('comment', data);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('comment');
  },
};
