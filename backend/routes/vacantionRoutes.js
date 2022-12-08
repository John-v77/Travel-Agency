const express = require("express");
const router = express.Router();
const vacantionControler = require("../controllers/vacantionController");

router.route("/").get(vacantionControler.getAllVacantionPackages);

module.exports = router;
