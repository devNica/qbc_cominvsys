"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("estructura", [
      {
        DESCRIPCION: "PRESIDENCIA EJECUTIVA",
        DEPENDEID: 0,
        ESTADO: true,
      },
      {
        DESCRIPCION: "GERENCIA GENERAL",
        DEPENDEID: 1,
        ESTADO: true,
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("estructura", null, {});
  },
};
