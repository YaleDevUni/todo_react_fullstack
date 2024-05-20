// import React, { useState, useEffect } from "react";
// import { getTodos } from "../services/todoService";

// function TodoGet() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       const data = await getTodos();
//       setTodos(data);
//     };
//     fetchTodos();
//   }, []);

//   return (
//     <div>
//       <h2>My Todos</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo._id}>
//             {todo.title} - {todo.completed ? "Done" : "Pending"}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoGet;
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext"; // Import the context

function TodoGet() {
  const { todoList } = useContext(TodoContext); // Access the todoList from context

  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo._id}>
            {todo.title} - {todo.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoGet;
