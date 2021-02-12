"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      usuario.belongsTo(models.empleado, {
        foreignKey: "FK_EMPLEADO",
        onUpdate: "NO ACTION",
        onDelete: "NO ACTION",
      });

      usuario.hasMany(models.consecutivo, {
        foreignKey: "FK_USUARIO",
      });
    }
  }
  usuario.init(
    {
      IDUSUARIO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      USERNAME: DataTypes.STRING,
      PASSWORD: DataTypes.STRING,
      TOKEN: DataTypes.STRING,
      ESTADO: DataTypes.BOOLEAN,
      FK_EMPLEADO: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "usuario",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return usuario;
};
