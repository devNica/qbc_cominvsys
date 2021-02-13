"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("ucapc", [
      {
        UNIDAD: "KB",
      },
      {
        UNIDAD: "MB",
      },
      {
        UNIDAD: "GB",
      },
      {
        UNIDAD: "TB",
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ucapc", null, {});
  },
};
