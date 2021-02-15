const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const { listar } = require("../queries/familiadspQueries");

const db = require("../models");
const familiadspModel = db.familiadsp;
const marcaModel = db.marca;
const catalogoeqpModel = db.catalogoeqp;
const catalogodspModel = db.catalogodsp;

const familiadspController = {
  listar: async function (req, res) {
    const familias = await familiadspModel.findAll({
      include: [
        {
          model: marcaModel,
          attributes: { exclude: ["IDMARCA"] },
        },
        {
          model: catalogodspModel,
          attributes: { exclude: ["IDCATALOGODSP"] },
        },
        {
          model: catalogoeqpModel,
          attributes: { exclude: ["IDCATALOGOEQP"] },
        },
      ],
    });

    res.render("familiadsp/listar", { familias });
  },

  crear: async function (req, res) {
    if (req.method === "GET") {
      const segmento = await catalogoeqpModel.findAll({
        where: { CATEGORIA: "ORDENADOR" },
      });
      const marcas = await marcaModel.findAll({});
      const tipodispositivo = await catalogodspModel.findAll({});

      res.render("familiadsp/crear", { marcas, tipodispositivo, segmento });
    }
    if (req.method === "POST") {
      let newfamiliadsp = {
        FK_MARCA: req.body.idmarca,
        FK_CATALOGOEQP: req.body.idcatalogoeqp,
        FK_CATALOGODSP: req.body.idcatalogodsp,
        FAMILIA: req.body.familia,
        GENERACION: req.body.generacion,
        ARQUITECTURA: req.body.arquitectura,
      };

      await familiadspModel
        .create(newfamiliadsp)
        .then((result) => {
          if (result) {
            res.redirect("/familiadsp/listar");
          }
        })
        .catch((err) => console.log(err));
    }
  },

  editar: async function (req, res) {
    const IDFAMILIADSP = req.params.id;
    if (req.method === "GET") {
      const familia = await familiadspModel.findAll({
        where: { IDFAMILIADSP },
      });
      const segmento = await catalogoeqpModel.findAll({
        where: { CATEGORIA: "ORDENADOR" },
      });
      const tipodispositivo = await catalogodspModel.findAll({});
      const marcas = await marcaModel.findAll({});
      res.render("familiadsp/editar", {
        data: {
          familia: familia[0],
          marcas,
          segmento,
          tipodispositivo,
          idmarca: familia[0].FK_MARCA,
          idtipodsp: familia[0].FK_CATALOGODSP,
          idsegmento: familia[0].FK_CATALOGOEQP,
        },
      });
    }
    if (req.method === "POST") {
      let updatefamiliadsp = {
        FK_MARCA: req.body.idmarca,
        FK_CATALOGOEQP: req.body.idcatalogoeqp,
        FK_CATALOGODSP: req.body.idcatalogodsp,
        FAMILIA: req.body.familia,
        GENERACION: req.body.generacion,
        ARQUITECTURA: req.body.arquitectura,
      };
      familiadspModel
        .update(updatefamiliadsp, { where: { IDFAMILIADSP } })
        .then((result) => {
          if (result) res.redirect("/familiadsp/listar");
        })
        .catch((err) => console.log(err));
    }
  },

  API_LISTAR: async function (req, res) {
    const familias = await sequelize.query(listar(), {
      type: QueryTypes.SELECT,
    });

    res.send(familias);
  },
};

module.exports = familiadspController;
