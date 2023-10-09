const User = require("../models/usersModel");
const catchAsync = require("../utils/catchAsync");
// const colors = require("colors");
const AppError = require("../utils/appError");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
    // console.log(newObj, "00".yellow);
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

  const user = await User.findById(userId);

  if (user) {
    const alreadyFavorite = user.favorites.find(
      (favoriteItem) =>
        favoriteItem.id.toString() === prodId.toString()
    );

    if (alreadyFavorite) {
      return res.status(200).json({
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
  const user = await User.findById(userId);
  updatedFav = user.favorites.filter(
    (favoriteItem) => favoriteItem.id.toString() !== prodId.toString()
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
  // console.log(userId, ".all favorites cleared.".red);
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
