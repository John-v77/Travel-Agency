const { Schema, model, default: mongoose } = require('mongoose');

const FavoriteDestinationsSchema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  // favorites: [{ type: mongoose.Schema.ObjectID, ref: 'User' }],
});

const favoriteDestinationsModel = model(
  'favorites',
  FavoriteDestinationsSchema
);

module.exports = favoriteDestinationsModel;
