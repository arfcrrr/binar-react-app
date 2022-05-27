/**
 * @file contains entry point of controllers api v1 module
 */

const userController = require("./userController");
const carController = require("./carController");

module.exports = {
  userController,
  carController,
};
