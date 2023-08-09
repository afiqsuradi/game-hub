import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3c9f0d4de6b40c385f1c9bb5ddeee91",
  },
});
