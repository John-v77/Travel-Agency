const catchAsync = require("../utils/catchAsync");
const colors = require("colors");
const AppError = require("../utils/appError");
const ShoppingCart = require("../models/shoppingCartModel");

const getCart = catchAsync(async (req, res, next) => {
  const { userId } = req.body;
  const cart = await ShoppingCart.findOne({ owner: userId });
  if (cart && cart.items) {
    res.status(200).send(cart);
  } else {
    return next(new AppError("cart not found.", 404));
  }
});

const createCart = catchAsync(async (req, res, next) => {
  const { userId, prodId } = req.body;

  const cart = {
    owner: userId,
    items: [],
    totalCost: 0,
    discountApplied: 0,
    paymentMethod: "",
    shippingAddress: "",
    createdAt: Date.now(),
    paid: false,
  };

  const newCart = await ShoppingCart.create(cart);

  res.status(200).send({ message: "success create cart", newCart });
});

const getAllCarts = catchAsync(async (req, res, next) => {
  const carts = await ShoppingCart.find();
  res.status(200).send(carts);
});

const deleteAllCarts = catchAsync(async (req, res, next) => {
  const carts = await ShoppingCart.deleteMany();
  res.status(200).send(carts);
});

module.exports = {
  getCart,
  createCart,
  getAllCarts,
  deleteAllCarts,
};
