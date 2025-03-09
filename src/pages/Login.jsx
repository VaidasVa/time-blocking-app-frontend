import React from 'react';

const Login = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:5173/tasks';
    };

    return (
        <button onClick={handleLogin}>Login with Google</button>
    );
};

export default Login;
