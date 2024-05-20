import React, { createContext, useState, useEffect } from "react";
import { getTodos } from "../services/todoService";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodoList(todos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const updateTodoList = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <TodoContext.Provider value={{ todoList, updateTodoList }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
