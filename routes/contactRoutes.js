const express = require("express");
const { body, validationResult } = require("express-validator");
const contactController = require("../controllers/contactController");

const router = express.Router();

const contactValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("phoneNumber")
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be exactly 10 digits")
    .matches(/^\d+$/)
    .withMessage("Phone number must contain only digits"),
];
// Validation rules for creating/updating a contact

// Routes
router.get("/contacts", contactController.getAllContacts); // Fetch all contacts
router.post(
  "/contacts",
  contactValidationRules,
  contactController.createContact
); // Create a new contact
router.get("/contacts/search", contactController.searchContacts); // Search contacts by name or email
router.get("/contacts/:id", contactController.getContactById); // Fetch a single contact by ID
router.put(
  "/contacts/:id",
  contactValidationRules,
  contactController.updateContact
); // Update a contact by ID
router.delete("/contacts/:id", contactController.deleteContact); // Delete a contact by ID

module.exports = router;
