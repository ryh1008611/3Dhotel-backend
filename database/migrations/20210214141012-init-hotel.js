'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING, DATE, ENUM } = Sequelize;
    await queryInterface.createTable('hotel', {
      hotel_id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
      hotel_name: { type: STRING(30), allowNull: false, defaultValue: '', comment: '酒店名称', unique: true },
      hotel_adress: { type: STRING(255), allowNull: true, defaultValue: '', comment: '酒店地址' },
      hotel_type_id: { type: INTEGER(20), allowNull: true, comment: '酒店类型id' },
      longitude: { type: Sequelize.FLOAT, comment: '坐标X' },
      latitude: { type: Sequelize.FLOAT, comment: '坐标Y' },
      user_Id: { type: INTEGER(20) },
      score: { type: STRING(5), allowNull: true, defaultValue: '', comment: '酒店评分' },
      entry_departure_time: { type: STRING(255), allowNull: true, defaultValue: '', comment: '入离时间' },
      carry_pets: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true, comment: '是否可以携带宠物' },
      type_of_reception: { type: ENUM, values: [ '1', '2', '3' ], allowNull: true, defaultValue: '1', comment: '1-所有人，2-携带中国国籍公民， 3-本地人' },
      lable: { type: STRING(255), allowNull: true, defaultValue: '', comment: '自定义标签' },
      system_lable: { type: STRING(255), allowNull: true, defaultValue: '', comment: '系统定义标签' },
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
    await queryInterface.dropTable('hotel');
  },
};
