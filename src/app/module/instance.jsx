import axios from 'axios';
import { useCookies } from 'react-cookie';
import { baseUrl } from '../../utils/api';

const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

// instance.interceptors.request.use((config) => {
//   const [cookies] = useCookies(['accessToken']);
//   const accessToken = cookies.accessToken;
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// instance.interceptors.response.use(
//   (response) => {
//     const accessToken = response.headers['accessToken'];
//     if (accessToken) {
//       const [cookies, setCookie] = useCookies(['accessToken']);
//       setCookie('accessToken', accessToken, { path: '/' });
//     }
//     return response;
//   },
//   (error) => {
//     const response = error.response;
//     if (response && response.status === 401) {
//       const [cookies, removeCookie] = useCookies(['accessToken']);
//       removeCookie('accessToken', { path: '/' });
//     }

//     return Promise.reject(error);
//   },
// );

export default instance;
