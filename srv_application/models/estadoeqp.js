/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class estadoeqp extends Model {
    static associate(models) {
      estadoeqp.hasMany(models.equipo, {
        foreignKey: "FK_ESTADOEQP",
      });
    }
  }
  estadoeqp.init(
    {
      IDESTADOEQP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      INFORMACION: DataTypes.STRING,
      RESGUARDO: DataTypes.STRING,
      ESTADO: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "estadoeqp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return estadoeqp;
};
