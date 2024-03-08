import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
