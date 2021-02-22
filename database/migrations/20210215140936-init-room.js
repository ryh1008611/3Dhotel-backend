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
    await queryInterface.createTable('room', {
      room_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
      room_type_id: { type: INTEGER(20), allowNull: true, comment: '房间类型' },
      hotel_id: { type: INTEGER(20), comment: '所属酒店id' },
      allowance: { type: INTEGER(5), comment: '房间剩余量' },
      price_ordinary: { type: INTEGER(5), comment: '平价日单价' },
      price_busy: { type: INTEGER(5), comment: '旺季单价' },
      price_holiday: { type: INTEGER(5), comment: '法定节假日单价' },
      created_user_id: { type: INTEGER(20), allowNull: false, comment: '创建者' },
      update_user_id: { type: INTEGER(20), allowNull: false, comment: '修改者' },
      createdat: DATE,
      updatedAt: DATE,
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('room');
  },
};
