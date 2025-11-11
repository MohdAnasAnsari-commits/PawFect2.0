const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Sign Up
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await User.findOne({ email });
    if (existing) return res.json({ success: false, msg: "User already exists" });

    await new User({ name, email, password }).save();
    res.json({ success: true, msg: "Signup successful" });
  } catch (err) {
    res.json({ success: false, msg: "Error during signup" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) return res.json({ success: false, msg: "Invalid credentials" });

  res.json({ success: true, msg: "Login successful", user });
});

module.exports = router;
