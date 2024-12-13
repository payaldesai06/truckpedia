import axios from '../../axios.js';
import store from '@/store/store';
import router from '@/router';

// Request interceptor
axios.interceptors.request.use((request) => {
  // const token = store.getters['auth/token'];
  const token = localStorage.getItem('access_token');

  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // const locale = store.getters['lang/locale']
  // if (locale) {
  //     request.headers.common['Accept-Language'] = locale
  // }

  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request;
});

axios.interceptors.response.use(
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

export default axios;
