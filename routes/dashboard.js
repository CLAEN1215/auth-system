const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

// 🔐 PROTECTED ROUTE
router.get("/", auth, (req, res) => {
  res.json({
    msg: "Welcome! You accessed protected data 🎉",
    user: req.user
  });
});

module.exports = router;