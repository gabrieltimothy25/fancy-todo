const { userController } = require("../controllers");
const router = require("express").Router();

router.post("/signin", userController.signin);
router.post("/signup", userController.signup);
module.exports = router;
