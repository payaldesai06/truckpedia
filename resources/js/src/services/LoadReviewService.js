import axios from '../http/axiosNode/index';

// TODO: please change all such function names to be as accurate as the API: getReviewStatusForShipperBroker
export const getReviewStatusById = (id) => {
  return axios.get(`/load/review/getStatusForShipperBroker?loadId=${id}`);
};

export const saveReview = (data) => {
  return axios.post('/load/review/submit', data);
};
