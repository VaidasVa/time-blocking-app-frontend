// // src/services/AuthService.js
// import axios from 'axios';
//
// const API_URL = 'http://localhost:8080';
//
// class AuthService {
//     async login() {
//         window.location.href = `${API_URL}/oauth2/authorization/google`;
//     }
//
//     async handleLoginCallback() {
//         try {
//             const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
//             if (response.data.token) {
//                 localStorage.setItem('token', response.data.token);
//                 localStorage.setItem('user', JSON.stringify(response.data.user));
//             }
//             return response.data;
//         } catch (error) {
//             console.error('Login failed:', error);
//             throw error;
//         }
//     }
//
//     logout() {
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//     }
//
//     getCurrentUser() {
//         return JSON.parse(localStorage.getItem('user'));
//     }
//
//     getToken() {
//         return localStorage.getItem('token');
//     }
//
//     isAuthenticated() {
//         return !!this.getToken();
//     }
// }
//
// export default new AuthService();