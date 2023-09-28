const catchAsync = require("../utils/catchAsync");
const colors = require("colors");
const AppError = require("../utils/appError");
const ShoppingCart = require("../models/shoppingCartModel");
const Destination = require("../models/destinationModel");
const User = require("../models/usersModel");

const getCart = catchAsync(async (req, res, next) => {
  const { userId } = req.body;
  const cart = await ShoppingCart.findOne({ owner: userId });
  if (cart && cart.items) {
    res.status(200).send(cart);
  } else {
    return next(new AppError("cart not found.", 404));
  }
});

const getAllCarts = catchAsync(async (req, res, next) => {
  const carts = await ShoppingCart.find();
  res.status(200).send(carts);
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

const addItemToCart = catchAsync(async (req, res, next) => {
  const { userId, prodId, qty } = req.body;

  const cart = await ShoppingCart.findOne({ owner: userId });
  const item = await Destination.findById(prodId);

  // check if item exists in the shop offer
  if (!item) {
    return next(new AppError("Item not found.", 404));
  }

  // no cart exists, create one
  if (!cart) {
    const user = await User.findById(userId);
    if (!user) {
      return next(new AppError("User not found.", 404));
    }
    const newCart = {
      owner: userId,
      items: [
        {
          itemId: prodId,
          name: item.name,
          quantity: qty,
          price: item.price,
        },
      ],
      totalCost: item.price * qty,
      discountApplied: 0,
      paymentMethod: "",
      shippingAddress: "",
      createdAt: Date.now(),
      paid: false,
    };
    const newShoppingCart = await ShoppingCart.create(newCart);

    return res.status(201).send({
      message: "success new cart created",
      cart: newShoppingCart,
    });
  }

  // if cart exists
  const itemIndex = cart.items.findIndex((el) => el.itemId == prodId);

  if (itemIndex > -1) {
    let product = cart.items[itemIndex];
    product.quantity += qty;
    cart.totalCost += qty * item.price;
    cart.items[itemIndex] = product;
  } else {
    const newItem = {
      itemId: prodId,
      name: item.name,
      quantity: qty,
      price: item.price,
    };
    cart.totalCost += qty * newItem.price;
    cart.items.push(newItem);
  }

  await cart.save();
  res
    .status(200)
    .send({ message: "success, item added to cart ", cart });
});

const removeItemFromCart = catchAsync(async (req, res, next) => {
  const { userId, prodId, qty } = req.body;

  const cart = await ShoppingCart.findOne({ owner: userId });
  const itemIndex = cart.items.findIndex((el) => el.itemId == prodId);

  // if item not in cart
  if (itemIndex <= -1) {
    res
      .status(200)
      .send({ message: "item already not present in cart ", cart });
  }

  let undatedProduct = cart.items[itemIndex];
  undatedProduct.quantity -= qty;

  // remove item if qty is 0
  if (undatedProduct.quantity <= 0) {
    cart.items.splice(itemIndex, 1);
  } else {
    cart.items[itemIndex] = undatedProduct;
  }

  cart.totalCost -= qty * undatedProduct.price;
  if (cart.totalCost < 0) cart.totalCost = 0;

  await cart.save();
  res
    .status(200)
    .send({ message: "success, item removed from cart ", cart });
});

const deleteAllCarts = catchAsync(async (req, res, next) => {
  ``;
  const carts = await ShoppingCart.deleteMany();
  res.status(200).send(carts);
});

const clearAllCartItems = catchAsync(async (req, res, next) => {
  const { userId } = req.body;
  const cart = await ShoppingCart.findOne({ owner: userId });
  if (!cart) {
    return next(
      new AppError("Shopping cartd for user not found.", 404)
    );
  }
  cart.items = [];
  cart.totalCost = 0;
  await cart.save();
  res.status(200).send(cart);
});

module.exports = {
  getCart,
  addItemToCart,
  removeItemFromCart,
  createCart,
  getAllCarts,
  deleteAllCarts,
  clearAllCartItems,
};
