//|
//|
// imports packages
require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

//|
//|
// handle  uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("uncaught Exception! 🛑 Shutting down");
  process.exit(1);
});

//|
//|
// connect to DB
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI.replace("<PSW>", process.env.BD_PASS) || `mongodb://localhost/localTravelDB`;
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((x) => console.log(`connected to MongoDB!: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connectiong to mongoDB ==>", err.name, err.message));

//|
//|
// start server
server = app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});

//|
//|
// manage unhandled Rejections
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UnhandledRejection! 💥 Shutting down");
  server.close(() => {
    process.exit(1);
  });
});

// in production must have a tool in place to restart the aplication,\
//  hosting providers can provide such service
//  but care if using cloud aws, azure
