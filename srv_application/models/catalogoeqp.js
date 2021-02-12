'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class catalogoeqp extends Model {
    static associate(models) {
      catalogoeqp.hasMany(models.modeloeqp, {
        foreignKey: "FK_CATALOGOEQP",
      });

      catalogoeqp.hasMany(models.familiadsp, {
        foreignKey: "FK_CATALOGOEQP",
      });
      
      catalogoeqp.hasMany(models.consecutivo, {
        foreignKey: "FK_CATALOGOEQP",
      });

      catalogoeqp.hasMany(models.equipo, {
        foreignKey: "FK_CATALOGOEQP",
      });

    }
  };
  catalogoeqp.init({
    IDCATALOGOEQP: DataTypes.INTEGER,
    TIPOEQP: DataTypes.STRING,
    CATEGORIA: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'catalogoeqp',
    freezeTableName: true,
    timestamps: false
  });
  return catalogoeqp;
};