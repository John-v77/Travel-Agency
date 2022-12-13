const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    // validate: true
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm password"],
  },
});

const userModel = model("userSchema", userSchema);

module.exports = userModel;
