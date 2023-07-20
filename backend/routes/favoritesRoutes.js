const express = require('express');
const router = express.Router();
const favoritesControler = require('../controllers/favoritesControler');
const { protect } = require('../controllers/authController');
const { route } = require('./vacantionRoutes');

router
  .route('/')
  .get(favoritesControler.getAllFavoriteVacantions)
  .post(favoritesControler.addFavoriteVacantion);

router.route('./:id').delete(favoritesControler.deleteFavoriteVacantion);

module.exports = router;
