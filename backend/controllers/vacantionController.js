const Destination = require("../models/destinationModel");
const catchAsync = require("../utils/catchAsync");

// Get all
const getAllVacantionPackages = catchAsync(async (req, res, next) => {
  const destinations = await Destination.find();

  res.status(200).json({
    status: "success",
    results: destinations.length,
    data: { destinations },
  });
});

// Get one by id
const getVacantionPackage = catchAsync(async (req, res) => {
  const destination = await Destination.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: { destination },
  });
});

// Create vacation package
const createVacantionPackage = catchAsync(async (req, res, next) => {
  const newDestination = await Destination.create(req.body);
  res.status(201).json({
    status: "success",
    data: { destination: newDestination },
  });
});

// Create vacation package
const updateVacationPackage = catchAsync(async (req, res) => {
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
const deleteVacantionPackage = catchAsync(async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllVacantionPackages,
  getVacantionPackage,
  createVacantionPackage,
  deleteVacantionPackage,
  updateVacationPackage,
};
