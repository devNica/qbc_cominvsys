const router = require("express").Router();
const dispositivoController = require("../controllers/dispositivo");

router.get("/listar", dispositivoController.listar);
router.get("/crear", dispositivoController.crear);
router.post("/crear", dispositivoController.crear);
router.get("/editar/:id", dispositivoController.editar);
router.post("/editar/:id", dispositivoController.editar);

module.exports = router;
