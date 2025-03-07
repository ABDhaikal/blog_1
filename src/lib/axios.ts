import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://givingairport-us.backendless.app/api/",
});