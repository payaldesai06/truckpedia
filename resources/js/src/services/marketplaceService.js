import axiosNode from '../http/axiosNode';

export const getMarketplaceLanes = (payload) => {
  return axiosNode.get('marketplace/lanes', { params: payload });
};

export const deleteMarketplaceLanes = (id) => {
  return axiosNode.delete(`marketplace/lanes/${id}`);
};

export const createMarketplaceLane = (payload) => {
  return axiosNode.post(`marketplace/lanes`, payload);
};

export const updateMarketplaceLane = ({ id, payload }) => {
  return axiosNode.patch(`marketplace/lanes/${id}`, payload);
};
