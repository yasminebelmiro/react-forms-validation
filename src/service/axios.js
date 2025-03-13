import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: "https://brasilapi.com.br/api",
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json", 
  },
});
