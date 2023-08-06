const Destination = require("../models/destinationModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const colors = require("colors");

// Get all
const getAllDestinationPackages = catchAsync(async (req, res, next) => {
  // get query obj
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);

  // adjust query for <less then> <more then> lte, gte, gt, lt
  let queryStr = JSON.stringify(queryObj);

  // uses regex to patern match and add '$'
  queryStr = queryStr.replace(/\b(gte|lte|gt|lt)\b/g, (match) => `$${match}`);

  const destinations = await Destination.find(JSON.parse(queryStr));

  res.status(200).json({
    status: "success",
    results: destinations.length,
    data: { destinations },
  });
});

// Get one by id
const getDestinationPackage = catchAsync(async (req, res, next) => {
  const destination = await Destination.findById(req.params.id);

  if (!destination) {
    console.log("vac conroler".cyan);
    return next(new AppError("No destination found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: { destination },
  });
});

// Create vacation package
const createDestinationPackage = catchAsync(async (req, res, next) => {
  const newDestination = await Destination.create(req.body);
  res.status(201).json({
    status: "success",
    data: { destination: newDestination },
  });
});

// Create vacation package
const updateDestinationPackage = catchAsync(async (req, res) => {
  const destinationPackage = await Destination.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: { destination: destinationPackage },
  });
});

// Delete vacation package
const deleteDestinationPackage = catchAsync(async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllDestinationPackages,
  getDestinationPackage,
  createDestinationPackage,
  deleteDestinationPackage,
  updateDestinationPackage,
};
