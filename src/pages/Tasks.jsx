import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/user', { withCredentials: true })
            .then(response => setUser(response.data))
            .catch(() => console.log('Not authenticated'));
        console.log(user);
    }, []);

    return (
        <div>
            {user ? (
                <h1>Welcome, {user.name}</h1>
            ) : (
                <a href="http://localhost:8080/tasks">
                    <button>Login with Google</button>
                </a>
            )}
        </div>
    );
};

export default Tasks;
