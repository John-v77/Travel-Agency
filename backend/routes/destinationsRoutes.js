const express = require("express");
const router = express.Router();
const destinationsController = require("../controllers/destinationsController");
const { protect, restrictedTo } = require("../controllers/authController");
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
  .patch(destinationsController.updateDestinationPackage)
  .delete(protect, restrictedTo("admin", "user"), destinationsController.deleteDestinationPackage);

module.exports = router;
