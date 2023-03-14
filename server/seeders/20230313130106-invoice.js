'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Invoices",
      [
        {
          id: "137",
          number: "123456",
          amount: 400,
          paid: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          customerId: "11",
        },
        {
          id: "138",
          number: "987654",
          amount: 555,
          paid: false,
          createdAt: new Date(),
          updatedAt: new Date(),
          customerId: "12",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
   await queryInterface.bulkDelete("Products", null, {});
  },
};
