const Destination = require("../models/destinationModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const colors = require("colors");

// Get all

// Fetch all destinations
// route GET /api/vacantions || api/v1/vacantions?price[gte]=700
// access Public
const getAllDestinationPackages = catchAsync(async (req, res, next) => {
  // 1 # filtering
  // get query obj
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);

  // adjust query for <less then> <more then> lte, gte, gt, lt
  let queryStr = JSON.stringify(queryObj);

  // uses regex to patern match and add '$'
  queryStr = queryStr.replace(/\b(gte|lte|gt|lt)\b/g, (match) => `$${match}`);

  let query = Destination.find(JSON.parse(queryStr));

  // 2 # sorting res
  if (req.query.sort) query = query.sort();

  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("createdAt");
  }

  // 3 # custom fiels query
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query.select("-__id");
  }

  // 4 # paginations

  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 20;
  const skip = (page - 1) * limit;
  query = query.skip(10).limit(10);

  if (req.query.page) {
    const numDestinations = await Destination.countDocuments();
    if (skip >= numDestinations) throw new Error("This page does not exists");
  }

  // execute query
  const destinations = await query;
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
