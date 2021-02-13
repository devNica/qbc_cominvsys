// eslint-disable-next-line prettier/prettier
'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("ufreq", [
      {
        UNIDAD: "KHZ",
      },
      {
        UNIDAD: "MHZ",
      },
      {
        UNIDAD: "GHZ",
      },
      {
        UNIDAD: "RPM",
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ufreq", null, {});
  },
};
