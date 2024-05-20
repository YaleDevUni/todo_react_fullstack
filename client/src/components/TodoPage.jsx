import React from "react";
import TodoGet from "./TodoGet";
import TodoPost from "./TodoPost";

function TodoPage() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoPost />
      <TodoGet />
    </div>
  );
}

export default TodoPage;
