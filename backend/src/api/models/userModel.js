const mongoose = require("mongoose");

const validateSignup = require("../validations/validateSignup");
const hashPassword = require("../helpers/hashPassword");
const verifyPassword = require("../validations/verifyPassword");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  //validation

  validateSignup(email, password);

  // check if email already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  // hasing password
  const hash = await hashPassword(password);

  // create new user
  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  // check if email exists
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  // verify password
  const match = verifyPassword(user, password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
