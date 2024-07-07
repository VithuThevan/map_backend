require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const entries = require("./routes/entry.route");

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors("*"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/entry", entries);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};

// Start Server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
