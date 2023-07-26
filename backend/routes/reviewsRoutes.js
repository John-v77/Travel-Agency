const express = require('express');
const router = express.Router();
const reviewControler = require('../controllers/reviewControler');
const { protect } = require('../controllers/authController');

router
  .route('/')
  .get(reviewControler.getAllReviews)
  .post(reviewControler.createReview);

module.exports = router;
