const router = require("express").Router();
const familiadspController = require("../controllers/familiadsp");

router.get("/listar", familiadspController.listar);
router.get("/crear", familiadspController.crear);
router.post("/crear", familiadspController.crear);
router.get("/editar/:id", familiadspController.editar);
router.post("/editar/:id", familiadspController.editar);
router.get("/api/listar", familiadspController.API_LISTAR);

module.exports = router;
