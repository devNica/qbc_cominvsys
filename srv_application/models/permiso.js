"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class permiso extends Model {
    static associate(models) {
      permiso.belongsTo(models.modulo, {
        foreignKey: "FK_MODULO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      permiso.belongsTo(models.tipo_permiso, {
        foreignKey: "FK_TIPOPERMISO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      permiso.belongsTo(models.perfil_permiso, {
        foreignKey: "FK_PERMISO",
      });
    }
  }
  permiso.init(
    {
      IDPERMISO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      FK_TIPOPERMISO: DataTypes.INTEGER,
      FK_MODULO: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "permiso",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return permiso;
};
