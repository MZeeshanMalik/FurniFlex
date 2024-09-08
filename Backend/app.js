/* eslint-disable no-undef */
const express = require("express");
const app = express();
const morgan = require("morgan");
const userRouter = require("./routers/userRoutes");

const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const hpp = require("hpp");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authController = require("./controller/authenticationController");
app.use(cors());
app.set("view engine", "pug");
// serving static files
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
//set security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
// body parser raeding data from body in req.body
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
// app.use(express.urlencoded({extended: true, limit: '10kb'}))
// data sanitization against nosql query injection
app.use(mongoSanitize());
// data sanatization against XSS attack
app.use(xssClean());
//prevent parameter pollution
app.use(hpp());
//devolpment logging
app.use(morgan("dev"));
//set rate limiting
const limiter = rateLimit({
  max: 199,
  windowMs: 60 * 60 * 1000,
  message: "too many requersts from same ip. please try again in 1 hour",
});
app.use("/api", limiter);
app.use((req, res, next) => {
  req.requestime = new Date().toISOString();
  next();
});

// Request Handlers

//routes
app.use(authController.isLoggedIn);
app.use("/api/v1/users", userRouter);
// Server
app.all("*", (req, res, next) => {
  // res.status(400).json({
  //   status: 400,
  //   message : `server cannot find ${req.originalUrl} on this adress`
  // })
  next(
    new AppError(`server cannot find ${req.originalUrl} on this adress`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
