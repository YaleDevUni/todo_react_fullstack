import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import TodoGet from "./components/TodoGet"; // Import TodoGet
import TodoPost from "./components/TodoPost"; // Import TodoPost

// ...other imports

import TodoPage from "./components/TodoPage";
import { TodoProvider } from "./context/TodoContext"; // Import the provider

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/todos"
            element={
              <TodoProvider>
                <TodoPage />
              </TodoProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
