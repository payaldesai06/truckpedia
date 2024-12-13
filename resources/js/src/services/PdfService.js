import axiosNode from '../http/axiosNode';

export const mergeAndUpload = (payload) => {
  return axiosNode.post('pdf/mergeAndUpload', payload);
};
