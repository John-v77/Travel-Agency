const express = require("express");
const router = express.Router();
const authControler = require("../controllers/authController");

router.post("/signup", authControler.signup);
module.exports = router;
