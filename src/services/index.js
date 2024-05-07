import axios from "axios";
import { getTokenFromLocalStorage } from "../hooks/localStorage.helper";

export const base_URL = "https://skihub-server-production.up.railway.app/api";
// export const base_URL = "http://localhost:3000/api";

// const $api = axios.create({
//   baseURL: base_URL,
//   withCredentials: false,
//   headers: {
//     Authorization: `Bearer ${getTokenFromLocalStorage() || ''}`,
//   }
// });

// const createAxiosInstance = async () => {
//   const token = await getTokenFromLocalStorage();
//   const $api = axios.create({
//     baseURL: base_URL,
//     withCredentials: false,
//     headers: {
//       Authorization: `Bearer ${token || ''}`,
//     }
//   })
//   return $api;
// }

const $api = axios.create({
  baseURL: base_URL,
  withCredentials: false,
});

$api.interceptors.request.use(
  async (config) => {
    try {
      const token = await getTokenFromLocalStorage();
      if(token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error('Ошибка при настройки Авторизации заголовка:', error);
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default $api;
// export default createAxiosInstance();
