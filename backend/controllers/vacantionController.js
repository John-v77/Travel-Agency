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
