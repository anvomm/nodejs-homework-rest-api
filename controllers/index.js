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
  verificationController,
  repeatVerificationController,
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
  verificationController,
  repeatVerificationController,
};
