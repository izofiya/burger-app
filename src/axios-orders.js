import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-d091b.firebaseio.com/",
});

export default instance;