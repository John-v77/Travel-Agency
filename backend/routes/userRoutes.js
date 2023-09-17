const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const { protect } = require("../controllers/authController");

router.get("/users", userController.getAllUsers);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
// router.post("/forgotPassword", authController.forgotPassword);
// router.patch("/resetPassword/:token", authController.resetPassword);
router.post("/addFavorite", userController.addFavorite);
router.post("/removeFavorite", userController.removeFavorite);
router.post("/clearAllFavorites", userController.clearAllFavorites);

router.patch(
  "/updateMyPassword",
  protect,
  authController.updatePassword
);
router.patch("/updateMyInfo", protect, userController.updateMyInfo);

// router.route("addFav/:id").patch(protect, authControler.addFavorite);

module.exports = router;
