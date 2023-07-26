const { Schema, model, default: mongoose } = require('mongoose');

const DestinationSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Add a name for Trip Destination'],
  },
  price: {
    type: Number,
    required: [true, 'Add a price for the vacantion package'],
  },
  // image_url: {
  //   type: String,
  //   required: [true, "Add a image link"],
  // },
  description: {
    type: String,
    required: [true, 'Add description to destination package'],
  },
  startLocation: {
    // Geo JSON
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: [Number], //long, lat
    address: String,
    description: String,
  },
  locations: [
    {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
      description: String,
      day: Number,
    },
  ],
  guides: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// imbeded Users

// DestinationSchema.pre('save', async function (next) {
//   const guidesPromises = this.guides.map(async (id) => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });

DestinationSchema.pre(/^find/, function (next) {
  console.log('we hit the pre quiery');
  this.populate({
    path: 'guides',
    select: '-__v -passwordConfirm -favorites -shoppingCart -isAdmin',
  });
  next();
});

DestinationSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'destination',
  localField: '_id',
});

const destinationModel = model('Destination', DestinationSchema);

module.exports = destinationModel;
