const express = require("express");
const router = express.Router();
const destinationsController = require("../controllers/destinationsController");
const { protect } = require("../controllers/authController");
// router.param("id", (req, res, next, val) => {
//   next();
// });

router
  .route("/")
  .get(protect, destinationsController.getAllVacantionPackages)
  .post(destinationsController.createVacantionPackage);

router
  .route("/:id")
  .get(destinationsController.getVacantionPackage)
  .delete(destinationsController.deleteVacantionPackage)
  .patch(destinationsController.updateVacationPackage);

module.exports = router;
