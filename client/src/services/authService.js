const API_URL = "http://localhost:3000/auth"; // Your backend API URL

export async function register(userData) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
}

export async function login(credentials) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
}

export async function validateToken(token) {
  const response = await fetch(`${API_URL}/validate-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Include the token in the header
    },
  });
  return response.json();
}

export async function logout() {
  // Primarily client-side action:
  localStorage.removeItem("token");
  // Optionally, send a request to your logout API:
  // await fetch(`${API_URL}/logout`, { method: 'POST' });
}