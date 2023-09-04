const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const {
  protect,
} = require("../controllers/authController");

router
  .route("/")
  .get(protect, reviewController.getAllReviews)
  .post(protect, reviewController.createReview);

module.exports = router;
