const registrationController = require("./registrationController");
const loginController = require("./loginController");
const logoutController = require("./logoutController");
const currentUserControler = require("./currentUserControler");
const subscriptionChangeController = require('./subscriptionChangeController');
const changeAvatarController = require('./changeAvatarController');

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionChangeController,
  changeAvatarController,
};
