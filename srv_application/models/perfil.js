"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    static associate(models) {
      perfil.hasMany(models.usuario_perfil, {
        foreignKey: "FK_PERFIL",
      });

      perfil.hasMany(models.perfil_permiso, {
        foreignKey: "FK_PERFIL",
      });
    }
  }
  perfil.init(
    {
      IDPERFIL: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      PERFIL: DataTypes.STRING,
      ESTADO: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "perfil",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return perfil;
};
