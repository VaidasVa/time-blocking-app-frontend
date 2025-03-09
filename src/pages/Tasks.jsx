import {useEffect, useState} from 'react';
import "/styles/tasks.css"
import axios from 'axios';
import {Button} from "@mui/material"
import '@mui/icons-material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import {Calendar} from "@fullcalendar/core";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';

const Tasks = () => {
    const [user, setUser] = useState({"name": "Vaidas", "userId": "110083170615415132009"});
    const [tasks, setTasks] = useState([]);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/tasks', {
            headers: {
                'Accept': '*/*', "Content-Type": "application/json",
            }
        })
            .then(response => {
                setTasks(response.data);
                console.log("Tasks loaded:", response.data);
            })
            .catch((e) => console.log('Failed getting tasks: ' + e.message));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/folders', {
            headers: {
                'Accept': '*/*', "Content-Type": "application/json",
            }
        })
            .then(response => {
                setFolders(response.data);
                console.log("Folders loaded:", response.data);
            })
            .catch((e) => console.log('Failed getting folders: ' + e.message));
    }, []);

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    return (<div className={"mainContainer"}>
        <div className={"taskSectionContainer"}>

            {folders.map((folder) => (
                <div key={folder.id} className="folderContainer">
                    <div className={"folderTitle"}>{folder.name}
                        <div className={"taskButton"}>
                        <Button color="theme">
                            <AddOutlinedIcon/>
                            Task
                        </Button>
                    </div></div>
                    {tasks.filter((task) => task.folderId === folder.id)
                        .map(task => (<div className={"task"} key={task.id}>
                            <div>{task.title}</div>
                            <div className={"taskDurationText"}>{task.duration} min</div>

                        </div>))}
                </div>
            ))}
            <div className={"taskButtons"}>
                <div className={"taskButton"}>
                    <Button color="theme">
                        <AddOutlinedIcon/>
                        Folder
                    </Button>
                </div>
            </div>
        </div>
        <div className="calendar">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                dateClick={handleDateClick}
            />
        </div>

    </div>);
};

export default Tasks;
