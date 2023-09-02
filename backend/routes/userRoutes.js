const express = require("express");
const router = express.Router();
const authControler = require("../controllers/authController");
const { protect } = require("../controllers/authController");

router.post("/signup", authControler.signup);
router.post("/login", authControler.login);
router.get("/users", authControler.getAllUsers);
router.post("/addFavorite", authControler.addFavorite);
router.post("/removeFavorite", authControler.remoreFavorite);

// router.route("addFav/:id").patch(protect, authControler.addFavorite);

module.exports = router;
