const router = require("express").Router();
const usuarioConrtoller = require("../controllers/usuario");

router.post("/user/login", usuarioConrtoller.login);
router.post("/user/register", usuarioConrtoller.registar);
router.post("/user/uploadimage", usuarioConrtoller.uploadImage);
router.post("/user/downloadimage", usuarioConrtoller.dowloadImage);

module.exports = router;
