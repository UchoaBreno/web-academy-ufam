import axios from "axios";

export const favoriteApi = axios.create({
  baseURL: "http://localhost:3001",
});