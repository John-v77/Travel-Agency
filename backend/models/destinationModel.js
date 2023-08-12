const { Schema, model } = require("mongoose");
const slugify = require("slugify");

const DestinationSchema = new Schema({
  name: {
    type: String,
    required: [true, "Add a name for Trip Destination"],
    maxlength: [40, "Destinations name has to be less then 40 characters"],
    minlength: [4, "Destinations name has to be less then 4 characters"],
  },
  slug: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Add a price for the vacantion package"],
  },
  durationInDays: {
    type: Number,
    required: [true, "Add a duration for the vacantion package"],
  },
  image_url: {
    type: String,
    required: [true, "Add a image link"],
  },
  description: {
    type: String,
    required: [true, "Add description to destination package"],
    maxlength: [40, "Description has to be less then 40 characters"],
    minlength: [10, "Description has to be at least then 10 characters"],
  },
  vipDestinations: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

// Document Middleware: runs before .save() command and .create() but not for insertMany()
DestinationSchema.pre("save", function (next) {
  // console.log(this, "pre doc".blue);
  this.slug = slugify(this.name, { lower: true });
  next();
});

DestinationSchema.pre("save", function (next) {
  console.log("will save document", this);
});

DestinationSchema.post("save", function (doc, next) {
  console.log(doc, "post doc - document is saved".red);
  next();
});

// QUERY MIDDLEWARE
DestinationSchema.pre(/^find/, function (next) {
  this.find({ vipDestinations: { $ne: true } });

  this.start = Date.now();
  next();
});

DestinationSchema.post(/^find/, function (doc, next) {
  console.log(`query took ${Date.now() - this.start}  milliseconds`.yellow);

  next();
});

const destinationModel = model("Destination", DestinationSchema);

module.exports = destinationModel;
