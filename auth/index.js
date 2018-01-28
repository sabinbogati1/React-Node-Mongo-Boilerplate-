const Auth = require("./Auth");

const express = require("express");
const router = express.Router();

router.get("/", Auth.testing);
router.post("/signup", Auth.signup);


module.exports = router;
