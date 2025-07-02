import axios from 'axios';

const env = import.meta.env.VITE_ENV || 'dev';

const baseURL =
  env === 'dev'
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const actual =  "http://it31-starterpack.sit.kmutt.ac.th/samosit/it31starterpack"

const axiosInstance = axios.create({
  baseURL: actual,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     if (config.authRequired !== false) {
//       const token = localStorage.getItem('access_token');
//       if (token) {
//         config.headers = config.headers || {};
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const status = error.response?.status;

//     if (status === 401) {
//       console.warn('Unauthorized! Redirect to login or handle it.');
//     } else {
//       console.error('API Error:', status, error.response?.data);
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;