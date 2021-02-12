"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class catalogodsp extends Model {
    static associate(models) {
      catalogodsp.hasMany(models.familiadsp, {
        foreignKey: "FK_CATALOGODSP",
      });
    }
  }
  catalogodsp.init(
    {
      IDCATALOGODSP: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      DISPOSITIVO: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "catalogodsp",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return catalogodsp;
};
