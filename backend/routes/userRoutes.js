const express = require('express');
const router = express.Router();
const authControler = require('../controllers/authController');
const { protect } = require('../controllers/authController');

router.post('/signup', authControler.signup);
router.post('/login', authControler.login);

// favorites
router.get('/users', authControler.getAllUsers);
router.post('/favorites', authControler.getAllFavorites);
router.post('/addfav', authControler.addToFavorites);

module.exports = router;
