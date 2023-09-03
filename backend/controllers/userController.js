const { promisify } = require("util");
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const colors = require("colors");
const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
    console.log(newObj, "00".yellow);
  });
  return newObj;
};

// Get all
const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: { users },
  });
});

// Update my info
const updateMyInfo = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("This route is not for password updates. Please use/updateMyPassword", 400));
  }

  const filteredBody = filterObj(req.body, "name", "email", "photo");
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, { new: true, runValidators: true });
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

// #1 add to favorites
const addFavorite = catchAsync(async (req, res, next) => {
  const { userId, prodId } = req.body;
  // console.log(userId, prodId, ".TY.".red);
  const user = await User.findById(userId);

  if (user) {
    const alreadyFavorite = user.favorites.find((favorite) => favorite.toString() === prodId.toString());
    console.log(alreadyFavorite, "mg".blue);
    if (alreadyFavorite) {
      res.status(200).json({
        status: "success",
        results: user.favorites.length,
        message: "favorite already added",
        data: { user },
      });
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }

  console.log(user.favorites, "name".red);
  user.favorites.push(prodId);

  // fav = [];
  // user.favorites = fav;

  await user.save();

  res.status(200).json({
    status: "success",
    results: user.favorites.length,
    message: "favorite added",
    data: { user },
  });
});

//#2 remove favorite
const remoreFavorite = catchAsync(async (req, res, next) => {
  const { userId, prodId } = req.body;
  console.log(userId, prodId, ".TY.".red);
  const user = await User.findById(userId);

  updatedFav = user.favorites.filter((favorite) => favorite.toString() != prodId.toString());

  user.favorites = updatedFav;
  await user.save();

  res.status(200).json({
    status: "success",
    results: user.favorites.length,
    message: "favorite removed",
    data: { user },
  });
});

module.exports = {
  addFavorite,
  remoreFavorite,
  getAllUsers,
  updateMyInfo,
};
