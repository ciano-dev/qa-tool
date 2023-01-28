const express = require("express");
const signUpApi = require("./signup");
const signInApi = require("./signin");
const loginWithGoogleApi = require("./loginWithGoogle");
const userApi = require("./user");

const router = express.Router();

router.use(signUpApi);
router.use(signInApi);
router.use(loginWithGoogleApi);
router.use(userApi);

module.exports = router;
