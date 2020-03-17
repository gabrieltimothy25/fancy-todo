const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const messages = require("../config/messages");
module.exports = {
  signup(req, res, next) {
    const { username, password } = req.body;
    User.findOne({ username })
      .then(user => {
        if (user) {
          next({
            name: "Duplicate Error",
            code: 400
          });
        } else {
          return User.create({
            username,
            password
          });
        }
      })
      .then(newUser => {
        res.status(201).json({
          message: "User successfully created",
          newUser
        });
      })
      .catch(err => {
        next(err);
      });
  },
  signin(req, res, next) {
    const { username, password } = req.body;
    User.findOne({ username }).then(user => {
      if (!user) {
        next({
          name: "Login Error",
          code: 400
        });
      } else {
        if (!bcrypt.compareSync(password, user.password)) {
          next({
            name: "Login Error",
            code: 400
          });
        }
        let access_token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ access_token });
      }
    });
  }
};
