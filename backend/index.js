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

app.get("/", (req, res) => {
  res.status(200).send("test 1 - get");
});

app.post("/a", (req, res) => {
  res.status(200).send("test 2 - post");
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
