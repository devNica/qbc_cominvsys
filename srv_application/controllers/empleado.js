const db = require("../models");
const empleadoModel = db.empleado;

const empleadoController = {
  list: async (req, res) => {
    const empleados = await empleadoModel.findAll({
      attributes: { exclude: ["FOTO"] },
    });

    if (empleados) {
      res.status(200).json({ success: true, msg: "", empleados });
    } else {
      res.json({ success: false, msg: "Error al ejecutar la consulta" });
    }
  },
};

module.exports = empleadoController;
