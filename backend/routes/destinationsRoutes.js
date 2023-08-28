const express = require("express");
const router = express.Router();
const destinationsController = require("../controllers/destinationsController");
const { protect } = require("../controllers/authController");
// router.param("id", (req, res, next, val) => {
//   next();
// });

router
  .route("/")
  .get(
    // protect,
    destinationsController.getAllDestinationPackages
  )
  .post(destinationsController.createDestinationPackage);

router
  .route("/:id")
  .get(destinationsController.getDestinationPackage)
  .delete(destinationsController.deleteDestinationPackage)
  .patch(destinationsController.updateDestinationPackage);

module.exports = router;
