// Import required modules
const mongoose = require("mongoose");

// Define schema for User collection
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create User model from schema and export it
module.exports = mongoose.model("User", userSchema);
