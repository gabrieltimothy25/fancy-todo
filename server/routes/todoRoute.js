const express = require('express')
const router = express.Router()

const controller = require('../controllers/todoController')

const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication, authorization)

router.get('/', controller.getTodos)

router.post('/', controller.createTodo)

router.get('/:id', controller.getOneTodo)

router.put('/:id', controller.updateTodo)

router.delete('/:id', controller.removeTodo)

module.exports = router