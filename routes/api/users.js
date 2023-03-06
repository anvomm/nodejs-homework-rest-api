const express = require("express");
const { auth } = require("../../middlewares");

const router = express.Router();

const { controllerWrapper } = require("../../helpers");
const {
  registrationController,
  loginController,
  logoutController,
  currentUserControler,
} = require("../../controllers");

router.post("/signup", controllerWrapper(registrationController));
router.post("/login", controllerWrapper(loginController));
router.get("/logout", auth, controllerWrapper(logoutController));
router.get("/current", auth, controllerWrapper(currentUserControler));

module.exports = router;
