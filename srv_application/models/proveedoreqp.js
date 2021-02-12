"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class proveedoreqp extends Model {
    static associate(models) {
      proveedoreqp.hasMany(models.garantiaeqp, {
        foreignKey: "FK_PROVEEDOREQP",
      });
    }
  }
  proveedoreqp.init(
    {
      IDPROVEEDOREQP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      PROVEEDOR: DataTypes.STRING,
      CONTACTO: DataTypes.STRING,
      TELF: DataTypes.STRING,
      CORREO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "proveedoreqp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return proveedoreqp;
};
