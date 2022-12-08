require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const vacantionRouter = require("./routes/vacantionRoutes");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json()); // for application/json
// app.use(express.urlencoded());

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

// Routers
app.use("/api/v1/vacantions", vacantionRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
