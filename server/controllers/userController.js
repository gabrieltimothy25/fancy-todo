const User = require('../models/user')
module.exports = {
    getUsers(req, res, next) {
        User.find().populate('todos')
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    getOneUser(req, res, next) {
        User.findById(req.params.id).populate('todos')
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    createUser(req, res, next) {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            todos: []
        })
            .then(data => {
                res.status(201).json({ data })
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    updateUser(req, res, next) {
        User.updateOne({ _id: req.params.id}, {
            username: req.body.username,
            password: req.body.password
        })
            .then(result => {
                res.status(200).json({ result })
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    },
    deleteUser(req, res, next) {
        User.deleteOne({ _id: req.params.id})
            .then(result => {
                res.status(204).json({ result })
            })
            .catch(err => {
                console.log(err.message)
                next(err)
            })
    }
}