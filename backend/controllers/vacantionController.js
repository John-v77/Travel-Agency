const Destination = require("../models/destination");

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

module.exports = {
  getAllVacantionPackages,
  getVacantionPackage,
};
