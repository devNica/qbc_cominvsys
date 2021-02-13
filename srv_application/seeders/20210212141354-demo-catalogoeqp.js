"use strict";
module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("catalogoeqp", [
      {
        TIPOEQP: "DESKTOP",
        CATEGORIA: "ORDENADOR",
      },
      {
        TIPOEQP: "LAPTOP",
        CATEGORIA: "ORDENADOR",
      },
      {
        TIPOEQP: "MONITOR",
        CATEGORIA: "PERIFERICO",
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("catalogoeqp", null, {});
  },
};
