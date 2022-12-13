const { Schema, model } = require("mongoose");
const validator = require("validator");
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
    validate: [validator.isEmail, "Please provide a valid email"],
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
    validate: {
      // this validator only works on CREATE or SAVE!!
      validator: function (el) {
        return el == this.password;
      },
      message: "Password doesn't match",
    },
  },
});

const userModel = model("User", userSchema);

module.exports = userModel;
