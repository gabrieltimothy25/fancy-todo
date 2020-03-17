const jwt = require("jsonwebtoken");
const messages = require("../config/messages");
const { User } = require("../models");
module.exports = (req, res, next) => {
  let { access_token } = req.headers;
  jwt.verify(access_token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) next(err);
    else {
      User.findById(decoded._id).then(user => {
        if (!user) {
          next({
            name: "Authentication Error",
            code: 403
          });
        } else {
          req.currentUserId = decoded._id;
          next();
        }
      });
    }
  });
};
