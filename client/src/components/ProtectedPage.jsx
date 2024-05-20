import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export default function ProtectedPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(); // Call the logout function
    navigate("/login"); // Redirect after logout
  };

  return (
    <div>
      <h1>Protected Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
