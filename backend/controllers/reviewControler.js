const Review = require('../models/reviewModel.js');

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();

    res.status(200).json({
      status: 'success',
      results: reviews.length,
      data: { reviews },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    console.log('creating rev2', review);
    res.status(200).json({
      status: 'success',
      data: { review },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: { 'cannot create user': err },
    });
  }
};

module.exports = {
  createReview,
  getAllReviews,
};
