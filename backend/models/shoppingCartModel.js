const { Schema, model, default: mongoose } = require("mongoose");

const ShoppingCartSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: [true, "Shopping card must belong to an user"],
  },

  items: [
    {
      itemId: {
        type: Schema.Types.ObjectId,
        ref: "Destination",
        required: true,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
      },
      price: Number,
    },
  ],

  totalCost: {
    type: Number,
    require: [true, "Booking must have a price"],
  },
  discountApplied: {
    type: Number,
  },
  paymentMethod: {
    type: String,
  },
  shippingAddress: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

// ShoppingCartSchema.pre(/^find/, function (next) {
//   this.populate("user").populate({
//     path: "tour",
//     select: "name",
//   });
// });

const ShoppingCart = mongoose.model(
  "ShoppingCart",
  ShoppingCartSchema
);

module.exports = ShoppingCart;
