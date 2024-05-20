const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");

/** Database Config */
require("./config/database");

/** Enviroment variables */
require("dotenv").config();

/** Middlewares */
const authMiddleware = require("./middleware/authMiddleware");

/** Routes */
const todoRoutes = require("./routes/todo"); // Import todo routes
const authRoutes = require("./routes/auth");

/** Models */
const User = require("./models/User");

// cors
app.use(cors());
// Passport.js Configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(passport.initialize());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/todos", todoRoutes); // Mount todo routes under '/todos'

// Example Protected Route
app.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
