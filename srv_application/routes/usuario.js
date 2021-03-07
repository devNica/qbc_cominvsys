const router = require("express").Router();
const usuarioConrtoller = require("../controllers/usuario");
const auth = require("../middlewares/auth");

router.post("/user/login", usuarioConrtoller.login);
router.post("/user/register", usuarioConrtoller.registar);
router.post("/user/uploadimage", auth, usuarioConrtoller.uploadImage);
router.post("/user/downloadimage", auth, usuarioConrtoller.dowloadImage);

module.exports = router;
