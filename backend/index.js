require("dotenv").config();
// const express = require("express");
// const router = express.Router();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost/localTravelDB`;

console.log("connect to db", MONGODB_URI);

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
