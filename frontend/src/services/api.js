import axios from "axios";

const API = axios.create({
  baseURL: "https://demo-bv2c.onrender.com/api/products",
});

export default API;