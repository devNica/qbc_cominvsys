/* eslint-disable prettier/prettier */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class garantiaeqp extends Model {
    static associate(models) {
      garantiaeqp.belongsTo(models.proveedoreqp, {
        foreignKey: "FK_PROVEEDOREQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      garantiaeqp.hasMany(models.equipo, {
        foreignKey: "FK_GARANTIAEQP",
      });
    }
  }
  garantiaeqp.init(
    {
      IDGARANTIAEQP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      INICIO: DataTypes.DATE,
      FINALIZACION: DataTypes.DATE,
      DOCUMENTO: DataTypes.BLOB,
      ESTADO: DataTypes.BOOLEAN,
      NOTA: DataTypes.STRING,
      FK_PROVEEDOREQP: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "garantiaeqp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return garantiaeqp;
};
