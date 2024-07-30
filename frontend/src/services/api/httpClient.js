import axios from "axios";

const apiBaseUrl = "http://localhost:8000";

const httpClient = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default httpClient;
