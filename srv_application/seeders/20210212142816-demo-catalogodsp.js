"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("catalogodsp", [
      {
        DISPOSITIVO: "PROCESADOR",
      },
      {
        DISPOSITIVO: "MEMORIA",
      },
      {
        DISPOSITIVO: "DISCO DURO",
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("catalogodsp", null, {});
  },
};
