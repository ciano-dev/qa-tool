const router = require("express").Router();
const { User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

router.post("/signup", async (req, res) => {
  const oldUser = await User.findOne({ email: req.body.email });
  if (req.body.token !== "undefined") {
    if (oldUser !== null) {
      return res
        .status(400)
        .json({ success: false, user: oldUser, error: "User exists!" });
    } else {
      req.body["password"] = await bcrypt.hash(req.body.password, 10);
      const user = new User(req.body);
      user.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true, user });
      });
    }
  } else {
    jwt.verify(req.body.token, JWT_SECRET, async (err) => {
      if (err === null) {
        if (oldUser !== null) {
          return res
            .status(400)
            .json({ success: false, user: oldUser, error: "User exists!" });
        } else {
          req.body["password"] = await bcrypt.hash(req.body.password, 10);
          const user = new User(req.body);
          user.save((err) => {
            if (err) return res.status(400).json({ success: false, err });
            return res.status(200).json({ success: true, user });
          });
        }
      } else
        return res
          .status(400)
          .json({ success: false, error: err.name + " " + err.message });
    });
  }
});

router.post("/signin", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user === null) {
    return res
      .status(400)
      .json({ success: false, user: user, error: "User does not exists!" });
  } else {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ email: req.body.email }, JWT_SECRET);
      if (res.status(200)) {
        req.session.isAuth = true;
        console.log(req.session);
        console.log(req.session.id);
        return res.status(200).json({ success: true, user, token });
      } else {
        return res.status(400).json({ success: false, err });
      }
    }
    return res
      .status(400)
      .json({ success: false, user: user, error: "Invalid credentials!" });
  }
});

module.exports = router;
