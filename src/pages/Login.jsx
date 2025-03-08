import React from 'react';

const Login = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/tasks'; // Redirect to backend
    };

    return (
        <button onClick={handleLogin}>Login with Google</button>
    );
};

export default Login;
