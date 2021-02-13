"use strict";

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("modeloeqp", [
      {
        MODELO: "OPTIPLEX 170L",
        DETALLE: "ORDENADOR DE SOBREMESA",
        FK_MARCA: 1,
        FK_CATALOGOEQP: 1,
      },
      {
        MODELO: "VOSTRO 270S",
        DETALLE: "ORDENADOR DE SOBREMESA",
        FK_MARCA: 1,
        FK_CATALOGOEQP: 1,
      },
      {
        MODELO: "OPTIPLEX 5050",
        DETALLE: "ORDENADOR DE SOBREMESA",
        FK_MARCA: 1,
        FK_CATALOGOEQP: 1,
      },
      {
        MODELO: "ZBOOK15",
        DETALLE: "DISPLAY 15 inch",
        FK_MARCA: 2,
        FK_CATALOGOEQP: 2,
      },
      {
        MODELO: "PROBOOK 450 G5",
        DETALLE: "DISPLAY 15.6 inch",
        FK_MARCA: 2,
        FK_CATALOGOEQP: 2,
      },
      {
        MODELO: "530",
        DETALLE: "DISPLAY 15.4 inch",
        FK_MARCA: 2,
        FK_CATALOGOEQP: 2,
      },
    ]);
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("modeloeqp", null, {});
  },
};
