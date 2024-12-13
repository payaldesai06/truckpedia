import axios from "../http/axios";

export const fetchHos = () => {
  return axios.post("v2/hos/get");
};
