/* eslint-disable prettier/prettier */
"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
/*CONFIGURACION PARA MIGRACION DE MODELOS POR MEDIO DEL CLI DE SEQUELIZE*/
//const env = process.env.NODE_ENV || "development";
//const config = require(__dirname + "/../config/config.js")[env];
/*CONFIGURACION PARA USO DE LOS MODELOS*/
const config = require("../config/database");
const db = {};

console.log(config)

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options,
)

/*CONFIGURACION SOLAMENTE USADA CON EL CLI DE SEQUELIZE */
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// sequelize
//   .sync({
//     alter: true
//   })
//   .then(()=>{
//     console.log(`the models has been updated`);
//   })

sequelize
  .authenticate()
  .then(()=>{
    console.log(`Database connection has successfully`)
  }).catch(err=>{
    console.log(`Database connection failed: ${err}`)
  })

module.exports = db;
