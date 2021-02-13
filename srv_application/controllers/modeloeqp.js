const db = require("../models");
const modeloeqpModel = db.modeloeqp;
const catalogoeqpModel = db.catalogoeqp;
const marcaModel = db.marca;

const modeloeqpController = {
  crear: function (req, res) {
    if (req.method === "GET") {
      marcaModel
        .findAll({})
        .then((data1) => {
          let marcas = {};
          if (data1) marcas = data1;

          catalogoeqpModel.findAll({}).then((data2) => {
            let tiposequipos = {};
            if (data2) tiposequipos = data2;
            res.render("modeloeqp/crear", { marcas, tiposequipos });
          });
        })
        .catch((err) => console.log(err));
    }
    if (req.method === "POST") {
      let newmodel = {
        MODELO: req.body.modelo,
        FK_MARCA: req.body.idmarca,
        DETALLE: req.body.detalle,
        FK_CATALOGOEQP: req.body.idcatalogoeqp,
      };

      modeloeqpModel
        .create(newmodel)
        // eslint-disable-next-line no-unused-vars
        .then((result) => {
          res.redirect("/modelo/listar");
        })
        .catch((err) => console.log(err));
    }
  },

  listar: function (req, res) {
    modeloeqpModel
      .findAll({
        include: [
          {
            model: marcaModel,
            attributes: { exclude: ["IDMARCA"] },
          },
          {
            model: catalogoeqpModel,
            attributes: { exclude: ["IDCATALOGOEQP"] },
          },
        ],
      })
      .then((data) => {
        //res.json({ data });
        res.render("modeloeqp/listar", { modelos: data });
      })
      .catch((err) => console.log(err));
  },

  editar: async function (req, res) {
    if (req.method === "GET") {
      let IDMODELO = req.params.id;
      const marcas = await marcaModel.findAll({ raw: true, plain: false });
      const tiposequipos = await catalogoeqpModel.findAll({
        raw: true,
        plain: false,
      });
      const modelo = await modeloeqpModel.findAll({
        raw: true,
        plain: false,
        where: { IDMODELO },
      });

      console.log(modelo[0]);

      if (modelo == null) {
        console.log(`not found`);
      } else {
        res.render("modeloeqp/editar", {
          data: {
            modelo,
            marcas,
            tiposequipos,
            idmarcaeqp: modelo[0].FK_MARCA,
            idtipoeqp: modelo[0].FK_CATALOGOEQP,
            detalle: modelo[0].DETALLE,
          },
        });
      }
    }
    if (req.method === "POST") {
      let IDMODELO = req.params.id;
      let updatemodel = {
        MODELO: req.body.modelo,
        DETALLE: req.body.detalle,
        FK_MARCA: req.body.idmarca,
        FK_CATALOGOEQP: req.body.idcatalogoeqp,
      };
      await modeloeqpModel
        .update(updatemodel, { where: { IDMODELO } })
        .then((result) => {
          if (result) res.redirect("/modelo/listar");
        })
        .catch((err) => console.log(err));
    }
  },
};

module.exports = modeloeqpController;
