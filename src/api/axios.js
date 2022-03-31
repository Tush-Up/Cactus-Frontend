import axios from "axios";

export default axios.create({
  baseURL: "http://tushup-cactus.herokuapp.com/users",
});
