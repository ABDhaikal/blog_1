import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://seemlyzinc-us.backendless.app/api/",
});