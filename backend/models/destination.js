const { Mongoose, model } = require("mongoose");

const DestinationSchema = model(
  "Destination",
  new Mongoose.Schema({
    name: {
      type: String,
      required: [true, "Add a name for Trip Destination"],
    },
    price: {
      type: Number,
      required: [true, "Add a price for the vacantion package"],
    },
    // image_url: {
    //   type: String,
    //   required: [true, "Add a image link"],
    // },
    description: {
      type: String,
      required: [true, "Add description to destination package"],
    },
  })
);

module.exports = DestinationSchema;
