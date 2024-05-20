// import React, { useState } from "react";
// import { createTodo } from "../services/todoService";

// function TodoPost() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newTodo = await createTodo({ title, description });
//     // Optionally, update the todo list after successful creation
//     console.log("New todo created:", newTodo);
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">Create Todo</button>
//     </form>
//   );
// }

// export default TodoPost;
import React, { useState, useContext } from "react";
import { createTodo } from "../services/todoService";
import { TodoContext } from "../context/TodoContext"; // Import the context

function TodoPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { updateTodoList } = useContext(TodoContext); // Access the updateTodoList function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = await createTodo({ title, description });
    updateTodoList(newTodo); // Update the todo list after creation
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

  // ... (rest of the component)
}
export default TodoPost;