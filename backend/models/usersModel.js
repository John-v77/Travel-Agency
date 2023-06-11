const { Schema, model } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    // validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm password'],
    validate: {
      // this validator only works on CREATE or SAVE!!
      validator: function (el) {
        return el == this.password;
      },
      message: "Password doesn't match",
    },
  },
  passwordChangedAt: Date,
});

userSchema.pre('save', async function (next) {
  // only run if password was modified
  if (!this.isModified('password')) return next();

  // hash password
  this.password = await bcrypt.hash(this.password, 12);
  // delete password confirm field
  this.passwordConfirm = null;
  next();
});

//Check if the password match when hashed - using Instance Method
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  const res = await bcrypt.compare(candidatePassword, userPassword);
  console.log(res, 'is the key working &&&&&&&&&&&&');
  return res;
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

const userModel = model('User', userSchema);

module.exports = userModel;
