require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost/localTravelDB`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((x) => console.log(`connected to MongoDB!: "${x.connections[0].name}"`))
  .catch((err) =>
    console.error("Error connectiong to mongoDB*********************", err)
  );

// const express = require("express");
// const router = express.Router();

const Destination = require("./models/destination");

const italyTest = new Destination({
  name: "Italy",
  price: "1000",
  description: "A wonderful place",
});

italyTest
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => ("error ^^^^^^^^^^", err));

app.listen(PORT, () => {
  console.log("listening to port 5000");
});
