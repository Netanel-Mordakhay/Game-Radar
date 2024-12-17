import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c64a7b6ab19416ea5f7853912c5fbd3",
  },
});
