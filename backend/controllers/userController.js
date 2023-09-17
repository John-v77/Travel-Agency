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

// @@
// Get all users
const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: { users },
  });
});

// @@
// Update my user info
const updateMyInfo = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use/updateMyPassword",
        400
      )
    );
  }

  const filteredBody = filterObj(req.body, "name", "email", "photo");
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    filteredBody,
    { new: true, runValidators: true }
  );
  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  });
});

//  @@
//  add to favorites
const addFavorite = catchAsync(async (req, res, next) => {
  const { userId, prodId } = req.body;
  // console.log(userId, prodId, ".TY.".red);
  const user = await User.findById(userId);

  if (user) {
    console.log(user, "user.favorites2".green);
    const alreadyFavorite = user.favorites.find(
      (favorite) => favorite.toString() === prodId.toString()
    );
    console.log(alreadyFavorite, "alreadyFavorite".blue);
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

  user.favorites.push(prodId);
  console.log(user.favorites, "user.favorites1".red);

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

// @@
// remove favorite
const removeFavorite = catchAsync(async (req, res, next) => {
  const { userId, prodId } = req.body;
  console.log(userId, prodId, ".TY we are removing favorites.".red);
  const user = await User.findById(userId);

  updatedFav = user.favorites.filter(
    (favorite) => favorite.toString() != prodId.toString()
  );

  user.favorites = updatedFav;
  await user.save();

  res.status(200).json({
    status: "success",
    results: user.favorites.length,
    message: "favorite removed",
    data: { user },
  });
});

// #1 add to favorites
const clearAllFavorites = catchAsync(async (req, res, next) => {
  const { userId } = req.body;
  // console.log(userId, prodId, ".TY.".red);
  const user = await User.findById(userId);

  if (user) {
    fav = [];
    user.favorites = fav;
    await user.save();
  } else {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({
    status: "success",
    results: user.favorites.length,
    message: "all favorites removed",
    data: { user },
  });
});

module.exports = {
  addFavorite,
  removeFavorite,
  getAllUsers,
  updateMyInfo,
  clearAllFavorites,
};
