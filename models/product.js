const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  expiry: Date,
  pid: Number,
});

module.exports = mongoose.model("Product", productSchema);
