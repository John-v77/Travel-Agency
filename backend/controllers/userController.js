const { promisify } = require("util");
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
const colors = require("colors");
// # signToken

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

//#wa,2 remove favorite
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
};
