const express = require("express");
const { login, register } = require("../controllers/auth");
const auth = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", auth, login);
router.post("/register", register);

module.exports = router;
