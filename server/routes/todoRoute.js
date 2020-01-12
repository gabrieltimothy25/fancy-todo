const express = require('express')
const router = express.Router()

const controller = require('../controllers/todoController')

router.get('/', controller.getTodos)

router.post('/', controller.createTodo)

router.get('/:id', controller.getOneTodo)

router.put('/:id', controller.updateTodo)

router.delete('/:id', controller.removeTodo)

module.exports = router