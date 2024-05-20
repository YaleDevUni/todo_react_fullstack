import axios from "axios";
// replace with your API URL
const apiUrl = "http://localhost:3000/todos";

const getTodos = async () => {
  const response = await axios.get(apiUrl, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you're storing the token in local storage after login
    },
  });
  return response.data;
};

const createTodo = async (todoData) => {
  const response = await axios.post(apiUrl, todoData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export { getTodos, createTodo };
