const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");

// # signToken
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// #1 Sign Up
const signup = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);
    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// #2 Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1 Check if email and password exist
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "email or password missing!",
      });
      return next();
    }
    // 2 Check if user exists && password is correct
    const user = await User.findOne({ email: email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(401).json({
        status: "fail",
        message: "incorect email or password",
      });
      return next();
    }
    // 3 if everything is ok, send token to client
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token: token,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  signup,
  login,
};
