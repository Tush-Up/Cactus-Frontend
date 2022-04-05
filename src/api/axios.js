import axios from "axios";

export default axios.create({
  baseURL: "https://tushup-cactus.herokuapp.com/users",
});
