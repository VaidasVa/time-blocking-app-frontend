// // src/services/api.js
// import axios from 'axios';
// import AuthService from './AuthService';
//
// const api = axios.create({
//     baseURL: 'http://localhost:8080',
//     withCredentials: false
// });
//
// // Request interceptor for API calls
// api.interceptors.request.use(
//     config => {
//         const token = AuthService.getToken();
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );
//
// // Response interceptor for API calls
// api.interceptors.response.use(
//     response => response,
//     async error => {
//         const originalRequest = error.config;
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true;
//             AuthService.logout();
//             window.location.href = '/login';
//         }
//         return Promise.reject(error);
//     }
// );
//
// export default api;