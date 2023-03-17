const { findUserInDb } = require("../../services");
const { createEmail, sendEmail } = require("../../helpers");

const repeatVerificationController = async (req, res) => {
  const { email } = req.body;
  if (!req.body) {
    return res.status(400).json({ message: "missing required field email" });
  }

  const registeredUser = await findUserInDb(email);

  if (!registeredUser) {
    return res.status(404).json({ message: "user is not registered" });
  }
  if (registeredUser.verify) {
    return res
      .status(400)
      .json({ message: "Verification has already been passed" });
  }

  const mail = createEmail(email, registeredUser.verificationToken);

  await sendEmail(mail);

  return res.status(200).json({ message: "Verification email sent" });
};

module.exports = repeatVerificationController;
