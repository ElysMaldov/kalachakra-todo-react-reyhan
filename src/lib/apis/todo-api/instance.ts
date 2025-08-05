import axios from "axios";

export const todoAPIInstance = axios.create({
  baseURL: "https://todo-api.kalachakra.io",
  timeout: 5_000
});
