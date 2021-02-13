const router = require("express").Router();
const modeloeqpController = require("../controllers/modeloeqp");

router.get("/crear", modeloeqpController.crear);

router.post("/crear", modeloeqpController.crear);

router.get("/listar", modeloeqpController.listar);

router.get("/editar/:id", modeloeqpController.editar);

router.post("/editar/:id", modeloeqpController.editar);

module.exports = router;
