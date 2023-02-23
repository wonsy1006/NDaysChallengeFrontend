import axios from 'axios';
import { useCookies } from 'react-cookie';
import { baseUrl } from '../../utils/api';

const instance = axios.create({
  baseURL: `${baseUrl}`,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

const [cookies, setCookie] = useCookies(['jwt']);

instance.interceptors.request.use((config) => {
  const jwtToken = cookies.jwt;
  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      cookies.refreshToken
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post('/auth/reissue', {
          refreshToken: cookies.refreshToken,
        });
        if (response.status === 200) {
          setCookie('jwt', response.data.accessToken, {
            path: '/',
            expires: new Date(response.data.expiresIn * 1000 + Date.now()),
          });

          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
          return instance(originalRequest);
        }
      } catch (error) {
        setCookie('jwt', '', { path: '/', expires: new Date(0) });
        setCookie('refreshToken', '', { path: '/', expires: new Date(0) });
        window.location.reload();
      }
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
