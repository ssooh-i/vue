import axios from "axios";

axios.create({
  baseURL: "http://localhost:9999/vue",
  Headers: {
    "Content-Type": "application/json",
  },
});

