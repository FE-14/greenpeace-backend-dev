const express = require("express");
const artikelController = require("../controller/artikel.controller");
// const verify = require("../middleware/auth.token");
const router = express.Router();

router.post("/articles", artikelController.createArtikel);
router.get("/articles", artikelController.getArtikel);
router.get("/articles/:id", artikelController.getArtikelbyId);
router.patch("/articles/:id", artikelController.updateArtikel);
router.delete("/articles/:id", artikelController.deleteArtikel);

module.exports = router;
