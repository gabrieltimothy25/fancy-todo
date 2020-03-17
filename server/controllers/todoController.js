const { Todo } = require("../models");
module.exports = {
  fetchTodos(req, res, next) {
    Todo.find({ userId: req.currentUserId })
      .then(todos => {
        res.status(200).json(todos);
      })
      .catch(next);
  },
  addTodo(req, res, next) {
    const { title, description, due } = req.body;
    Todo.create({
      title,
      description,
      due: new Date(due),
      userId: req.currentUserId
    })
      .then(newTodo => {
        res.status(200).json(newTodo);
      })
      .catch(next);
  },
  editTodo(req, res, next) {
    const { title, description, due } = req.body;
    Todo.findByIdAndUpdate(
      req.params.todoId,
      {
        title,
        description,
        due: new Date(due),
        userId: req.currentUserId
      },
      { new: true }
    )
      .then(updatedTodo => {
        res.status(200).json(updatedTodo);
      })
      .catch(next);
  },
  removeTodo(req, res, next) {
    Todo.findByIdAndDelete(req.params.todoId)
      .then(_ => {
        res.status(200).json({
          message: "Delete successful"
        });
      })
      .catch(next);
  }
};
