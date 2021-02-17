'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [
      {
        room_type_name: '标准大床房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '舒适大床房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '标准双人房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '舒适双人房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '标准三人房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '舒适三人房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '精致套房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '豪华套房',
        created_userId: 1,
        update_userId: 1,
      },
      {
        room_type_name: '总统套房',
        created_userId: 1,
        update_userId: 1,
      },
    ];
    await queryInterface.bulkInsert('room_type', data);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('room_type', null, {});
  },
};
