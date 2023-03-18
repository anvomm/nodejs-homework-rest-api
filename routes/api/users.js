const express = require("express");
const { auth, upload } = require("../../middlewares");

const router = express.Router();

const { controllerWrapper } = require("../../helpers");
const {
  registrationController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionChangeController,
  changeAvatarController,
  verificationController,
  repeatVerificationController,
} = require("../../controllers");


router.post("/signup", controllerWrapper(registrationController));
router.post("/login", controllerWrapper(loginController));
router.get("/logout", auth, controllerWrapper(logoutController));
router.get("/current", auth, controllerWrapper(currentUserControler));
router.patch("/subscription", auth, controllerWrapper(subscriptionChangeController));
router.patch("/avatars", auth, upload.single("avatar"), controllerWrapper(changeAvatarController));

router.get("/verify/:verificationToken", controllerWrapper(verificationController));
router.post("/verify", controllerWrapper(repeatVerificationController));

module.exports = router;
