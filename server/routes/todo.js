const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const authMiddleware = require("../middleware/authMiddleware"); // Import authentication middleware

// CREATE a todo
router.post("/", authMiddleware, async (req, res) => {
  try {
    console.log(req.body, req.user, req.user.user._id);
    const todo = new Todo({ ...req.body, user: req.user.user._id }); // Link todo to the authenticated user
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ all todos of the authenticated user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.user._id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a todo
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a todo
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedTodo = await Todo.findOneAndDelete({_id:req.params.id});
    if (!deletedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
