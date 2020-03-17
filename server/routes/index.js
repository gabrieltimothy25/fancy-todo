const todosRoute = require("./todosRoute");
const usersRoute = require("./usersRoute");

const router = require("express").Router();
const errorHandler = require("../middlewares/errorHandler");

router.use("/users", usersRoute);
router.use("/todos", todosRoute);
router.use(errorHandler);

module.exports = router;
