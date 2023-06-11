const express = require('express');
const router = express.Router();
const authControler = require('../controllers/authController');

router.post('/signup', authControler.signup);
router.post('/login', authControler.login);
router.get('/users', authControler.getAllUsers);
module.exports = router;
