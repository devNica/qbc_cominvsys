"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario_perfil extends Model {
    static associate(models) {
      usuario_perfil.belongsTo(models.usuario, {
        foreignKey: "FK_USUARIO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      usuario_perfil.belongsTo(models.perfil, {
        foreignKey: "FK_PERFIL",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });
    }
  }
  usuario_perfil.init(
    {
      FK_USUARIO: DataTypes.INTEGER,
      FK_PERFIL: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "usuario_perfil",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return usuario_perfil;
};
