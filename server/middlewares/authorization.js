const { Todo } = require("../models");
module.exports = (req, res, next) => {
  Todo.findById(req.params.todoId)
    .then(todo => {
      if (req.currentUserId.toString() === todo.userId.toString()) {
        next();
      } else {
        next({
          name: "Authorization Error",
          code: 401
        });
      }
    })
    .catch(next);
};
