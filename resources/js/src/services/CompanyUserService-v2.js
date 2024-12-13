import axios from '../http/axios'
import axiosNode from '../http/axiosNode';

export const fetchAllUsers = () => {
  return axios.get('company-users-v2/all-users')
}

export const fetchAllWebUsers = () => {
  return axios.post('company-users-v2/get-all-website-users-except-current-user')
}

export const fetchUsers = (params = {}) => {
  const apiParams = {};
  const keysToCheck = ['page', 'pageSize', 'roles', 'fields'];
  const isArrayType = ['roles', 'fields'];

  keysToCheck.forEach((key) => {
    if (params[key] && (isArrayType.includes(key) ? params[key].length : true)) {
      apiParams[key] = params[key];
    }
  });

  return axiosNode.get('/users', { params: apiParams });
};
