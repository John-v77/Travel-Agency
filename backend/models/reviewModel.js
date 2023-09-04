const { Schema, model } = require("mongoose");
const validator = require("validator");

const reviewSchema = new Schema(
  {
    rating: { type: Number, min: 1, max: 5 },
    review: {
      type: String,
      require: [true, "Review cannot be empty"],
      validate: {
        validator: (val) =>
          validator.isAlphanumeric(val, ["en-US"], {
            ignore: " ",
          }),
        message: "Review can only be alpha numeric",
      },
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [
        true,
        "The review must be writen by an user",
      ],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Destination",
      required: [
        true,
        "The review must belong to a product",
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
    select: "name price",
  }).populate({
    path: "user",
    select: "name photo",
  });
  next();
});

const reviewModel = model("Review", reviewSchema);
module.exports = reviewModel;
