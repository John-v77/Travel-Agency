const express = require("express");
const router = express.Router();
const { protect } = require("../controllers/authController");
const cartController = require("../controllers/shoppingCardController");

router.get("/cart", protect, cartController.getCart);
router.get("/getAllCarts", protect, cartController.getAllCarts);
router.post("/createCart", protect, cartController.createCart);
router.post("/addItemToCart", protect, cartController.addItemToCart);
router.post(
  "/removeItemFromCart",
  protect,
  cartController.removeItemFromCart
);
router.delete(
  "/deleteAllCarts",
  protect,
  cartController.deleteAllCarts
);
router.delete(
  "/clearAllCartItems",
  protect,
  cartController.clearAllCartItems
);

module.exports = router;
