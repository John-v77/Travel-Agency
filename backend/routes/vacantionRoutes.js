const express = require("express");
const router = express.Router();
const vacantionControler = require("../controllers/vacantionController");

// router.param("id", (req, res, next, val) => {
//   next();
// });

router
  .route("/")
  .get(vacantionControler.getAllVacantionPackages)
  .post(vacantionControler.createVacantionPackage);

router.route("/:id").get(vacantionControler.getVacantionPackage);

module.exports = router;
