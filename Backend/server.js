const mongoose = require("mongoose");

const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then((conn) => {
    console.log("connection established");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server has started....");
});

process.on("unhandledRejection", (err) => {
  process.exit(1);
});
