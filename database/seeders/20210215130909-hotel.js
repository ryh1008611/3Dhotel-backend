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
        hotel_name: '新华酒店',
        hotel_adress: '新华大街',
        hotel_type_id: 1,
        created_user_id: 1,
        update_user_id: 1,
      },
      {
        hotel_name: '翻窗酒店',
        hotel_adress: '翻窗解散叫',
        hotel_type_id: 1,
        created_user_id: 1,
        update_user_id: 1,
      },
      {
        hotel_name: '新华酒店2',
        hotel_adress: '新华大街',
        hotel_type_id: 1,
        created_user_id: 1,
        update_user_id: 1,
      }, {
        hotel_name: '新华酒店3',
        hotel_adress: '新华大街',
        hotel_type_id: 1,
        created_user_id: 1,
        update_user_id: 1,
      },
    ];
    await queryInterface.bulkInsert('hotel', data);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('hotel', null, {});
  },
};
