// // src/pages/Callback.jsx
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthService from '../services/AuthService';
//
// const Callback = () => {
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const handleCallback = async () => {
//             try {
//                 await AuthService.handleLoginCallback();
//                 navigate('/tasks');
//             } catch (err) {
//                 setError('Failed to login. Please try again.');
//                 setLoading(false);
//             }
//         };
//
//         handleCallback();
//     }, [navigate]);
//
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//
//     return null;
// };
//
// export default Callback;