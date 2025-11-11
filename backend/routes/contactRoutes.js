const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Save contact message
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json({ success: true, msg: "Message sent successfully" });
  } catch (err) {
    res.json({ success: false, msg: "Error sending message" });
  }
});

module.exports = router;
