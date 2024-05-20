import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import TodoGet from "./components/TodoGet"; // Import TodoGet
import TodoPost from "./components/TodoPost"; // Import TodoPost

// ...other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/todos" element={<TodoGet />} />{" "}
          {/* Protected route for TodoGet */}
          <Route path="/create-todo" element={<TodoPost />} />{" "}
          {/* Protected route for TodoPost */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
