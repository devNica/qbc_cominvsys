const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const db = require("../models");
const usuarioModel = db.usuario;
const { sesion } = require("../queries/usuarioQueries");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const knex = require("knex")({
  client: "mysql",
  version: "7.4.9-0",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "windows",
    database: "qbc_cominvsys",
  },
});

require("dotenv").config();

const usuarioConrtoller = {
  login: async (req, res) => {
    let data = {
      username: req.body.username,
      password: req.body.password,
    };

    sequelize
      .query(sesion(data), {
        type: QueryTypes.SELECT,
      })
      .then((usuario) => {
        if (usuario[0].IDUSUARIO) {
          if (bcrypt.compareSync(data.password, usuario[0].PASSWORD)) {
            // let token = jwt.sign(
            //   { data: `${usuario[0].username}` },
            //   process.env.SECRET_KEY,
            //   { expiresIn: 1800 }
            // );
            let PERMISO = usuario[0].PERMISO.split(",");
            let MODULO = usuario[0].MODULO.split(",");
            usuario[0].PERMISO = PERMISO;
            usuario[0].MODULO = MODULO;

            res.status(200).json({ usuario, flag: true });
          } else {
            res.json({
              msg: `la contraseña introducida es incorrecta`,
              flag: false,
            });
          }
        } else {
          res.json({
            msg: `No se encontro ningun registro del usuario:${data.username}`,
            flag: false,
          });
        }
      })
      .catch((err) => res.status(200).json({ error: err }));
  },

  registar: async (req, res) => {
    let nuevousuario = {
      USERNAME: "LMARSELL",
      PASSWORD: "lamisma123",
      TOKEN: "",
      ESTADO: 1,
      FK_EMPLEADO: 1,
    };

    bcrypt.hash(nuevousuario.PASSWORD, 10, (err, hash) => {
      nuevousuario.PASSWORD = hash;
      if (err) {
        res.status(200).json({
          msg: `Ocurrio un error al intentar guardar la contraseña del usuario: ${err}`,
        });
      } else {
        let token = jwt.sign(
          `${nuevousuario.USERNAME}${nuevousuario.PASSWORD}`,
          process.env.SECRET_KEY
        );
        nuevousuario.TOKEN = token;

        usuarioModel
          .create(nuevousuario)
          .then((usuario) => {
            res.json({ usuario });
          })
          // eslint-disable-next-line no-unused-vars
          .catch((err) =>
            res.status(200).json({
              msg: "Ocurrio un error al intentar guardar los datos del usuario",
            })
          );
      }
    });
  },

  uploadImage: async (req, res) => {
    if (req.files) {
      // eslint-disable-next-line no-unused-vars
      const { name, data } = req.files.img;
      await knex("usuario")
        .update({ FOTO: data })
        .where({ IDUSUARIO: req.body.IDUSUARIO });
      res.status(200).json({ flag: true, msg: "La imagen ha sido cambiada" });
    } else {
      res.status(200).json({ flag: false, msg: "No se encontro el archivo" });
    }
  },

  dowloadImage: async (req, res) => {
    let IDUSUARIO = req.body.IDUSUARIO;
    console.log(`IDUSUARIO: ${IDUSUARIO}`);
    const usuario = await usuarioModel.findAll({ where: { IDUSUARIO } });
    if (usuario[0].FOTO) {
      res.status(200).json({ flag: true, photo: usuario[0].FOTO });
    } else {
      res
        .status(200)
        .json({ flag: false, msg: `No se encontraron resultados` });
    }
  },
};

module.exports = usuarioConrtoller;
