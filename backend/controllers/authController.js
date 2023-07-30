const { promisify } = require("util");
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");

// # signToken
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// #1 Sign Up
const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  console.log("signup TT", email, password, passwordConfirm, name);
  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
  });

  const token = signToken(newUser._id);

  console.log(token, "what is the token", newUser);
  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

// #2 Login
const login = catchAsync(async (req, res, next) => {
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
  console.log("is token working", token, "\n");

  res.status(200).json({
    status: "success",
    token: token,
    userName: user.name,
  });
});

// Get all
const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  console.log("users!!!111", users);

  res.status(200).json({
    status: "success",
    results: users.length,
    data: { users },
  });
});

// #3 Protect Routes

const protect = catchAsync(async (req, res, next) => {
  let token;

  // get token check if exists
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }
  if (!token) {
    res.status(401).json({
      status: "fail",
      message: "Unauthorized",
    });
    return next();
  }

  // validate token
  const decodedPayload = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  // check user still exists
  const freshUser = await User.findById(decodedPayload.id);

  if (!freshUser) {
    res.status(401).json({
      status: "fail",
      message: "The user no longer exists",
    });
    return next();
  }
  // check if user changed pass after token was issued
  if (freshUser.changedPasswordAfter(decodedPayload.iat)) {
    res.status(401).json({
      status: "fail",
      message: "Password change recently, login again",
    });
    next();
  }
  //  grant access to protected route
  req.user = freshUser;
  return next();
});

module.exports = {
  signup,
  login,
  protect,
  getAllUsers,
};
