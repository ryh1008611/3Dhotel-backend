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
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('hotel_type', {
      hotel_type_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true, comment: '酒店类型id' },
      hotel_type_name: { type: STRING(255), comment: '类型名称' },
      created_user_id: { type: INTEGER(20), allowNull: false, comment: '创建者' },
      update_user_id: { type: INTEGER(20), allowNull: false, comment: '修改者' },
      created_at: DATE,
      updated_at: DATE,
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
    await queryInterface.dropTable('hotel_type');
  },
};
