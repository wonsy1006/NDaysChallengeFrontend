import axios from 'axios';
import { useCookies } from 'react-cookie';
import { baseUrl } from '../../utils/api';

const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const [cookies] = useCookies(['jwt']);
  const jwtToken = cookies.jwt;
  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    const jwtToken = response.headers['accessToken'];
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

// instance.interceptors.request.use(function (config) {
//   const accessToken = localStorage.getItem('accessToken');
//   const refreshToken = localStorage.getItem('refreshToken');

//   if (!accessToken && !refreshToken) {
//     config.headers['accessToken'] = null;
//     config.headers['refreshToken'] = null;
//     return config;
//   }

//   if (config.headers && accessToken && refreshToken) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//     config.headers['refreshToken'] = `Bearer ${refreshToken}`;
//     return config;
//   }
// });

// instance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (err) {
//     const originalConfig = err.config;

//     if (err.response && err.response.status === 401) {
//       const refreshToken = originalConfig.headers['refreshToken'];
//       try {
//         const data = await axios({
//           url: `/auth/reissue`,
//           method: 'GET',
//           headers: {
//             Authorization: refreshToken,
//           },
//         });
//         if (data) {
//           localStorage.setItem(
//             'accessToken',
//             JSON.stringify(data.accessToken, ['accessToken']),
//           );
//           // localStorage.setItem(
//           //   'refreshToken',
//           //   JSON.stringify(data.data, ['refreshToken']),
//           // );
//           return await instance.request(originalConfig);
//         }
//       } catch (err) {
//         console.log('Token reissue error');
//       }
//       return Promise.reject(err);
//     } else if (err.response && err.err.response.status == 500) {
//     }
//     return Promise.reject(err);
//   },
// );

export default instance;
