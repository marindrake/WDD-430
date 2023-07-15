const mongoose = require("mongoose");

const childDocumentSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  genre: { type: String },
  released: { type: String },
  rating: { type: String },
  path: { type: String },
});

const documentSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  genre: { type: String },
  released: { type: String },
  rating: { type: String },
  path: { type: String },
  children: [{ type: childDocumentSchema }],
});

module.exports = mongoose.model("Document", documentSchema);
