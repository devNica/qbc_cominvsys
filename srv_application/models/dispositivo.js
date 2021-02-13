/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class dispositivo extends Model {
    static associate(models) {
      dispositivo.belongsTo(models.ucapc, {
        foreignKey: "FK_UCAPC",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      dispositivo.belongsTo(models.ufreq, {
        foreignKey: "FK_UFREQ",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      dispositivo.belongsTo(models.familiadsp, {
        foreignKey: "FK_FAMILIADSP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  dispositivo.init(
    {
      IDDISPOSITIVO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      FK_FAMILIADSP: DataTypes.INTEGER,
      UCAP: DataTypes.DECIMAL,
      FK_UCAPC: DataTypes.INTEGER,
      UFREQ: DataTypes.DECIMAL,
      FK_UFREQ: DataTypes.INTEGER,
      MODELO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "dispositivo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return dispositivo;
};
