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
        hotel_type_name: '豪华型',
        created_userId: 1,
        update_userId: 1,
      },
      {
        hotel_type_name: '舒适型',
        created_userId: 1,
        update_userId: 1,
      },
      {
        hotel_type_name: '经济型',
        created_userId: 1,
        update_userId: 1,
      },
      {
        hotel_type_name: '高档型',
        created_userId: 1,
        update_userId: 1,
      },
      {
        hotel_type_name: '民宿',
        created_userId: 1,
        update_userId: 1,
      },
    ];
    await queryInterface.bulkInsert('hotel_type', data);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('hotel_type', null, {});
  },
};
