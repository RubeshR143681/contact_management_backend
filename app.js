const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const contactRoutes = require("./routes/contactRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res
    .status(500)
    .json({ message: "Internal server error", error: err.message });
});

// Start server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
