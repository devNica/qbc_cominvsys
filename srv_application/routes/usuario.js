const router = require("express").Router();
const usuarioConrtoller = require("../controllers/usuario");

router.post("/user/login", usuarioConrtoller.login);
router.post("/user/registrar", usuarioConrtoller.registar);

module.exports = router;
