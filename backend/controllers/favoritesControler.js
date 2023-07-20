// const Destination = require("../models/destinationModel");

// // Get all
// const getAllVacantionPackages = async (req, res) => {
//   try {
//     const destinations = await Destination.find();

//     res.status(200).json({
//       status: "success",
//       results: destinations.length,
//       data: { destinations },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "fail",
//       message: err,
//     });
//   }
// };

const FavoriteDest = require('../models/favoriteDestinationsModel');

// #1 Get all favorites
const getAllFavoriteVacantions = async (req, res) => {
  console.log('are we getting the favorites??? &&&&&&&&&&&&&&&'.blue);
  try {
    const favorites = await FavoriteDest.find();

    res.status(200).json({
      status: 'success',
      results: 'favorites.length',
      data: { favorites },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// #2 Add favorite Vacantion
const addFavoriteVacantion = async (req, res) => {
  try {
    const newFavorite = await FavoriteDest.create(req.body);
    res.status(201).json({
      status: 'success',
      data: { favorite: newFavorite },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// #3 Remove favorite vacation package
const deleteFavoriteVacantion = async (req, res) => {
  try {
    await FavoriteDest.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

module.exports = {
  addFavoriteVacantion,
  deleteFavoriteVacantion,
  getAllFavoriteVacantions,
};
