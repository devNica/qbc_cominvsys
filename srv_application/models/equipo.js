"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class equipo extends Model {
    static associate(models) {
      equipo.belongsTo(models.modeloeqp, {
        foreignKey: "FK_MODELOEQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      equipo.belongsTo(models.estructura, {
        foreignKey: "FK_UBQEQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      equipo.belongsTo(models.catalogoeqp, {
        foreignKey: "FK_CATALOGOEQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      equipo.belongsTo(models.garantiaeqp, {
        foreignKey: "FK_GARANTIAEQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      equipo.belongsTo(models.estadoeqp, {
        foreignKey: "FK_ESTADOEQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      equipo.belongsTo(models.empleado, {
        foreignKey: "FK_EMPLEADO",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      equipo.hasMany(models.especificacioneqp, {
        foreignKey: "FK_EQUIPO",
      });
    }
  }
  equipo.init(
    {
      IDEQUIPO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      NOTA: DataTypes.STRING,
      CODIGOINV: DataTypes.STRING,
      SERIE: DataTypes.STRING,
      INGRESO: DataTypes.DATE,
      FK_MODELOEQP: DataTypes.INTEGER,
      FK_UBQEQP: DataTypes.INTEGER,
      FK_CATALOGOEQP: DataTypes.INTEGER,
      FK_GARANTIAEQP: DataTypes.INTEGER,
      FK_ESTADOEQP: DataTypes.INTEGER,
      FK_EMPLEADO: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "equipo",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return equipo;
};
