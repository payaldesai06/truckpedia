import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api23.truckpedia.io/api/"
    : "http://127.0.0.1:3000/api/";

export default axios.create({
  baseURL,
  // You can add your headers here
});
