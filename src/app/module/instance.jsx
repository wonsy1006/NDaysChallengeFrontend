import axios from 'axios';
import baseUrl from '../../utils/api';

const instance = axios.create({
  baseURL: `${baseUrl}`,
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    config.headers['accessToken'] = null;
    config.headers['refreshToken'] = null;
    return config;
  }
  if (config.headers && token) {
    const { accessToken, refreshToken } = JSON.parse(token);
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['refreshToken'] = `Bearer ${refreshToken}`;
    return config;
  }
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;

    if (err.response && err.response.status === 401) {
      const refreshToken = originalConfig.headers['refreshToken'];
      try {
        const data = await axios({
          url: `/auth/reissue`,
          method: 'GET',
          headers: {
            Authorization: refreshToken,
          },
        });
        if (data) {
          localStorage.setItem(
            'accessToken',
            JSON.stringify(data.data, ['accessToken', 'refreshToken']),
          );
          return await instance.request(originalConfig);
        }
      } catch (err) {
        console.log('Token reissue error');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  },
);
export default instance;
