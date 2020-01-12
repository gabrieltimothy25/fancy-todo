const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

router.get('/', controller.getUsers)

router.post('/', controller.createUser)

router.get('/:id', controller.getOneUser)

router.post('/google-sign-in', controller.googleSignIn)

router.put('/:id', authentication, (req, res, next) => {
    if (req.params.id === req.currentUserId) {
        next()
    } else {
        console.log(err.message)
        next(err)
    }
}, controller.updateUser)

router.delete('/:id', (req, res, next) => {
    if (req.params.id === req.currentUserId) {
        next()
    } else {
        console.log(err.message)
        next(err)
    }
}, controller.deleteUser)

module.exports = router;