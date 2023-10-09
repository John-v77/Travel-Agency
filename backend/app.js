//|
//|
// imports packages
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

// import module
const destinationsRouter = require("./routes/destinationsRoutes");
const userRouter = require("./routes/userRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const cartRouter = require("./routes/shoppingCartRoutes");

const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");

//|
//|
// start express app
const app = express();

//|
//|
// Implement Cors

const clientUrl =
  process.NODE_ENV === "production"
    ? process.env.CORS_ORIGIN
    : "http://localhost:3000";

app.use(
  cors({
    credentials: true,
    origin: [clientUrl], //Swap this with the client url
  })
);
// app.options("*", cors());

// GLOBAL MIDDLEWARES

//|
//|
// Set Security HTTP headers

//|
//|
// Sanitazes data againt NoSQL query injection
app.use(mongoSanitize());

//|
//|
// Sanitazes data against xss - <html code attacks>
app.use(xss());

//|
//|
// Prevent parameter poluation
app.use(
  hpp({
    whitelist: ["durationInDays", "price"],
  })
);

//|
//|
// Dev logging
// if (process.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

//|
//|
// Limit request from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message:
    "Too many requests from this IP, please try again in an hour",
});

app.use("/api", limiter);

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
// serve static files
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res, next) => {
    console.log(
      "something strange",
      req.headers.host,
      "\n reqUrl:",
      req.url
    );

    if (req.headers.host.includes("heroku")) {
      res.sendFile(
        path.join(__dirname, "../client/build/index.html")
      );
    } else {
      next();
    }
  });
}

//|
//|
// compresses the api response
app.use(compression());

//|
//|
// Testing middleware
app.use((req, res, next) => {
  req.requstTime = new Date().toISOString();
  // console.log("what are the headers", req.headers);
  next();
});

//|
//|
// Routers
app.use("/api/v1/vacantions", destinationsRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/cart", cartRouter);

// handle unknown routes
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Cannot find ${req.originalUrl} on this server!`,
      404
    )
  );
});

//|
//|
//  handle errors
app.use(globalErrorHandler);

// export
module.exports = app;
