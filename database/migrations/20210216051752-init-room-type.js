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
    await queryInterface.createTable('room_type', {
      room_type_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true, comment: '房间类型' },
      room_type_name: { type: STRING(255), comment: '类型名称' },
      created_userId: { type: INTEGER(20), allowNull: false, comment: '创建者' },
      update_userId: { type: INTEGER(20), allowNull: false, comment: '修改者' },
      createdAt: DATE,
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
    await queryInterface.dropTable('room_type');
  },
};
