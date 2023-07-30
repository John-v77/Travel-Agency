require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const vacantionRouter = require("./routes/vacantionRoutes");
const userRouter = require("./routes/userRoutes");
const PORT = process.env.PORT || 5000;
const app = express();
const path = require("path");
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

// Body parser, reads data from body into req.body - need json requests
app.use(express.json({ limit: "10kb" })); // for application/json
// app.use(express.urlencoded());

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost/localTravelDB`;

// connect to DB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((x) => console.log(`connected to MongoDB!: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connectiong to mongoDB", err));

//fix cors error
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], //Swap this with the client url
  })
);

// serve static files

// app.use(express, static(path.join(__dirname, '../client/build')));
// app.get('*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// Testing middleware
app.use((req, res, next) => {
  req.requstTime = new Date().toISOString();
  console.log("what are the headers", req.headers);
  next();
});

// Routers
app.use("/api/v1/vacantions", vacantionRouter);
app.use("/api/v1/user", userRouter);

app.all("*", (req, res, next) => {
  // const err = new Error(`Cannot find ${req.originalUrl} on this server!`);
  // err.status = "fail";
  // err.statusCode = 404;
  // next(err);

  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
