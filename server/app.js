const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");
require("./config/database");
require("dotenv").config();
const User = require("./models/User");
// cors
app.use(cors());
// Passport.js Configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(express.json());
app.use("/auth", authRoutes);

// Example Protected Route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
