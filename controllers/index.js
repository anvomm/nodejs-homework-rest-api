const {
  listContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
} = require("./contacts");

const {
  registrationController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionChangeController,
  changeAvatarController,
} = require("./users");


module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionChangeController,
  listContactsController,
  getContactByIdController,
  addContactController,
  removeContactController,
  updateContactController,
  updateStatusContactController,
  changeAvatarController,
};
