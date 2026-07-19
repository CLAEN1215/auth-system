const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ msg: "User registered successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // create token
    const token = jwt.sign({ id: user._id }, "secretkey", {
      expiresIn: "1h"
    });

    res.json({ token });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});

const auth = require("../middleware/auth");

router.get("/dashboard", auth, async (req, res) => {
  try {
    res.json({
      msg: "Welcome to dashboard 🎉",
      user: req.user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;