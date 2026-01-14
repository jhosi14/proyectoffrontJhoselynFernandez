import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7220/api", // tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
