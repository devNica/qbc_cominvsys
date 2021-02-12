"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class empleado extends Model {
    static associate(models) {
      empleado.belongsTo(models.estructura, {
        foreignKey: "FK_UBQEMP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      empleado.hasMany(models.usuario, {
        foreignKey: "FK_EMPLEADO",
      });

      empleado.hasMany(models.equipo, {
        foreignKey: "FK_EMPLEADO",
      });
    }
  }
  empleado.init(
    {
      IDEMPLEADO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      CODIGO: DataTypes.STRING,
      NUMERO: DataTypes.STRING,
      CEDULA: DataTypes.STRING,
      NOMBRECOMPLETO: DataTypes.STRING,
      TELF: DataTypes.STRING,
      CORREO: DataTypes.STRING,
      CARGO: DataTypes.STRING,
      SALARIO: DataTypes.DECIMAL,
      ESTADO: DataTypes.BOOLEAN,
      FOTO: DataTypes.BLOB,
      FK_UBQEMP: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "empleado",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return empleado;
};
