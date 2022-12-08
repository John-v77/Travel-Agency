const express = require("express");
const router = express.Router();
const vacantionControler = require("../controllers/vacantionController");

router.route("/").get(vacantionControler.getAllVacantionPackages);

router.route("/:id").get(vacantionControler.getVacantionPackage);

module.exports = router;
