const { promisify } = require('util');
const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');

// # signToken
const signToken = (id) => {
  console.log('dot. env', process.env.JWT_SECRET);
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// #1 Sign Up
const signup = async (req, res, next) => {
  // console.log('step1$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', req.body);
  try {
    const newUser = await User.create({
      // name: 'eu321',
      // email: 'eu321@tti.com',
      // password: 'Maria12234',
      // passwordConfirm: 'Maria12234',
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);
    // console.log('token1$$$$$$$$$$$$$$$$', token);
    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    console.log(err, ':err!!!!!!!!!!!!!!!!!!!');
    res.status(404).json({
      status: 'fail',
      message: error,
    });
  }
};

// #2 Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log('HHHHHHHHHHHHHHHHHHHHHHHHH\n\n\n', email, '::', password);

    // 1 Check if email and password exist
    if (!email || !password) {
      res.status(400).json({
        status: 'fail',
        message: 'email or password missing!',
      });
      return next();
    }
    // 2 Check if user exists && password is correct
    const user = await User.findOne({ email: email }).select('+password');

    // const user = await User.find();

    // console.log(
    //   'did we find user',
    //   user,
    //   user.password,
    //   '/n%%%%%%%%%%%%%222%%%%%%%%%%%%\n\n\n'
    // );

    // console.log(
    //   !user || !(await user.correctPassword(password, user.password)),

    //   'is if working?'
    // );
    if (!user || !(await user.correctPassword(password, user.password))) {
      console.log('something is wrong here');
      res.status(401).json({
        status: 'fail',
        message: 'incorect email or password',
      });
      return next();
    }
    // 3 if everything is ok, send token to client
    const token = signToken(user._id);
    console.log('is token working', token, '\n');

    res.status(200).json({
      status: 'success',
      token: token,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// Get all
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    console.log('users!!!111', users);

    res.status(200).json({
      status: 'success',
      results: destinations.length,
      data: { users },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// #3 Protect Routes

const protect = async (req, res, next) => {
  let token;
  try {
    // get token check if exists
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
      token = authorization.split(' ')[1];
    }
    if (!token) {
      res.status(401).json({
        status: 'fail',
        message: 'Unauthorized',
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
        status: 'fail',
        message: 'The user no longer exists',
      });
      return next();
    }
    // check if user changed pass after token was issued
    if (freshUser.changedPasswordAfter(decodedPayload.iat)) {
      res.status(401).json({
        status: 'fail',
        message: 'Password change recently, login again',
      });
      next();
    }
    //  grant access to protected route
    req.user = freshUser;
    return next();
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  signup,
  login,
  protect,
  getAllUsers,
};
