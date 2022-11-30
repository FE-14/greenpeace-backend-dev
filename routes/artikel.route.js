const express = require("express");
const artikelController = require("../controller/artikel.controller");
const verify = require("../middleware/auth.token");
const router = express.Router();

router.post("/articles", verify.verifyToken, artikelController.createArtikel);
router.get("/articles", artikelController.getArtikel);
router.get("/articles/:id", artikelController.getArtikelbyId);
router.patch(
  "/articles/:id",
  verify.verifyToken,
  artikelController.updateArtikel
);
router.delete(
  "/articles/:id",
  verify.verifyToken,
  artikelController.deleteArtikel
);

module.exports = router;
