const express = require("express");
const router = express.Router();
const Rating = require("../models/Rating");

// Add rating
router.post("/", async (req, res) => {
  try {
    const rating = new Rating(req.body);
    await rating.save();
    res.json({ success: true, msg: "Rating saved" });
  } catch (err) {
    res.json({ success: false, msg: "Error saving rating" });
  }
});

// Get all ratings
router.get("/", async (req, res) => {
  const ratings = await Rating.find();
  res.json(ratings);
});

module.exports = router;
