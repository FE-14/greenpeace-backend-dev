const express = require("express");
const artikelController = require("../controller/artikel.controller");
// const verify = require("../middleware/auth.token");
const router = express.Router();

router.post("/artikels", artikelController.createArtikel);
router.get("/artikels", artikelController.getArtikel);
router.get("/artikels/:id", artikelController.getArtikelbyId);
router.patch("/artikels/:id", artikelController.updateArtikel);
router.delete("/artikels/:id", artikelController.deleteArtikel);

module.exports = router;
