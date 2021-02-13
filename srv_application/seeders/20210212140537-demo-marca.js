"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("marca", [
      {
        marca: "DELL",
      },
      {
        marca: "HEWLETT PACKARD (HP)",
      },
      {
        marca: "LENOVO",
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("marca", null, {});
  },
};
