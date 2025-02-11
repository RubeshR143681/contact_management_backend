const mongoose = require("mongoose");

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"], // Name is a required field
    trim: true, // Remove extra spaces
  },
  email: {
    type: String,
    required: [true, "Email is required"], // Email is a required field
    unique: true, // Ensure email is unique
    trim: true,
    lowercase: true, // Convert email to lowercase
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ], // Validate email format
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"], // Phone number is a required field
    trim: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"], // Validate phone number format
  },
  address: {
    type: String,
    trim: true,
    default: "", // Address is optional
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation timestamp
  },
});

// Create the Contact model
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
