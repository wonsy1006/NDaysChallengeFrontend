import axios from 'axios';
import { useCookies } from 'react-cookie';
import { baseUrl } from '../../utils/api';

const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const [cookies] = useCookies(['accessToken']);
  const accessToken = cookies.accessToken;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    const jwtToken = response.headers['jwtToken'];
    if (jwtToken) {
      const [cookies, setCookie] = useCookies(['jwt']);
      setCookie('jwt', jwtToken, { path: '/' });
    }
    return response;
  },
  (error) => {
    const response = error.response;
    if (response && response.status === 401) {
      const [cookies, removeCookie] = useCookies(['jwt']);
      removeCookie('jwt', { path: '/' });
    }

    return Promise.reject(error);
  },
);

export default instance;
