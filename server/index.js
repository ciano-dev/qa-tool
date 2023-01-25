// Import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const passport = require("passport");
require("./passportGoogleSSO");
const loginWithGoogleAPI = require("./routes/loginWithGoogle");

mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://cloudmongodbadlibioqatool:cloudmongodbadlibioqatool@cluster0.xoiimct.mongodb.net/?retryWrites=true&w=majority"
);

const app = express();

app.use(cors());

app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Ad-Lib.io QA Tool");
});

app.use("/users", require("./routes/user"));
app.use("/users/signup", require("./routes/user"));
app.use("/users/signin", require("./routes/user"));

app.use(loginWithGoogleAPI);

app.listen("9001", function () {
  console.log("Ad-Lib.io QA Tool Server is running");
});
