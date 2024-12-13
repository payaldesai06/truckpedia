import axiosNode from '../../axiosNode.js';
import store from '@/store/store';
import router from '@/router';

axiosNode.interceptors.request.use((request) => {
  const token = localStorage.getItem('access_token');

  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`;
  }

  return request;
});

axiosNode.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response.status == 401) {
      // 401 happens when access token is invalid or expired.
      store.dispatch('auth/logoutLocally');
      router.push({ name: 'page-login' });
    }

    return Promise.reject(error);
  }
);

export default axiosNode;
