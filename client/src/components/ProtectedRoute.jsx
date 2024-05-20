import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "../services/authService";

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsAuthenticated(false);
          return;
        }
        const response = await validateToken(token);
        setIsAuthenticated(response.valid);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkTokenValidity();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (isAuthenticated === null) {
    return null; // Show a loading state while checking token validity
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
