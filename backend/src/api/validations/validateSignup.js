const validator = require("validator");

const validateSignup = (email, password) => {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong.");
  }
};

module.exports = validateSignup;
