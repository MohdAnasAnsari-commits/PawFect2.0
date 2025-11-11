const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

// Create booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.json({ success: true, msg: "Booking saved successfully" });
  } catch (err) {
    res.json({ success: false, msg: "Error saving booking" });
  }
});

module.exports = router;
