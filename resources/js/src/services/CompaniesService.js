import axios from '../http/axiosNode/index';

export default {
  getCompanyProfile(params) {
    return axios.get('/companies/profile', { params });
  },
  updateCompanyProfile({ id, ...rest }) {
    return axios.patch(`/companies/${id}/profile`, rest);
  },
};
