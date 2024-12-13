import axiosNode from '../http/axiosNode';

export const getRatePredictions = (payload) => {
  return axiosNode.post('/greenscreens/predictions/rates', payload);
};
