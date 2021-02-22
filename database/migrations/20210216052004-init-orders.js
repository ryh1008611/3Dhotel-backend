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
      order_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true, comment: '订单id' },
      order_num: { type: INTEGER(20), allowNull: false, comment: '订单编号' },
      user_id: { type: INTEGER(20), allowNull: true, comment: '下单用户id' },
      business_id: { type: INTEGER(20), allowNull: true, comment: '店家id' },
      room_id: { type: INTEGER(20), allowNull: true, comment: '店家id' },
      purchase_price: { type: INTEGER(20), allowNull: true, comment: '成交价格' },
      created_at: DATE,
      updated_at: DATE,
    };
    await queryInterface.createTable('orders', data);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('orders');
  },
};
