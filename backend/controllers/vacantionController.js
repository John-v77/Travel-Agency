const Destination = require("../models/destinationModel");

// Get all
const getAllVacantionPackages = async (req, res) => {
  try {
    const destinations = await Destination.find();

    res.status(200).json({
      status: "success",
      results: destinations.length,
      data: { destinations },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Get one by id
const getVacantionPackage = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: { destination },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Create vacation package
const createVacantionPackage = async (req, res) => {
  try {
    const newDestination = await Destination.create(req.body);
    res.status(201).json({
      status: "success",
      data: { destination: newDestination },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Create vacation package
const updateVacationPackage = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete vacation package
const deleteVacantionPackage = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  getAllVacantionPackages,
  getVacantionPackage,
  createVacantionPackage,
  deleteVacantionPackage,
  updateVacationPackage,
};
