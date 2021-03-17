const router = require("express").Router();
const empleadoController = require("../controllers/empleado");
const auth = require("../middlewares/auth");

router.post("/employee/list", auth, empleadoController.list);

module.exports = router;
