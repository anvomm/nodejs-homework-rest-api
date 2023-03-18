const createEmail = (email, token) => {
  return {
    to: email,
    subject: "Email verification",
    html: `<p>By clicking <a target=_blank href="http://localhost:3030/api/users/verify/${token}">this link</a>, you are confirming your email address.</p>`,
  };
};

module.exports = createEmail;
