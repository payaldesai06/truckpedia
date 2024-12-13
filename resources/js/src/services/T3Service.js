import axiosNode from "../http/axiosNode";

export const fetchT3Statuses = (payload) => {
  return axiosNode.post("t3/statuses", payload);
};
