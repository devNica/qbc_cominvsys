const router = require("express").Router();
const useraccountsController = require("../controllers/useraccounts");
const auth = require("../middlewares/auth");

router.post("/useraccounts/list", auth, useraccountsController.list);

module.exports = router;
