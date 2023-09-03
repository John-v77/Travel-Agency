const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const { protect } = require("../controllers/authController");

router.post("/signup", authController.signup);
router.get("/users", authController.getAllUsers);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.post("/resetPassword", authController.resetPassword);
router.post("/addFavorite", userController.addFavorite);
router.post("/removeFavorite", userController.remoreFavorite);

// router.route("addFav/:id").patch(protect, authControler.addFavorite);

module.exports = router;
