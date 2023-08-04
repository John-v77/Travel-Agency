const { Schema, model } = require("mongoose");

const DestinationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Add a name for Trip Destination"],
    maxlength: [40, "Destinations name has to be less then 40 characters"],
    minlength: [4, "Destinations name has to be less then 4 characters"],
  },
  price: {
    type: Number,
    required: [true, "Add a price for the vacantion package"],
  },
  image_url: {
    type: String,
    required: [true, "Add a image link"],
  },
  description: {
    type: String,
    required: [true, "Add description to destination package"],
    maxlength: [40, "Destinations name has to be less then 40 characters"],
    minlength: [10, "Destinations name has to be less then 10 characters"],
  },
});

const destinationModel = model("Destination", DestinationSchema);

module.exports = destinationModel;
