//|
//|
// imports packages
const express = require("express");
const cors = require("cors");

// import module
const destinationsRouter = require("./routes/destinationsRoutes");
const userRouter = require("./routes/userRoutes");

//|
//|
// start express app
const app = express();

//|
//|
// Implement Cors
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], //Swap this with the client url
  })
);
// app.options("*", cors());

//|
//|
// serve static files

// const path = require("path");
// app.use(express, static(path.join(__dirname, "../client/build")));
// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

//|
//|
// Dev logging
// if (process.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

//|
//|
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

//|
//|
// Body parser, reads data from body into req.body - need json requests
app.use(express.json({ limit: "10kb" })); // for application/json
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//|
//|
// Testing middleware
app.use((req, res, next) => {
  req.requstTime = new Date().toISOString();
  console.log("what are the headers", req.headers);
  next();
});

//|
//|
// Routers
app.use("/api/v1/vacantions", destinationsRouter);
app.use("/api/v1/user", userRouter);

// handle unknown routes
app.all("*", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

//|
//|
//  handle errors
app.use(globalErrorHandler);

// export
module.exports = app;
