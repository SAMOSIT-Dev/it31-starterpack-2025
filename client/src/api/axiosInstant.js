import axios from 'axios';

const env = import.meta.env.VITE_ENV || 'dev';
const actual = "http://it31-starterpack.sit.kmutt.ac.th/samosit/it31starterpack";

const axiosInstance = axios.create({
  baseURL: actual,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor to add token to headers
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Token will be sent via cookies automatically due to withCredentials: true
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor to handle token refresh
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
    
//     if (error.response?.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
      
//       try {
//         await axiosInstance.post('/users/refresh', {});
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         // Refresh failed, redirect to login
//         window.location.href = '/login';
//         return Promise.reject(refreshError);
//       }
//     }
    
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;