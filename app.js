require("dotenv").config();

const express = require("express");
const compression = require("compression");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

const isProduction = process.env.NODE_ENV === "production";

app.use(logger("dev"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "dist")));

mongoose
  .connect(process.env.MONGODB_URI || "localhost:27017", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => require("./batch")())
  .catch(console.error);
if (!isProduction) mongoose.set("debug", true);

app.use("/", indexRouter);
app.use("/users", usersRouter);

require("./models/Signal");
const { getValue } = require("./signals");

const emitter = socket =>
  getValue().then(val => {
    socket.emit("measure", val);
  });

app.onSocketConnection = socket => {
  console.log("Client connected");
  socket.on("close", () => console.log("Client disconnected"));
  emitter(socket)
    .then(() => {
      setInterval(
        () => emitter(socket),
        process.env.INTERVAL_BROADCAST_MS || 1000
      );
    })
    .catch(console.error);
};

module.exports = app;
