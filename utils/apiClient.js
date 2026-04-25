import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://express-js-on-vercel-five-tau.vercel.app",
  timeout: 5000,
});

export default apiClient;
