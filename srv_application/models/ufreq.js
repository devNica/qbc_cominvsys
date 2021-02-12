'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ufreq extends Model {
   static associate(models) {
      ufreq.hasMany(models.dispositivo, {
        foreignKey: "FK_UFREQ",
      }); 
    }
  };
  ufreq.init({
    IDUFREQ: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UNIDAD: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ufreq',
    freezeTableName: true,
    timestamps: false
  });
  return ufreq;
};