/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class estructura extends Model {
    static associate(models) {
      estructura.hasMany(models.empleado, {
        foreignKey: "FK_UBQEMP",
      });

      estructura.hasMany(models.equipo, {
        foreignKey: "FK_UBQEQP",
      });
    }
  }
  estructura.init(
    {
      IDESTRUCTURA: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      DESCRIPCION: DataTypes.STRING,
      DEPENDEID: DataTypes.INTEGER,
      ESTADO: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "estructura",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return estructura;
};
