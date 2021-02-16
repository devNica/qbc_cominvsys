"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario_modulo extends Model {
    static associate(models) {
      usuario_modulo.belongsTo(models.modulo, {
        foreignKey: "FK_MODULO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      usuario_modulo.belongsTo(models.usuario, {
        foreignKey: "FK_USUARIO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  usuario_modulo.init(
    {
      FK_MODULO: DataTypes.INTEGER,
      FK_USUARIO: DataTypes.INTEGER,
      VISIBLE: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "usuario_modulo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return usuario_modulo;
};
