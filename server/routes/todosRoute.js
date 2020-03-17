const router = require("express").Router();
const { todoController } = require("../controllers");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.use(authentication);

router.get("/", todoController.fetchTodos);

router.post("/", todoController.addTodo);

router.put("/:todoId", todoController.editTodo);

router.delete("/:todoId", todoController.removeTodo);

module.exports = router;
