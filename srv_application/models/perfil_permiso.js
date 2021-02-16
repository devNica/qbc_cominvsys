"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class perfil_permiso extends Model {
    static associate(models) {
      perfil_permiso.belongsTo(models.perfil, {
        foreignKey: "FK_PERFIL",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });

      perfil_permiso.belongsTo(models.permiso, {
        foreignKey: "FK_PERMISO",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });
    }
  }
  perfil_permiso.init(
    {
      FK_PERFIL: DataTypes.INTEGER,
      FK_PERMISO: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "perfil_permiso",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return perfil_permiso;
};
