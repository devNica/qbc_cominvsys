'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ucapc extends Model {
    static associate(models) {
      ucapc.hasMany(models.dispositivo, {
        foreignKey: "FK_UCAPC"
      });  
    }
  };
  ucapc.init({
    IDUCAPC: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UNIDAD: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ucapc',
    freezeTableName: true,
    timestamps: false
  });
  return ucapc;
};