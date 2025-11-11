const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  petName: String,
  petType: String,
  service: String,
  appointmentDate: String,
  contact: String,
  address: String,
  paymentMethod: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
