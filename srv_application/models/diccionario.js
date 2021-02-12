"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class diccionario extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  diccionario.init(
    {
      IDDICCIONARIO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      VERBO: DataTypes.STRING,
      PUNTEO: DataTypes.INTEGER,
      DESCRIPCION: DataTypes.STRING,
      CATEGORIA: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "diccionario",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return diccionario;
};
