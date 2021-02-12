"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class modeloeqp extends Model {
    static associate(models) {
      modeloeqp.belongsTo(models.marca, {
        foreignKey: "FK_MARCA",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      modeloeqp.belongsTo(models.catalogoeqp, {
        foreignKey: "FK_CATALOGOEQP",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION",
      });

      modeloeqp.hasMany(models.equipo, {
        foreignKey: "FK_MODELOEQP",
      });
    }
  }
  modeloeqp.init(
    {
      IDMODELO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      MODELO: DataTypes.STRING,
      DETALLE: DataTypes.STRING,
      FK_MARCA: DataTypes.INTEGER,
      FK_CATALOGOEQP: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "modeloeqp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return modeloeqp;
};
