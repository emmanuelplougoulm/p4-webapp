import axios from "axios";

const httpClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "http://p4-collectif.vercel.app"
      : "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default httpClient;
