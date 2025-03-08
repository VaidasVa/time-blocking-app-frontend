import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Tasks = () => {
    const [user, setUser] = useState({"name":"Vaidas", "userId":"110083170615415132009"});
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/tasks', {
            headers: {
                'Accept': '*/*',
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                setTasks(response.data);
                console.log("Tasks loaded:", response.data);
            })
            .catch((e) => console.log('Failed getting tasks: ' + e.message));
    }, []);

    // useEffect(() => {
    //     axios.get('http://localhost:8080/user', { withCredentials: false })
    //         .then(response => setUser(response.data))
    //         .catch(() => console.log('Not authenticated'));
    //     console.log(user);
    // }, []);

    return (
        <div>
            {user ? (
                <div>
                <h1>Welcome, {user.name}</h1>
                    {tasks.map((task, index) => (
                        <p key={index}>{task.title}</p>
                    ))}
                </div>
            ) : (
                <p>No user set</p>

                // <a href="http://localhost:8080/tasks">
                //     <button>Login with Google</button>
                // </a>
            )}
        </div>
    );
};

export default Tasks;
