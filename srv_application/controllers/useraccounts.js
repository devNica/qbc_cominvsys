const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

const { accounts } = require("../queries/usuarioQueries");

const useraccountsController = {
  list: (req, res) => {
    sequelize
      .query(accounts(), {
        type: QueryTypes.SELECT,
      })
      .then((accounts) => {
        if (accounts) {
          res.status(200).json({ success: true, msg: "", accounts });
        } else {
          res.json({
            msg: `Ocurrio un error al ejecutar la consulta`,
            success: false,
          });
        }
      })
      .catch((err) => res.status(200).json({ error: err }));
  },
};

module.exports = useraccountsController;
