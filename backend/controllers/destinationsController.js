const Destination = require("../models/destinationModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
// const colors = require("colors");
const APIFeatures = require("../utils/apiFeatures");

// Get all
// Fetch all destinations
// route GET /api/vacantions || api/v1/vacantions?price[gte]=700
// access Public
const getAllDestinationPackages = catchAsync(
  async (req, res, next) => {
    // let query = Destination.find(JSON.parse(queryStr));
    // execute query
    const features = new APIFeatures(Destination.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const destinations = await features.query;

    // send response
    res.status(200).json({
      status: "success",
      results: destinations.length,
      data: { destinations },
    });
  }
);

// Get one by id
const getDestinationPackage = catchAsync(async (req, res, next) => {
  const destination = await Destination.findById(
    req.params.id
  ).populate("reviews");

  if (!destination) {
    return next(
      new AppError("No destination found with that ID", 404)
    );
  }
  res.status(200).json({
    status: "success",
    data: { destination },
  });
});

// Create vacation package
const createDestinationPackage = catchAsync(
  async (req, res, next) => {
    const newDestination = await Destination.create(req.body);
    res.status(201).json({
      status: "success",
      data: { destination: newDestination },
    });
  }
);

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
