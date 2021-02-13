/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class especificacioneqp extends Model {
    static associate(models) {
      especificacioneqp.belongsTo(models.equipo, {
        foreignKey: "FK_EQUIPO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      especificacioneqp.belongsTo(models.dispositivo, {
        foreignKey: "FK_DISPOSITIVO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  especificacioneqp.init(
    {
      CANTIDAD: DataTypes.INTEGER,
      FK_DISPOSITIVO: DataTypes.INTEGER,
      FK_EQUIPO: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "especificacioneqp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return especificacioneqp;
};
