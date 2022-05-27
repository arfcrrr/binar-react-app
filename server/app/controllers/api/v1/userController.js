/**
 * @file contains request handler of post resource
 */
const userService = require("../../../services/userService");

module.exports = {
  register(req, res) {
    userService
      .register(req.body)
      .then((user) => {
        res.status(201).json({
          status: "CREATED",
          user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  login(req, res) {
    userService
      .login(req.body)
      .then((user) => {
        res.status(200).json({
          status: "OK",
          user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  addAdmin(req, res) {
    userService
    .addAdmin(req.params.id)
    .then((user) => {
        res.status(200).json({
            status: "OK",
            user
        });
    })
    .catch((err) => {
        res.status(400).json({
            status: "FAIL",
            message: err.message,
        });
    });
  },
  
  async whoAmI(req, res) {
    res.status(200).json({
      status: "OK",
      user: req.user,
    })
  }

};
