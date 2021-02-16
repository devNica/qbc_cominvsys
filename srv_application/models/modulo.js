"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class modulo extends Model {
    static associate(models) {
      modulo.hasMany(models.usuario_modulo, {
        foreignKey: "FK_MODULO",
      });
    }
  }
  modulo.init(
    {
      IDMODULO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      MODULO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "modulo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return modulo;
};
