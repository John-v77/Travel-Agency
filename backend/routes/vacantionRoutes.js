const express = require("express");
const router = express.Router();
const vacantionControler = require("../controllers/vacantionController");
const { protect } = require("../controllers/authController");
// router.param("id", (req, res, next, val) => {
//   next();
// });

router
  .route("/")
  .get(protect, vacantionControler.getAllVacantionPackages)
  .post(vacantionControler.createVacantionPackage);

router
  .route("/:id")
  .get(vacantionControler.getVacantionPackage)
  .delete(vacantionControler.deleteVacantionPackage)
  .patch(vacantionControler.updateVacationPackage);

module.exports = router;
