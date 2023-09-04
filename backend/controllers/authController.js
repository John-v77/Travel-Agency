const { promisify } = require("util");
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const sendEmail = require("../utils/mailer");
const colors = require("colors");
const AppError = require("../utils/appError");

// # signToken
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// # createSendToken
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    cookieOptions.secure = true;
  }
  res.cookie("jwt", token, cookieOptions);
  user.password = undefined;
  user.passwordConfirm = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: user,
    },
  });
};

// #1 Sign Up
const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;
  const newUser = await User.create({
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
  });
  createSendToken(newUser, 201, res);
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
  createSendToken(user, 200, res);
});

// #3 Protect Routes
const protect = catchAsync(async (req, res, next) => {
  let token;

  // get token check if exists
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
    console.log(token, "we are protecting".red);
  }

  if (!token) {
    res.status(401).json({
      status: "fail",
      message: "Unauthorized",
    });
    return next();
  }

  // validate token
  const decodedPayload = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

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

// #4 Restricted to
const restrictedTo = (...roles) => {
  return (req, res, next) => {
    // roles =['user', 'admin']
    if (!roles.includes(req.user.role)) {
      return next(new AppError("You do not have permission to perform this action", 403));
    }
    next();
  };
};

//  #5 Update Password

const updatePassword = catchAsync(async (req, res, next) => {
  console.log(req, "VV".red);
  // 1. get user from colection
  const user = await User.findById(req.user.id).select("+password");

  // 2.check if POST-ed current password is correct
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError("Your current password is wrong.", 400));
  }

  // 3. If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  // 4. Log user in, send JWT
  createSendToken(user, 200, res);
});

// // # Forgot password
// const forgotPassword = catchAsync(async (req, res, next) => {
//   // Get user by email
//   const user = await User.findOne({ email: req.body.email });
//   if (!user) {
//     return next(new AppError("There is no user with email address."), 404);
//   }
//   // Generate random password
//   const resetToken = user.createPasswordResetToken();
//   await user.save({ validateBeforeSave: false });

//   // send it to user email
//   const resetURL = `${req.protocol}://${req.get("host")}/api/v1/users/resetPassword/${resetToken}`;
//   const message = `Forgot password? Submit a PATCH req with your new password and passwordConfirm to:
//                    ${resetURL}.\n
//                    If you didn't forget the password, please igmore this email`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: "Your password reset token (valid for 10 min)",
//       message: message,
//     });

//     res.status(200).json({
//       status: "success",
//       message: "Token sent to email!",
//     });
//   } catch (err) {
//     user.passwordResetToken = undefined;
//     user.passwordResetExpires = undefined;
//     await user.save({ validateBeforeSave: false });

//     return next(new AppError(`There was an error sending the email, try again later! ${err}`), 500);
//   }
// });

// const resetPassword = catchAsync(async (req, res, next) => {});

module.exports = {
  signup,
  login,
  protect,
  restrictedTo,
  updatePassword,
};
