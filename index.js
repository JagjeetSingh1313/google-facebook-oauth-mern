// index.js
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

const app = express();
const port = process.env.PORT || 5001;

// Load models and passport configuration
require("./models/User");
require("./services/passport");

// ✅ FIXED: Modern async/await mongoose connection (no callback)
async function connectDB() {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
connectDB();

// Cookie session setup
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Import routes
require("./routes/authRoute")(app);

// Start server
app.listen(port, () => {
  console.log(`🚀 Node server started on port ${port}`);
});
