import axios from "axios";

const env = import.meta.env.VITE_ENV || "dev";
const actual =
  "http://it31-starterpack.sit.kmutt.ac.th/samosit/it31starterpack";

const axiosInstance = axios.create({
  baseURL: actual,
  timeout: 10000,
  withCredentials: true,
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       (error.response?.status === 401 || error.response?.status === 403) &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//       try {
//         const refreshResponse = await axiosInstance.post("/users/refresh");

//         const newAccessToken = refreshResponse.data.access_token;

//         axiosInstance.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${newAccessToken}`;
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         document.cookie = "access_token=; Max-Age=0; path=/;";
//         document.cookie = "refresh_token=; Max-Age=0; path=/;";

//         // redirect ไป login
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
