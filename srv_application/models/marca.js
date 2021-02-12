"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class marca extends Model {
    static associate(models) {
      marca.hasMany(models.modeloeqp, {
        foreignKey: "FK_MARCA",
      });
    }
  }
  marca.init(
    {
      IDMARCA: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      MARCA: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "marca",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return marca;
};
