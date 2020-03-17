const messages = require("../config/messages");
module.exports = (err, req, res, next) => {
  let { name, code } = err;
  if (name === "JsonWebTokenError" || name === "MongooseError") {
    res.status(400).json(err);
  } else if (name === "Authentication Error") {
    res.status(code).json({
      name,
      message: messages.INVALID_TOKEN
    });
  } else if (name === "Authorization Error") {
    res.status(code).json({
      name,
      message: messages.UNAUTHORIZED
    });
  } else if (name === "Duplicate Error") {
    res.status(code).json({
      name,
      message: messages.DUPLICATE_USERNAME
    });
  } else if (name === "Login Error") {
    res.status(code).json({
      name,
      message: messages.LOGIN_ERROR
    });
  } else {
    res.status(500).json({
      name: "INTERNAL_SERVER_ERROR",
      message: err.message
    });
  }
};
