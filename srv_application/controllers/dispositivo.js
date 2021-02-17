const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");
const { listar } = require("../queries/dispositivoQueries");

const db = require("../models");
const dispositivoModel = db.dispositivo;
const familiadspModel = db.familiadsp;
const marcaModel = db.marca;
const catalogoeqpModel = db.catalogoeqp;
const catalogodspModel = db.catalogodsp;
const ucapcModel = db.ucapc;
const ufreqModel = db.ufreq;

const dispositivoController = {
  listar: async function (req, res) {
    const dispositivo = await dispositivoModel.findAll({
      include: [
        {
          model: familiadspModel,
          attributes: { exclude: ["IDFAMILIADSP"] },
          include: [
            {
              model: marcaModel,
              attributes: { exclude: ["IDMARCA"] },
            },
            {
              model: catalogoeqpModel,
              attributes: { exclude: ["IDCATALOGOEQP"] },
            },
            {
              model: catalogodspModel,
              attributes: { exclude: ["IDCATALOGODSP"] },
            },
          ],
        },
        {
          model: ucapcModel,
          attributes: { exclude: ["IDUCAPC"] },
        },
        {
          model: ufreqModel,
          attributes: { exclude: ["IDUFREQ"] },
        },
      ],
    });

    res.render("dispositivoeqp/listar", { dispositivos: dispositivo });
  },

  crear: async function (req, res) {
    if (req.method === "GET") {
      const familias = await familiadspModel.findAll({
        include: [
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

      const ucapc = await ucapcModel.findAll({});
      const ufreq = await ufreqModel.findAll({});
      res.render("dispositivoeqp/crear", { familias, ucapc, ufreq });
    }
    if (req.method === "POST") {
      let dispositivo = {
        FK_FAMILIADSP: req.body.idfamiliadsp,
        UCAP: req.body.capacidad,
        FK_UCAPC: req.body.idcapc,
        UFREQ: req.body.frecuencia,
        FK_UFREQ: req.body.idfreq,
        MODELO: req.body.modelo,
      };

      console.log(dispositivo);

      await dispositivoModel
        .create(dispositivo)
        .then((result) => {
          if (result) {
            res.redirect("/dispositivo/listar");
          }
        })
        .catch((err) => console.log(err));
    }
  },

  editar: async function (req, res) {
    let IDDISPOSITIVO = req.params.id;
    if (req.method === "GET") {
      const dispositivo = await sequelize.query(listar(IDDISPOSITIVO), {
        type: QueryTypes.SELECT,
      });

      const ucapc = await ucapcModel.findAll({});
      const ufreq = await ufreqModel.findAll({});

      res.render("dispositivoeqp/editar", {
        data: {
          dispositivo,
          ucapc,
          ufreq,
          idfrecuencia: dispositivo[0].FK_UFREQ,
          idcapacidad: dispositivo[0].FK_UCAPC,
        },
      });
    }
    if (req.method === "POST") {
      let updatedispositivo = {
        FK_FAMILIADSP: req.body.idfamiliadsp,
        UCAP: req.body.capacidad,
        FK_UCAPC: req.body.idcapc,
        UFREQ: req.body.frecuencia,
        FK_UFREQ: req.body.idfreq,
        MODELO: req.body.modelo,
      };

      await dispositivoModel
        .update(updatedispositivo, { where: { IDDISPOSITIVO } })
        .then((result) => {
          if (result) res.redirect("/dispositivo/listar");
        })
        .catch((err) => console.log(err));
    }
  },
};

module.exports = dispositivoController;
