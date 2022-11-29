const express = require("express");
const userController = require("../controller/user.controller");
const verify = require("../middleware/auth.token");
const router = express.Router();

router.get("/users", verify.verifyToken, userController.getUsers);
router.get("/users/:id", verify.verifyToken, userController.getUserbyId);
router.patch("/users/:id", verify.verifyToken, userController.updateUser);
router.delete("/users/:id", verify.verifyToken, userController.deleteUser);
router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
