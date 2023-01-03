const bcrypt = require("bcrypt");

const verifyPassword = async (user, password) => {
  const match = await bcrypt.compare(password, user.password);
  return match;
};

module.exports = verifyPassword;
