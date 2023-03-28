// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require("./routes/users");

// Load environment variables
require("dotenv").config();

// Create an instance of the Express app
const app = express();

// Enable cross-origin resource sharing
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Connect to MongoDB Atlas database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if database connection was successful
mongoose.connection.once("open", () =>
  console.log("Connected to MongoDB Atlas database")
);

// Set up routes
app.use("/users", userRoutes);

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
