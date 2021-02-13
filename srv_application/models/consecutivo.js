/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class consecutivo extends Model {
    static associate(models) {
      consecutivo.belongsTo(models.catalogoeqp, {
        foreignKey: "FK_CATALOGOEQP",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });

      consecutivo.belongsTo(models.usuario, {
        foreignKey: "FK_USUARIO",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });

      consecutivo.hasMany(models.equipo, {
        foreignKey: "FK_CONSECUTIVO",
      });
    }
  }
  consecutivo.init(
    {
      IDCONSECUTIVO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      CONSECUTIVO: DataTypes.STRING,
      ESTADO: DataTypes.BOOLEAN,
      FK_CATALOGOEQP: DataTypes.INTEGER,
      FK_USUARIO: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "consecutivo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return consecutivo;
};
