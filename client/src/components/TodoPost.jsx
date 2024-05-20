import React, { useState } from "react";
import { createTodo } from "../services/todoService";

function TodoPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = await createTodo({ title, description });
    // Optionally, update the todo list after successful creation
    console.log("New todo created:", newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
}

export default TodoPost;
