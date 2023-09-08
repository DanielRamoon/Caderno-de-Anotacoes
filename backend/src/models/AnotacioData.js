const mongoose = require("mongoose");

const AnotacionDataSchema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean,
});

module.exports = mongoose.model("Anotacion", AnotacionDataSchema);
