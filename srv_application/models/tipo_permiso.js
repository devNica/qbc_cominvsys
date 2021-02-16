"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tipo_permiso extends Model {
    static associate(models) {
      tipo_permiso.hasMany(models.permiso, {
        foreignKey: "FK_TIPOPERMISO",
      });
    }
  }
  tipo_permiso.init(
    {
      IDTIPOPERMISO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      TIPO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tipo_permiso",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return tipo_permiso;
};
