const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
  time: String,
});

module.exports = mongoose.model("Rating", ratingSchema);
