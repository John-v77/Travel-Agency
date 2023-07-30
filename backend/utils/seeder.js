const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fs = require("fs");
const colors = require("colors");
const User = require("../models/usersModel");
const Destination = require("../models/destinationModel");

dotenv.config({ path: "../.env" });

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost/localTravelDB`;

console.log(process.env.MONGODB_URI);
//   connect to DB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((x) => console.log(`connected to MongoDB!: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connectiong to mongoDB", err));

// read Json files
const destinations = JSON.parse(
  fs.readFileSync(`${__dirname}/destinations.json`, "utf-8")
);

const importData = async () => {
  try {
    await Destination.create(destinations);
    console.log("Data is imported!".green);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
  }
};

const destroyData = async () => {
  try {
    // await User.deleteMany();
    await Destination.deleteMany();
    console.log("Data is destroyed!".red);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
