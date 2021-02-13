/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class familiadsp extends Model {
    static associate(models) {
      familiadsp.hasMany(models.dispositivo, {
        foreignKey: "FK_FAMILIADSP",
      });

      familiadsp.belongsTo(models.catalogodsp, {
        foreignKey: "FK_CATALOGODSP",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });

      familiadsp.belongsTo(models.marca, {
        foreignKey: "FK_MARCA",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });

      familiadsp.belongsTo(models.catalogoeqp, {
        foreignKey: "FK_CATALOGOEQP",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });
    }
  }
  familiadsp.init(
    {
      IDFAMILIADSP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      FAMILIA: DataTypes.STRING,
      GENERACION: DataTypes.STRING,
      ARQUITECTURA: DataTypes.STRING,
      FK_MARCA: DataTypes.INTEGER,
      FK_CATALOGODSP: DataTypes.INTEGER,
      FK_CATALOGOEQP: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "familiadsp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return familiadsp;
};
