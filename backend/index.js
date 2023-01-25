// Import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const session = require("express-session");

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://cloudmongodbadlibioqatool:cloudmongodbadlibioqatool@cluster0.xoiimct.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();

app.use(cors());

app.use(bodyparser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("Ad-Lib.io QA Tool");
});

app.use("/users", require("./routes/user"));
app.use("/users/signup", require("./routes/user"));
app.use("/users/signin", require("./routes/user"));

app.listen("9001", function () {
  console.log("Ad-Lib.io QA Tool Server is running");
});
