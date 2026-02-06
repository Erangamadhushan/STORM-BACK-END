const e = require("cors");
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true
  },
  stripeSessionId: String,
  paymentMethod: String,
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);